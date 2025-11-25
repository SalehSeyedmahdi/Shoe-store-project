import { El } from "../../utils/el.js";

export function addToCart() {
	const postCart_URL = "http://localhost:3000/cart";

	const number = parseInt(document.querySelector(".count-products").innerText);
	console.log(number);
	const id = parseInt(localStorage.getItem("selectedItemId"));
	console.log(id);

	async function postCart() {
		const data = await fetch(postCart_URL, {
			method: "POST",
			body: JSON.stringify({ sneakerId: id, quantity: number }),
			headers: {
				"Content-type": "application/json; charset = UTF-8",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		try {
			const response = await data.json();
			console.log(response);

			const addToCartMessage = El({
				element: "div",
				className:
					"w-full h-[75px] flex items-center justify-center z-999 absolute top-0 right-0 left-0 font-semibold text-[#FFFFFF] bg-[#107d4d] rounded-xl",
				innerText: "Item successfully added to your cart",
			});
			app.append(addToCartMessage);
			setTimeout(() => {
				addToCartMessage.remove();
			}, 2000);
		} catch (error) {
			console.error(error);
		}
	}
	postCart();
}
