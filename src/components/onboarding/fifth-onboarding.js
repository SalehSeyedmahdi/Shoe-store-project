import { El } from "../../utils/el.js";

export function FifthOnboarding() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[926px] flex flex-col items-center justify-start bg-[#ffffff]",
		children: [
			El({
				element: "img",
				className: "w-full h-[602px]",
				restAttrs: {
					src: "../../../public/images/fifth-onboarding.jpg",
				},
			}),
			El({
				element: "div",
				className:
					"w-full h-[324px] flex flex-col items-center justify-between p-[32px]",
				children: [
					El({
						element: "p",
						innerText: "Let’s fulfill your fashion needs with shoearight now!",
						className:
							"leading-snug font-semibold text-[32px] text-[#000000] text-center",
					}),
					El({
						element: "button",
						innerText: "Get Started",
						className:
							"w-[380px] h-[47px] text-[14px] text-[#FFFFFF] font-medium bg-[#212529] rounded-[30px]",
					}),
				],
			}),
		],
	});
}
