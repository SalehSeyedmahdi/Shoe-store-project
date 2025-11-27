import { LoginPage } from "../src/components/login/login-page.js";
import { SignupPage } from "../src/components/login/signup-page.js";
import { router } from "../src/utils/router.js";
import { HomePage } from "./components/home/home.js";
import { FifthOnboarding } from "./components/onboarding/fifth-onboarding.js";
import { FirstOnboarding } from "./components/onboarding/first-onboarding.js";
import { FourthOnboarding } from "./components/onboarding/fourth-onboarding.js";
import { SecondOnboarding } from "./components/onboarding/second-onboarding.js";
import { ThirdOnboarding } from "./components/onboarding/third-onboarding.js";
import { SearchPage } from "./components/search/search-page.js";
import { SingleProductLogic } from "./components/single-product/single-product-logic.js";
import "./style/style.css";

const app = document.getElementById("app");

router.addRoute("/onboarding/first", FirstOnboarding);
router.addRoute("/onboarding/second", SecondOnboarding);
router.addRoute("/onboarding/third", ThirdOnboarding);
router.addRoute("/onboarding/fourth", FourthOnboarding);
router.addRoute("/onboarding/fifth", FifthOnboarding);
router.addRoute("/home", HomePage);
router.addRoute("/product/:id", SingleProductLogic);
router.addRoute("/login/login", LoginPage);
router.addRoute("/login/signup", SignupPage);
router.addRoute("/search", SearchPage);

router.init(app);

router.navigate("/onboarding/first");
