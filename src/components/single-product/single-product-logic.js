import { SingleProductPage } from "../single-product/single-product.js";

export function SingleProductLogic(itemId) {
	const id_URL = "http://localhost:3000/sneaker/item/" + itemId;
	async function getOneSneaker() {
		const data = await fetch(id_URL, {
			method: "GET",
			headers: {
				"Content-type": "application/json; charset = UTF-8",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		try {
			const response = await data.json();
			console.log(response);
			const imageURL = response.imageURL;
			console.log(imageURL);
			const name = response.name;
			console.log(name);
			const price = response.price;
			console.log(price);
			app.innerText = "";
			app.append(SingleProductPage(imageURL, name, price));
		} catch (error) {
			console.error(error);
		}
	}
	getOneSneaker();
}
