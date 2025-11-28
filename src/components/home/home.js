import { El } from "../../utils/el.js";
import { store } from "../../utils/store.js";
import { BrandFilter } from "./brand-filter.js";
import { Footer } from "./footer.js";
import { Header } from "./header.js";
import { ProductList } from "./products-list.js";
import { SearchInput } from "./search-input.js";

export function HomePage() {
	const home = El({
		element: "div",
		className:
			"w-[428px] h-[926px] relative flex flex-col items-center justify-between gap-0 bg-[#ffffff] p-[32px] pt-[132px]",
		restAttrs: { id: "home" },
	});

	const savedState = store.getState("homeState");

	home.append(
		Header(),
		SearchInput(),
		BrandFilter(savedState?.selectedBrands),
		ProductList(savedState),
		Footer()
	);

	//Scroll restore.
	setTimeout(() => {
		if (savedState?.brandScroll) {
			document
				.querySelector(".brands-filter")
				?.scrollTo(savedState.brandScroll, 0);
		}
	}, 5);

	return home;
}
