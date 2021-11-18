// components
import SignInForm from "./mains/SignInForm";
// forms
// others
import classes from "./Signin.module.scss";

/**
 * Signin
 */
export default function Signin() {
  return (
    <div className={classes.wrapper}>
      <SignInForm />
    </div>
  );
}
