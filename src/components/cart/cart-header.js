import { El } from "../../utils/el.js";

export function CartHeader() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[66px] flex items-center justify-between absolute top-0 bg-[#FFFFFF] p-[35px]",
		children: [
			El({
				element: "div",
				className: "flex items-center gap-[20px]",
				children: [
					El({
						element: "img",
						className: "w-[16px] h-[25px]",
						restAttrs: {
							src: "/assets/images/black-logo.png",
						},
					}),
					El({
						element: "p",
						innerText: "My Cart",
						className: "text-[25px] font-bold text-[#000000]",
					}),
				],
			}),
			El({
				element: "img",
				className: "w-[35px] h-[35px] cursor-pointer",
				restAttrs: {
					src: "/assets/images/search-input-icon.png",
				},
			}),
		],
	});
}
