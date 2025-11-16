import { El } from "../../utils/el.js";
import { ThirdOnboarding } from "./third-onboarding.js";

export function SecondOnboarding() {
	const container = El({
		element: "div",
		className:
			"w-[428px] h-[926px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%),url('../../../public/images/Wallpaper.jpg')] bg-center bg-cover flex flex-col items-start justify-end gap-[18px] p-[35px] pb-[70px]",
		children: [
			El({
				element: "div",
				className: "flex flex-col gap-0",
				children: [
					El({
						element: "p",
						innerText: "Welcome to 👋",
						className: "font-semibold text-[40px] text-[#FFFFFF]",
					}),
					El({
						element: "p",
						innerText: "Shoea",
						className: "font-bold text-[72px] text-[#FFFFFF]",
					}),
				],
			}),
			El({
				element: "p",
				innerText:
					"The best sneakers & shoes e-commerse app of the century for your fashion needs!",
				className: "font-semibold text-[16px] text-[#FFFFFF]",
			}),
		],
	});
	function changePage() {
		app.innerText = "";
		app.append(ThirdOnboarding());
	}
	setTimeout(changePage, 5000);
	return container;
}
