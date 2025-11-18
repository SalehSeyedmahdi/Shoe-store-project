export function productLogic() {
	const getSneakers_URL =
		"http://localhost:3000/sneaker?page=1&limit=20&search=&brands=";

	const getSneakersBrand_URL = "http://localhost:3000/sneaker/brands";

	async function getAllSneakers() {
		const data = await fetch(getSneakers_URL, {
			method: "GET",
			headers: {
				"Content-type": "application/json; charset = UTF-8",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		try {
			if (!data.ok) {
				throw new Error("Network response was not ok");
			}
			const response = await data.json();
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}
	async function getSneakersBrand() {
		const data = await fetch(getSneakersBrand_URL, {
			method: "GET",
			headers: {
				"Content-type": "application/json; charset = UTF-8",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		try {
			if (!data.ok) {
				throw new Error("Network response was not ok");
			}
			const response = await data.json();
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}
	getAllSneakers();
	getSneakersBrand();
}
