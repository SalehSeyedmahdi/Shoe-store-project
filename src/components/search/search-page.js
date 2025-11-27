import { El } from "../../utils/el.js";
import { router } from "../../utils/router.js";

export function SearchPage() {
	const searchPage = El({
		element: "div",
		className:
			"w-[428px] h-[926px] relative flex flex-col items-center justify gap-0 bg-[#ffffff] p-[32px] pt-[80px]",
		children: [
			El({
				element: "img",
				className:
					"w-[16px] h-[14px] absolute left-[24px] top-[20px] cursor-pointer",
				restAttrs: {
					src: "../../../public/images/direction.png",
				},
				eventListener: [
					{
						event: "click",
						callback: () => {
							router.navigate("/home");
						},
					},
				],
			}),
			El({
				element: "lable",
				className: "relative flex justify-center items-center",
				children: [
					El({
						element: "img",
						className: "w-[18px] h-[18px] absolute left-[20px]",
						restAttrs: {
							src: "../../../public/images/search.png",
						},
					}),
					El({
						element: "input",
						className:
							"w-[380px] h-[50px] bg-[whitesmoke] rounded-lg p-5 pl-12",
						restAttrs: {
							placeholder: "Search",
						},
					}),
					El({
						element: "img",
						className:
							"w-[18px] h-[18px] absolute right-4 opacity-50 cursor-pointer",
						restAttrs: {
							src: "../../../public/images/setting.png",
						},
					}),
				],
			}),
		],
	});

	return searchPage;
}
