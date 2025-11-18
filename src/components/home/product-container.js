import { El } from "../../utils/el.js";

export function productContainer() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[632px] flex flex-col gap-[20px] pl-[24px] overflow-y-scroll product-container",
		children: [
			// Products will be appended here
		],
	});
}
