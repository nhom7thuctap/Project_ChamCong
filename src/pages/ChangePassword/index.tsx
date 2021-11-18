import classes from "../SignIn/Signin.module.scss";
import ChangePasswordForm from "./main";

export default function ChangePassword() {
  return (
    <div className={classes.wrapper}>
      <ChangePasswordForm />
    </div>
  );
}
