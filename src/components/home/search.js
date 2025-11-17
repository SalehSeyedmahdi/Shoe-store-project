import { El } from "../../utils/el.js";

export function Search() {
	return El({
		element: "div",
		className: "w-[428px] absolute top-[88px]",
		children: [
			El({
				element: "lable",
				className: "relative flex justify-center items-center",
				children: [
					El({
						element: "img",
						className: "w-[16px] h-[16px] absolute left-[40px]",
						restAttrs: {
							src: "../../../public/images/search.png",
						},
					}),
					El({
						element: "input",
						className:
							"w-[380px] h-[37px] bg-[#fafafa] outline-hidden rounded-[4px] p-3 pl-10",
						eventListener: [
							{
								event: "click",
								callback: () => {
									app.innerText = "";
								},
							},
						],
						restAttrs: {
							placeholder: "Search",
						},
					}),
				],
			}),
		],
	});
}
