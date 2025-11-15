import { El } from "../../utils/el.js";

export function FirstOnboarding() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[926px] flex flex-col items-center justify-start gap-[306px] bg-[#ffffff]",
		children: [
			El({
				element: "div",
				className: "flex justify-center items-center gap-[12px] mt-[360.5px]",
				children: [
					El({
						element: "div",
						className:
							"w-[59px] h-[59px] flex justify-center items-center bg-[#000000] rounded-full",
						children: [
							El({
								element: "img",
								className: "w-[26.54px] h-[39.93px]",
								restAttrs: {
									src: "../../../public/images/white-logo.png",
								},
							}),
						],
					}),
					El({
						element: "p",
						innerText: "Shoea",
						className: "text-[52px] text-[#152536] font-bold",
					}),
				],
			}),
			El({
				element: "img",
				className: "w-[48px] h-[48px]",
				restAttrs: {
					src: "../../../public/images/loading.svg",
				},
			}),
		],
	});
}
