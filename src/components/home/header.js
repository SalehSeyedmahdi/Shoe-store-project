import { El } from "../../utils/el.js";
import { getGreeting } from "../../utils/greeting.js";

export function Header() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[80px] flex justify-between items-center absolute top-0 right-0 left-0 bg-[#FFFFFF] p-[24px]",
		children: [
			El({
				element: "div",
				className: "flex flex-col gap-[10px]",
				children: [
					El({
						element: "p",
						innerText: getGreeting(),
						className: "font-medium text-[16px] text-[#757475]",
					}),
					El({
						element: "p",
						innerText: localStorage.getItem("username"),
						className: "font-bold text-[16px] text-[#152536]",
					}),
				],
			}),
			El({
				element: "div",
				className: "flex gap-[16px]",
				children: [
					El({
						element: "img",
						className: "w-[24px] h-[22px] cursor-pointer",
						restAttrs: {
							src: "../../../public/images/bell.png",
						},
					}),
					El({
						element: "img",
						className: "w-[24px] h-[24px] cursor-pointer",
						restAttrs: {
							src: "../../../public/images/heart.png",
						},
					}),
				],
			}),
		],
	});
}
