// routes
import { ROUTES } from "@/constants/routers";
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
];

export default appRoutes;
