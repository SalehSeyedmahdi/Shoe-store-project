import { El } from "../../utils/el.js";
import { CartFooter } from "../cart/cart-footer.js";
import { CartHeader } from "./cart-header.js";
import { OrderList } from "./order-list.js";
import { TotalPrice } from "./total-price.js";

export function CartPage() {
	const cart = El({
		element: "div",
		className:
			"w-[428px] h-[926px] relative flex flex-col items-center justify-between gap-0 bg-[#ffffff] p-[24px] pt-[132px]",
		restAttrs: { id: "home" },
	});

	cart.append(CartHeader(), OrderList(), TotalPrice(), CartFooter());

	return cart;
}
