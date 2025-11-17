import { El } from "../../utils/el.js";
import { FourthOnboarding } from "./fourth-onboarding.js";

export function ThirdOnboarding() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[926px] flex flex-col items-center justify-start bg-[#ffffff]",
		children: [
			El({
				element: "img",
				className: "w-full h-[602px]",
				restAttrs: {
					src: "../../../public/images/third-onboarding.jpg",
				},
			}),
			El({
				element: "div",
				className:
					"w-full h-[324px] flex flex-col items-center justify-between p-[32px]",
				children: [
					El({
						element: "p",
						innerText: "We provide high quality products just for you",
						className:
							"leading-snug font-semibold text-[32px] text-[#000000] text-center",
					}),
					El({
						element: "div",
						className: "flex flex-col items-center gap-[35px]",
						children: [
							El({
								element: "img",
								className: "w-[102px] h-[23px]",
								restAttrs: {
									src: "../../../public/images/first-swiper.png",
								},
							}),
							El({
								element: "button",
								innerText: "Next",
								className:
									"w-[380px] h-[47px] text-[14px] text-[#FFFFFF] font-medium bg-[#212529] cursor-pointer rounded-[30px]",
								eventListener: [
									{
										event: "click",
										callback: () => {
											(app.innerText = ""), app.append(FourthOnboarding());
										},
									},
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
