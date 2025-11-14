import { FirstOnboarding } from "../src/components/onboarding/first-onboarding.js";
import { ThirdOnboarding } from "../src/components/onboarding/third-onboarding.js";
import "./style/style.css";

const app = document.getElementById("app");
app.append(FirstOnboarding());

app.innerHTML = "";
app.append(ThirdOnboarding());
