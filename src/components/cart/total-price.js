import { El } from "../../utils/el.js";

export function TotalPrice() {
	return El({
		element: "div",
		className:
			"w-full flex justify-between items-center absolute bottom-[66px] bg-[#FFFFFF] p-[24px] rounded-t-3xl border-t-[2px] border-[#f3f3f3]",
		children: [
			El({
				element: "div",
				className: "flex flex-col",
				children: [
					El({
						element: "p",
						innerText: "Total Price",
						className: "text-[14px] text-[#787672] font-normal",
					}),
					El({
						element: "p",
						innerText: "$250.00",
						className: "text-[22px] text-[#000000] font-bold",
					}),
				],
			}),
			El({
				element: "div",
				className:
					"w-[250px] h-[58px] flex justify-center items-center gap-4 bg-[#000000] rounded-4xl shadow-2xl cursor-pointer",
				children: [
					El({
						element: "p",
						innerText: "Checkout",
						className: "font-semibold text-[#FFFFFF] text-[16px]",
					}),
					El({
						element: "img",
						className: "w-[18px] h-[18px]",
						restAttrs: {
							src: "../../../public/images/arrow-button.png",
						},
					}),
				],
			}),
		],
	});
}
