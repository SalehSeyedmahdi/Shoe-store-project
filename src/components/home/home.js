import { El } from "../../utils/el.js";
import { Footer } from "./footer.js";
import { Header } from "./header.js";
import { SearchInput } from "./search-input.js";

export function HomePage() {
	const home = El({
		element: "div",
		className:
			"w-[428px] h-[926px] relative flex flex-col items-center justify-between gap-0 bg-[#ffffff] p-[32px] pt-[132px]",
		restAttrs: {
			id: "home",
		},
	});
	home.append(Header(), SearchInput(), Footer());
	return home;
}
