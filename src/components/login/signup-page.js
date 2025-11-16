import { El } from "../../utils/el.js";
import { LoginPage } from "./login-page.js";

export function SignupPage() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[926px] relative flex flex-col items-center justify-between gap-0 bg-[#ffffff] p-[32px] pt-[132px]",
		children: [
			El({
				element: "div",
				className: "flex flex-col items-center gap-[118px]",
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
									(app.innerText = ""), app.append(LoginPage());
								},
							},
						],
					}),
					El({
						element: "img",
						className: "w-[54px] h-[81px]",
						restAttrs: {
							src: "../../../public/images/black-logo.png",
						},
					}),
					El({
						element: "div",
						className: "flex flex-col items gap-[48px]",
						children: [
							El({
								element: "p",
								innerText: "Signup to Your Account",
								className:
									"font-semibold text-center text-[32px] text-[#152536]",
							}),
							El({
								element: "div",
								className: "flex flex-col items-center gap-[21px]",
								children: [
									El({
										element: "lable",
										className: "relative flex items-center",
										children: [
											El({
												element: "img",
												className: "w-[14px] h-[14px] absolute left-4",
												restAttrs: {
													src: "../../../public/images/envelope-fill.png",
												},
											}),
											El({
												element: "input",
												className:
													"w-[380px] h-[37px] bg-[#FAFAFA] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#6C757D] p-3 pl-10 rounded-[4px]",
												restAttrs: {
													placeholder: "Username",
													type: "username",
												},
											}),
										],
									}),
									El({
										element: "lable",
										className: "relative flex items-center",
										children: [
											El({
												element: "img",
												className: "w-[14px] h-[14px] absolute left-4",
												restAttrs: {
													src: "../../../public/images/lock-fill.png",
												},
											}),
											El({
												element: "input",
												className:
													"w-[380px] h-[37px] bg-[#FAFAFA] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#6C757D] p-3 pl-10 rounded-[4px]",
												restAttrs: {
													placeholder: "Password",
													type: "password",
												},
											}),
										],
									}),
									El({
										element: "p",
										innerText: "Login",
										className:
											"font-medium text-[#000000] text-[14px] cursor-pointer",
										eventListener: [
											{
												event: "click",
												callback: () => {
													(app.innerText = ""), app.append(LoginPage());
												},
											},
										],
									}),
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "button",
				innerText: "Signup",
				className:
					"w-[380px] h-[47px] text-[14px] text-[#FFFFFF] font-medium bg-[#212529] cursor-pointer rounded-[30px]",
			}),
		],
	});
}
