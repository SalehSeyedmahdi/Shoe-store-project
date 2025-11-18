import { El } from "../../utils/el.js";

export function BrandFilter() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[83px] flex flex-col gap-[20px] pl-[24px] mt-[20px]",
		children: [
			El({
				element: "p",
				innerText: "Most Popular",
				className: "font-semibold text-[20px] text-[#152536]",
			}),
			El({
				element: "div",
				className: "w-full flex gap-[12px] overflow-x-scroll brands",
				children: [
					El({
						element: "div",
						innerText: "All",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#FFFFFF] bg-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
					El({
						element: "div",
						innerText: "Nike",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
					El({
						element: "div",
						innerText: "Adidas",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
					El({
						element: "div",
						innerText: "Puma",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
					El({
						element: "div",
						innerText: "Asics",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
					El({
						element: "div",
						innerText: "Rebook",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
					El({
						element: "div",
						innerText: "NB",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
					El({
						element: "div",
						innerText: "Converse",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
					El({
						element: "div",
						innerText: "Hushpuppies",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px]",
					}),
				],
			}),
		],
	});
}
