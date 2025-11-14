import { FifthOnboarding } from "../src/components/onboarding/fifth-onboarding.js";
import { FirstOnboarding } from "../src/components/onboarding/first-onboarding.js";
import { FourthOnboarding } from "../src/components/onboarding/fourth-onboarding.js";
import { ThirdOnboarding } from "../src/components/onboarding/third-onboarding.js";
import "./style/style.css";

const app = document.getElementById("app");
app.append(FirstOnboarding());

app.innerHTML = "";
app.append(ThirdOnboarding());

app.innerHTML = "";
app.append(FourthOnboarding());

app.innerHTML = "";
app.append(FifthOnboarding());
