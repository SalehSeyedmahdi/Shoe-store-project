import { El } from "../../utils/el.js";
import { store } from "../../utils/store.js";

export function BrandFilter(selectedBrand) {
	const brands = [
		"All",
		"Nike",
		"Adidas",
		"Puma",
		"Asics",
		"Rebook",
		"New Balance",
		"Converse",
		"Hushpuppies",
	];

	// پیش‌فرض برای اولین بار
	if (!selectedBrand) {
		selectedBrand = "All";
		store.setState("filteredBrand", "All");
	}

	function BrandButton(name) {
		const isActive = name === selectedBrand;

		return El({
			element: "div",
			innerText: name,
			className: `
				flex justify-center items-center
				font-semibold text-[16px]
				cursor-pointer rounded-[25px]
				border-[2px] border-[#343A40]
				p-[10px] pl-[20px] pr-[20px] brands
				text-nowrap
				${isActive ? "bg-[#343A40] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#343A40]"}
			`,
			eventListener: [
				{
					event: "click",
					callback: (e) => {
						// اگر همین برند است کاری نکن
						if (name === store.getState("filteredBrand")) return;

						// reset کردن همه دکمه‌ها
						document.querySelectorAll(".brands").forEach((b) => {
							b.style.backgroundColor = "#FFFFFF";
							b.style.color = "#343A40";
						});

						// فعال کردن این دکمه
						e.currentTarget.style.backgroundColor = "#343A40";
						e.currentTarget.style.color = "#FFFFFF";

						// تغییر فیلتر برند → ProductList خودکار رفرش می‌شود
						store.setState("filteredBrand", name);
					},
				},
			],
		});
	}

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
				className: "w-full flex gap-[12px] overflow-x-scroll brands-filter",
				children: brands.map((brand) => BrandButton(brand)),
			}),
		],
	});
}
