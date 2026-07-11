import { El } from "../../utils/el.js";
import { router } from "../../utils/router.js";

export function CartFooter() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[66px] flex items-center gap-[44px] absolute bottom-0 right-0 left-0 bg-[#FFFFFF] pr-[48px] pl-[48px] pt-[12px] pb-[16px]",
		children: [
			El({
				element: "img",
				className: "w-[29px] h-[38px] cursor-pointer",
				eventListener: [
					{
						event: "click",
						callback: () => {
							router.navigate("/home");
						},
					},
				],
				restAttrs: {
					src: "/assets/images/white-home.png",
				},
			}),
			El({
				element: "img",
				className: "w-[34px] h-[42px] cursor-pointer",
				restAttrs: {
					src: "/assets/images/black-cart.png",
				},
			}),
			El({
				element: "img",
				className: "w-[33px] h-[38px] cursor-pointer opacity-50",
				restAttrs: {
					src: "/assets/images/orders.png",
				},
			}),
			El({
				element: "img",
				className: "w-[33px] h-[38px] cursor-pointer opacity-50",
				restAttrs: {
					src: "/assets/images/wallet.png",
				},
			}),
			El({
				element: "img",
				className: "w-[33px] h-[38px] cursor-pointer opacity-50",
				restAttrs: {
					src: "/assets/images/profile.png",
				},
			}),
		],
	});
}
