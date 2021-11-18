// routes
import { ROUTES } from "@/constants/routers";
import ChangePassword from "@/pages/ChangePassword";
import ForgotPassword from "@/pages/ForgotPassword";
// pages
import Home from "@/pages/Home";
import EmployeeAddNew from "@/pages/Home/Employee/EmployeeAddNew";
import EmployeeList from "@/pages/Home/Employee/EmployeeList";
import Signin from "@/pages/SignIn";
import Signup from "@/pages/SignUp";
import Test from "@/testReactstrap";

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
  {
    path: ROUTES.CHANGE_PASSWORD,
    exact: true,
    component: ChangePassword,
  },
  {
    path: ROUTES.TEST,
    exact: true,
    component: Test,
  },
  {
    path: ROUTES.EMPLOYEE,
    exact: true,
    component: EmployeeList,
  },
  {
    path: ROUTES.ADD,
    exact: true,
    component: EmployeeAddNew,
  },
];

export default appRoutes;
