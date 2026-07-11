import { El } from "../../utils/el.js";

export function OrderList() {
	const cntainer = El({
		element: "div",
		className:
			"w-[428px] flex flex-col items-center gap-[15px] bg-[#FFFFFF] p-[24px] overflow-y-scroll pb-[180px] order-list",
	});

	const getOrders_URL = "https://shoea-backend.onrender.com/cart";
	async function fetchOrders() {
		const data = await fetch(getOrders_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const response = await data.json();
		console.log(response);

		response.forEach((order) => {
			const orderItem = El({
				element: "div",
				className:
					"w-full flex items-center gap-[25px] rounded-2xl p-[20px] shadow-lg",
				children: [
					El({
						element: "img",
						className: "w-[120px] h-[120px] rounded-2xl",
						restAttrs: {
							src: order.sneaker.imageURL,
						},
					}),
					El({
						element: "div",
						className: "w-2/3 flex flex-col justify-between h-full p-[10px]",
						children: [
							El({
								element: "div",
								className: "flex justify-between items-center",
								children: [
									El({
										element: "p",
										innerText: order.sneaker.name,
										className:
											"w-30 text-[20px] font-bold text-[#000000] text-nowrap overflow-x-clip",
									}),
									El({
										element: "img",
										className: "w-[22px] h-[22px]",
										restAttrs: {
											src: "/assets/images/trash.png",
										},
									}),
								],
							}),
							El({
								element: "div",
								className: "flex justify-between items-center",
								children: [
									El({
										element: "p",
										innerText: `$${order.sneaker.price}.00`,
										className: "text-[18px] font-semibold text-[#000000]",
									}),
									El({
										element: "div",
										className:
											"flex items-center justify-between gap-4 font-semibold text-[12px] bg-[#f3f3f3] rounded-3xl p-2 pr-3 pl-3",
										children: [
											El({
												element: "img",
												className: "w-[13.5px] h-[13.5px] cursor-pointer",
												eventListener: [
													{
														event: "click",
														callback: () => {
															const countProducts =
																document.querySelector(".count-products");
															let count = parseInt(order.quantity);
															if (count > 1) {
																count -= 1;
																countProducts.innerText = count;
															} else {
																const minimumMessage = El({
																	element: "div",
																	className:
																		"w-full h-[75px] flex items-center justify-center z-999 absolute top-0 right-0 left-0 font-semibold text-[#FFFFFF] bg-[red] rounded-xl",
																	innerText: "Minimum quantity is 1",
																});
																app.append(minimumMessage);
																setTimeout(() => {
																	minimumMessage.remove();
																}, 2000);
															}
														},
													},
												],
												restAttrs: {
													src: "/assets/images/minus.png",
												},
											}),
											El({
												element: "p",
												innerText: order.quantity,
												className: "font-bold text-[18px]",
												restAttrs: { id: "count-products" },
											}),
											El({
												element: "img",
												className: "w-[13.5px] h-[13.5px] cursor-pointer",
												eventListener: [
													{
														event: "click",
														callback: () => {
															const countProducts =
																document.querySelector("#count-products");
															let count = parseInt(order.quantity);
															if (count < 5) {
																count += 1;
																countProducts.innerText = count;
															} else {
																const maximumMessage = El({
																	element: "div",
																	className:
																		"w-full h-[75px] flex items-center justify-center z-999 absolute top-0 right-0 left-0 font-semibold text-[#FFFFFF] bg-[red] rounded-xl",
																	innerText: "Maximum quantity reached",
																});
																app.append(maximumMessage);
																setTimeout(() => {
																	maximumMessage.remove();
																}, 2000);
															}
														},
													},
												],
												restAttrs: {
													src: "/assets/images/plus.png",
												},
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			});
			cntainer.appendChild(orderItem);
		});
	}
	fetchOrders();
	return cntainer;
}
