import { El } from "../../utils/el";
import { HomePage } from "../home/home.js";

export function SingleProductPage(imageURL, name, price) {
	const singleProduct = El({
		element: "div",
		className:
			"w-[428px] h-[926px] relative flex flex-col items-center justify-between gap-0 bg-[#FFFFFF]",
		restAttrs: {
			id: "single-product",
		},
		children: [
			El({
				element: "img",
				className:
					"w-[24px] h-[24px] absolute top-[24px] left-[24px] cursor-pointer",
				eventListener: [
					{
						event: "click",
						callback: () => {
							app.innerText = "";
							app.append(HomePage());
						},
					},
				],
				restAttrs: {
					src: "../../../public/images/arrow-left-short.svg",
				},
			}),
			El({
				element: "img",
				className: "w-full h-[402px]",
				restAttrs: {
					src: imageURL,
				},
			}),
			El({
				element: "div",
				className: "w-full h-[524px] p-[24px]",
				children: [
					El({
						element: "div",
						className:
							"flex flex-col gap-4 border-b border-[#eeefef] pb-[15px]",
						children: [
							El({
								element: "div",
								className: "flex items-center justify-between",
								children: [
									El({
										element: "p",
										innerText: name,
										className: "font-semibold text-[28px] text-[#000000]",
									}),
									El({
										element: "img",
										className: "w-[32px] h-[32px] cursor-pointer",
										restAttrs: {
											src: "../../../public/images/heart-inside.png",
										},
									}),
								],
							}),
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "div",
										innerText: "5,371 sold",
										className:
											"bg-[#ebecec] text-[12px] rounded-lg p-1 pr-2 pl-2",
									}),
									El({
										element: "div",
										className: "flex items-center gap-2",
										children: [
											El({
												element: "img",
												className: "w-[24px] h-[24px]",
												restAttrs: {
													src: "../../../public/images/star-rate.png",
												},
											}),
											El({
												element: "p",
												innerText: "4.3 (5,389 reviews)",
												className: "text-[14px]",
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col gap-[10px] mt-[15px]",
						children: [
							El({
								element: "p",
								innerText: "Description",
								className: "font-semibold text-[20px]",
							}),
							El({
								element: "p",
								innerText:
									"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque perferendis eaque sint tenetur. Laudantium vel quasi.",
								className: "font-normal text-[14px] text-[#414142]",
							}),
							El({
								element: "div",
								className: "flex items-center justify-start gap-[32px]",
								children: [
									El({
										element: "div",
										className: "flex flex-col gap-2",
										children: [
											El({
												element: "p",
												innerText: "Size",
												className: "font-bold text-[16px]",
											}),
											El({
												element: "div",
												className: "flex gap-3",
												children: [
													El({
														element: "div",
														innerText: "41",
														className:
															"w-[20px] h-[20px] flex justify-center items-center cursor-pointer font-bold text-[14px] text-[#717171] border border-[#717171] hover:text-[#FFFFFF] hover:bg-[#000000] hover:border-[#000000] rounded-full p-4 size-option",
														eventListener: [
															{
																event: "click",
																callback: (e) => {
																	const allSizes =
																		document.querySelectorAll(".size-option");

																	allSizes.forEach((s) => {
																		s.style.backgroundColor = "#FFFFFF";
																		s.style.color = "#717171";
																	});

																	const target = e.currentTarget;
																	target.style.backgroundColor = "#000000";
																	target.style.color = "#FFFFFF";
																},
															},
														],
													}),
													El({
														element: "div",
														innerText: "42",
														className:
															"w-[20px] h-[20px] flex justify-center items-center cursor-pointer font-bold text-[14px] text-[#717171] border border-[#717171] hover:text-[#FFFFFF] hover:bg-[#000000] hover:border-[#000000] rounded-full p-4 size-option",
														eventListener: [
															{
																event: "click",
																callback: (e) => {
																	const allSizes =
																		document.querySelectorAll(".size-option");

																	allSizes.forEach((s) => {
																		s.style.backgroundColor = "#FFFFFF";
																		s.style.color = "#717171";
																	});

																	const target = e.currentTarget;
																	target.style.backgroundColor = "#000000";
																	target.style.color = "#FFFFFF";
																},
															},
														],
													}),
													El({
														element: "div",
														innerText: "43",
														className:
															"w-[20px] h-[20px] flex justify-center items-center cursor-pointer font-bold text-[14px] text-[#717171] border border-[#717171] hover:text-[#FFFFFF] hover:bg-[#000000] hover:border-[#000000] rounded-full p-4 size-option",
														eventListener: [
															{
																event: "click",
																callback: (e) => {
																	const allSizes =
																		document.querySelectorAll(".size-option");

																	allSizes.forEach((s) => {
																		s.style.backgroundColor = "#FFFFFF";
																		s.style.color = "#717171";
																	});

																	const target = e.currentTarget;
																	target.style.backgroundColor = "#000000";
																	target.style.color = "#FFFFFF";
																},
															},
														],
													}),
													El({
														element: "div",
														innerText: "45",
														className:
															"w-[20px] h-[20px] flex justify-center items-center cursor-pointer font-bold text-[14px] text-[#717171] border border-[#717171] hover:text-[#FFFFFF] hover:bg-[#000000] hover:border-[#000000] rounded-full p-4 size-option",
														eventListener: [
															{
																event: "click",
																callback: (e) => {
																	const allSizes =
																		document.querySelectorAll(".size-option");

																	allSizes.forEach((s) => {
																		s.style.backgroundColor = "#FFFFFF";
																		s.style.color = "#717171";
																	});

																	const target = e.currentTarget;
																	target.style.backgroundColor = "#000000";
																	target.style.color = "#FFFFFF";
																},
															},
														],
													}),
												],
											}),
										],
									}),
									El({
										element: "div",
										className: "flex flex-col gap-2",
										children: [
											El({
												element: "p",
												innerText: "Color",
												className: "font-bold text-[16px]",
											}),
											El({
												element: "div",
												className: "flex gap-3",
												children: [
													El({
														element: "div",
														className:
															"w-[20px] h-[20px] flex justify-center items-center bg-[#f3f3f3] cursor-pointer rounded-full p-4",
													}),
													El({
														element: "div",
														className:
															"w-[20px] h-[20px] flex justify-center items-center bg-[red] cursor-pointer rounded-full p-4",
													}),
													El({
														element: "div",
														className:
															"w-[20px] h-[20px] flex justify-center items-center bg-[#7a5448] cursor-pointer rounded-full p-4",
													}),
													El({
														element: "div",
														className:
															"w-[20px] h-[20px] flex justify-center items-center bg-[black] cursor-pointer rounded-full p-4",
													}),
													El({
														element: "div",
														className:
															"w-[20px] h-[20px] flex justify-center items-center bg-[#1a96f0] cursor-pointer rounded-full p-4",
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex items-center gap-6 border-b border-[#eeefef] mt-[20px] pb-[15px]",
						children: [
							El({
								element: "p",
								innerText: "Quantity",
								className: "font-semibold text-[14px]",
							}),
							El({
								element: "div",
								className:
									"flex items-center justify-between gap-5 font-semibold text-[16px] bg-[#f3f3f3] rounded-3xl p-2 pr-5 pl-5",
								children: [
									El({
										element: "img",
										className: "w-[18px] h-[18px] cursor-pointer",
										restAttrs: {
											src: "../../../public/images/minus.png",
										},
									}),
									El({
										element: "p",
										innerText: "1",
										className: "font-bold text-[18px]",
									}),
									El({
										element: "img",
										className: "w-[18px] h-[18px] cursor-pointer",
										restAttrs: {
											src: "../../../public/images/plus.png",
										},
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex items-center justify-between absolute bottom-[35px] right-[24px] left-[24px] gap-10",
						children: [
							El({
								element: "div",
								className: "flex flex-col items-center",
								children: [
									El({
										element: "p",
										innerText: "Total price",
										className: "text-[#717171] text-[12px]",
									}),
									El({
										element: "p",
										innerText: `$${price}.00`,
										className: "font-bold text-[22px] text-[#414141]",
									}),
								],
							}),
							El({
								element: "div",
								className:
									"flex justify-center items-center gap-4 font-semibold text-[#FFFFFF] bg-[#101010] shadow-xl rounded-4xl p-4 pr-16 pl-16 cursor-pointer",
								children: [
									El({
										element: "img",
										className: "w-[20px] h-[20px]",
										restAttrs: {
											src: "../../../public/images/shopping-cart.png",
										},
									}),
									El({
										element: "p",
										innerText: "Add to Cart",
										className: "font-semibold text-[16px]",
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
	return singleProduct;
}
