import { El } from "../../utils/el.js";

export function SignupLogic() {
	const userName = document.getElementById("username");
	const password = document.getElementById("password");

	function clearErrors() {
		document.querySelectorAll(".field-error").forEach((el) => el.remove());
	}
	function requestError() {
		const signupError = El({
			elemant: "div",
			innerText: "password is not strong enough.",
			className:
				"w-[380px] h-[30px] flex justify-start items-center absolute top-98 text-[15px] text-[#d64051] bg-[#ffdce0] border border-[#fdadb7] rounded-sm p-2",
		});
		const container = document.getElementById("container");

		// Inserting error message after the password input field
		container.append(signupError);
	}

	if (userName.value === "" || password.value === "") {
		clearErrors();
		if (userName.value === "") {
			const inputError = El({
				elemant: "p",
				innerText: "this field is required",
				className: "absolute top-9 left-3 text-[red] text-[10px] field-error",
			});

			// Inserting error message after the usename input field
			userName.insertAdjacentElement("afterend", inputError);
		}
		if (password.value === "") {
			const inputError = El({
				elemant: "p",
				innerText: "this field is required",
				className: "absolute top-9 left-3 text-[red] text-[10px] field-error",
			});

			// Inserting error message after the password input field
			password.insertAdjacentElement("afterend", inputError);
		}
	} else {
		clearErrors();

		const Signup_URL = "http://localhost:3000/auth/signup";

		async function SignupFetch() {
			const data = await fetch(Signup_URL, {
				method: "POST",
				body: JSON.stringify({
					username: userName.value,
					password: password.value,
				}),
				headers: {
					"Content-type": "application/json; charset = UTF-8",
				},
			});
			try {
				if (!data.ok) {
					requestError();
					return;
				}
				const response = await data.json();
				console.log(response);
				router.navigate("/login/login");
			} catch (error) {
				console.error(error);
				requestError();
			}
		}
		SignupFetch();
	}
}
