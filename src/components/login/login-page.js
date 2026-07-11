import { El } from "../../utils/el.js";
import { router } from "../../utils/router.js";
import { LoginLogic } from "./login-logic.js";

export function LoginPage() {
	return El({
		element: "div",
		className:
			"w-[428px] h-[926px] relative flex flex-col items-center justify-between gap-0 bg-[#ffffff] p-[32px] pt-[132px]",
		restAttrs: {
			id: "container",
		},
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
							src: "/assets/images/direction.png",
						},
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/onboarding/third");
								},
							},
						],
					}),
					El({
						element: "img",
						className: "w-[54px] h-[81px]",
						restAttrs: {
							src: "/assets/images/black-logo.png",
						},
					}),
					El({
						element: "div",
						className: "flex flex-col items gap-[48px]",
						children: [
							El({
								element: "p",
								innerText: "login to Your Account",
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
												className:
													"w-[14px] h-[14px] absolute left-4 opacity-50",
												restAttrs: {
													src: "/assets/images/envelope-fill.png",
												},
											}),
											El({
												element: "input",
												className:
													"w-[380px] h-[37px] bg-[#FAFAFA] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#6C757D] p-3 pl-10 rounded-[4px]",
												restAttrs: {
													placeholder: "Username",
													type: "username",
													id: "username",
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
												className:
													"w-[17px] h-[17px] absolute left-4 opacity-50",
												restAttrs: {
													src: "/assets/images/lock-fill.png",
												},
											}),
											El({
												element: "input",
												className:
													"w-[380px] h-[37px] bg-[#FAFAFA] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#6C757D] p-3 pl-10 rounded-[4px]",
												restAttrs: {
													placeholder: "Password",
													type: "password",
													id: "password",
												},
											}),
											El({
												element: "img",
												className:
													"w-[17px] h-[17px] absolute right-4 opacity-50 cursor-pointer",
												restAttrs: {
													src: "/assets/images/eye-slash-fill.png",
												},
												eventListener: [
													{
														event: "click",
														callback: () => {
															const passwordInput =
																document.getElementById("password");
															if (passwordInput.type === "password") {
																passwordInput.type = "text";
															} else {
																passwordInput.type = "password";
															}
														},
													},
												],
											}),
										],
									}),
									El({
										element: "p",
										innerText: "Signup",
										className:
											"font-medium text-[#000000] text-[14px] cursor-pointer",
										eventListener: [
											{
												event: "click",
												callback: () => {
													router.navigate("/login/signup");
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
				innerText: "Signin",
				className:
					"w-[380px] h-[47px] text-[14px] text-[#FFFFFF] font-medium bg-[#212529] cursor-pointer rounded-[30px]",
				eventListener: [
					{
						event: "click",
						callback: () => {
							LoginLogic();
						},
					},
				],
				restAttrs: {
					id: "login-btn",
				},
			}),
		],
	});
}
