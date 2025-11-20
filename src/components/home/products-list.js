import { El } from "../../utils/el.js";

export function ProductList() {
	const container = El({
		element: "div",
		className:
			"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
		restAttrs: {
			id: "product-container",
		},
	});
	const getSneakers_URL = "http://localhost:3000/sneaker?page=1&limit=14";

	async function getAllSneakers() {
		const data = await fetch(getSneakers_URL, {
			method: "GET",
			headers: {
				"Content-type": "application/json; charset = UTF-8",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		try {
			const response = await data.json();
			console.log(response);

			const products = response.data;

			const cardList = products.map((item) => {
				return El({
					element: "div",
					className:
						"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
					children: [
						El({
							element: "img",
							className: "w-[182px] h-[182px] rounded-[24px]",
							restAttrs: {
								src: item.imageURL,
							},
						}),
						El({
							element: "div",
							className: "flex flex-col gap-[8px]",
							children: [
								El({
									element: "p",
									innerText: item.name,
									className:
										"font-bold text-[20px] text-[#152536] text-nowrap overflow-x-clip",
								}),
								El({
									element: "p",
									innerText: `$ ${item.price}.00`,
									className: "font-semibold text-[16px] text-[#152536]",
								}),
							],
						}),
					],
				});
			});
			container.append(...cardList);
			home.append(container);
		} catch (error) {
			console.error(error);
		}
	}
	getAllSneakers();
	return container;
}
