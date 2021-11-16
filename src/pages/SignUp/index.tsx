import ReactHookForm from "@/providers/ReactHookForm";
import { schemaSignin } from "@/react-hook-form/validations/Signin";
import SignUpForm from "./mains/SignUpForm";
import classes from "./Signup.module.scss";

export default function Signup() {
  return (
    <div className={classes.wrapper}>
      <ReactHookForm validateSchema={schemaSignin}>
        <SignUpForm />
      </ReactHookForm>
    </div>
  );
}
