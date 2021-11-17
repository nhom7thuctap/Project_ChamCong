// routes
import { ROUTES } from "@/constants/routers";
import ForgotPassword from "@/pages/ForgotPassword";
// pages
import Home from "@/pages/Home";
import Signin from "@/pages/SignIn";
import Signup from "@/pages/SignUp";

/**
 * define main pages routes
 */
const appRoutes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: Home,
  },
  {
    path: ROUTES.SIGN_IN,
    exact: true,
    component: Signin,
  },
  {
    path: ROUTES.SIGN_UP,
    exact: true,
    component: Signup,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    exact: true,
    component: ForgotPassword,
  },
];

export default appRoutes;
