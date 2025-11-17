import { El } from "../../utils/el.js";

export function Footer() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[66px] flex items-center gap-[44px] absolute bottom-0 right-0 left-0 bg-[#FFFFFF] pr-[48px] pl-[48px] pt-[12px] pb-[16px]",
		children: [
			El({
				element: "img",
				className: "w-[29px] h-[38px] cursor-pointer",
				restAttrs: {
					src: "../../../public/images/home.png",
				},
			}),
			El({
				element: "img",
				className: "w-[29px] h-[38px] cursor-pointer",
				restAttrs: {
					src: "../../../public/images/cart.png",
				},
			}),
			El({
				element: "img",
				className: "w-[33px] h-[38px] cursor-pointer",
				restAttrs: {
					src: "../../../public/images/orders.png",
				},
			}),
			El({
				element: "img",
				className: "w-[33px] h-[38px] cursor-pointer",
				restAttrs: {
					src: "../../../public/images/wallet.png",
				},
			}),
			El({
				element: "img",
				className: "w-[33px] h-[38px] cursor-pointer",
				restAttrs: {
					src: "../../../public/images/profile.png",
				},
			}),
		],
	});
}
