import { El } from "../../utils/el.js";
import { store } from "../../utils/store.js";
import { SingleProductLogic } from "../single-product/single-product-logic.js";

export function ProductList() {
	const container = El({
		element: "div",
		className:
			"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
		restAttrs: {
			id: "product-container",
		},
	});

	async function renderList() {
		const brand = store.getState("filteredBrand");

		let url = "http://localhost:3000/sneaker?page=1&limit=14";

		if (brand && brand !== "All") {
			url += `&brands=${brand.toUpperCase()}`;
		}

		const data = await fetch(url, {
			method: "GET",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});

		const response = await data.json();
		const products = response.data;

		container.innerHTML = "";

		products.forEach((item) => {
			const card = El({
				element: "div",
				className:
					"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
				restAttrs: { id: item.id },
				eventListener: [
					{
						event: "click",
						callback: () => {
							localStorage.setItem("selectedItemId", item.id);
							store.setState("homeState", {
								selectedBrands: store.getState("filteredBrand"),
								scroll: container.scrollTop,
								brandScroll:
									document.querySelector(".brands-filter")?.scrollLeft || 0,
							});

							SingleProductLogic(item.id);
						},
					},
				],
				children: [
					El({
						element: "img",
						className: "w-[182px] h-[182px] rounded-[24px]",
						restAttrs: { src: item.imageURL },
					}),
					El({
						element: "div",
						className: "flex flex-col gap-[8px]",
						children: [
							El({
								element: "p",
								innerText: item.name,
								className:
									"font-bold text-[20px] text-[#152536] text-nowrap overflow-x-clip",
							}),
							El({
								element: "p",
								innerText: `$ ${item.price}.00`,
								className: "font-semibold text-[16px] text-[#152536]",
							}),
						],
					}),
				],
			});

			container.append(card);
		});

		// بازگردانی اسکرول فقط یک بار — هنگام بازگشت از SingleProduct
		const saved = store.getState("homeState");
		if (saved && typeof saved.scroll === "number") {
			container.scrollTo(0, saved.scroll);
		}
	}

	// اجرا
	renderList();

	// reactive بودن
	store.subscribe("filteredBrand", () => {
		// ریست اسکرول هنگام تغییر فیلتر
		store.setState("homeState", {
			scroll: null,
			brandScroll: null,
		});
		renderList();
	});

	return container;
}
