import { El } from "../../utils/el.js";
import { store } from "../../utils/store.js";
import { SingleProductLogic } from "../single-product/single-product-logic.js";

export function BrandFilter() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[83px] flex flex-col gap-[20px] pl-[24px] mt-[20px]",
		children: [
			El({
				element: "p",
				innerText: "Most Popular",
				className: "font-semibold text-[20px] text-[#152536]",
			}),
			El({
				element: "div",
				className: "w-full flex gap-[12px] overflow-x-scroll brands",
				children: [
					El({
						element: "div",
						innerText: "All",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#FFFFFF] bg-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);

									const getSneakers_URL = `http://localhost:3000/sneaker?page=1&limit=14`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(getSneakers_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Nike",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);
									const uppercasedBrand = brandName.toUpperCase();

									const brand_URL = `http://localhost:3000/sneaker?page=1&limit=14&brands=&brands=${uppercasedBrand}`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(brand_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Adidas",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);
									const uppercasedBrand = brandName.toUpperCase();

									const brand_URL = `http://localhost:3000/sneaker?page=1&limit=14&brands=&brands=${uppercasedBrand}`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(brand_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Puma",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);
									const uppercasedBrand = brandName.toUpperCase();

									const brand_URL = `http://localhost:3000/sneaker?page=1&limit=14&brands=&brands=${uppercasedBrand}`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(brand_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Asics",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);
									const uppercasedBrand = brandName.toUpperCase();

									const brand_URL = `http://localhost:3000/sneaker?page=1&limit=14&brands=&brands=${uppercasedBrand}`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(brand_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Rebook",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);
									const uppercasedBrand = brandName.toUpperCase();

									const brand_URL = `http://localhost:3000/sneaker?page=1&limit=14&brands=&brands=${uppercasedBrand}`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(brand_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "New Balance",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] text-nowrap border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);
									const uppercasedBrand = brandName.toUpperCase();

									const brand_URL = `http://localhost:3000/sneaker?page=1&limit=14&brands=&brands=${uppercasedBrand}`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(brand_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Converse",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);
									const uppercasedBrand = brandName.toUpperCase();

									const brand_URL = `http://localhost:3000/sneaker?page=1&limit=14&brands=&brands=${uppercasedBrand}`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(brand_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Hushpuppies",
						className:
							"flex justify-center items-center font-semibold text-[16px] text-[#343A40] border-[2px] border-[#343A40] hover:bg-[#343A40] hover:text-[#FFFFFF] cursor-pointer rounded-[25px] p-[10px] pl-[20px] pr-[20px] brands",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const target = e.currentTarget;
									const brandName = target.innerText;
									if (brandName === store.getState("filteredBrand")) {
										return;
									}
									const allBrands = document.querySelectorAll(".brands");

									allBrands.forEach((s) => {
										s.style.backgroundColor = "#FFFFFF";
										s.style.color = "#343A40";
									});

									target.dataset.active = "true";
									target.style.backgroundColor = "#343A40";
									target.style.color = "#FFFFFF";
									store.setState("filteredBrand", brandName);
									const uppercasedBrand = brandName.toUpperCase();

									const brand_URL = `http://localhost:3000/sneaker?page=1&limit=14&brands=&brands=${uppercasedBrand}`;

									const container = El({
										element: "div",
										className:
											"w-[428px] grid grid-cols-2 gap-y-[24px] gap-[16px] pr-[24px] pl-[24px] overflow-y-scroll mt-[24px] mb-[32px]",
										restAttrs: {
											id: "product-container",
										},
									});

									async function getBrandSneakers() {
										const data = await fetch(brand_URL, {
											method: "GET",
											headers: {
												"Content-type": "application/json; charset = UTF-8",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										});
										const response = await data.json();
										console.log(response);
										const products = response.data;

										const cardList = products.map((item) => {
											return El({
												element: "div",
												className:
													"w-[182px] h-[244px] bg-[#FFFFFF] flex flex-col gap-[12px] cursor-pointer",
												restAttrs: {
													id: item.id,
												},
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															e.target.id = item.id;
															console.log(item.id);
															const itemId = e.target.id;
															SingleProductLogic(itemId);
														},
													},
												],
												children: [
													El({
														element: "img",
														className: "w-[182px] h-[182px] rounded-[24px]",
														restAttrs: {
															src: item.imageURL,
														},
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
																className:
																	"font-semibold text-[16px] text-[#152536]",
															}),
														],
													}),
												],
											});
										});
										container.append(...cardList);
										home.removeChild(
											document.getElementById("product-container")
										);
										home.append(container);
									}
									getBrandSneakers();
								},
							},
						],
					}),
				],
			}),
		],
	});
}
