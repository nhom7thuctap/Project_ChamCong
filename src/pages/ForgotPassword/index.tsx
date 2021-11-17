import ReactHookForm from "@/providers/ReactHookForm";

import ForgotPasswordForm from "./main";
import classes from "./ForgotPassword.module.scss";
import { schemaForgotPassword } from "@/react-hook-form/validations/ForgotPassword";

export default function ForgotPassword() {
  return (
    <div className={classes.wrapper}>
      <ReactHookForm validateSchema={schemaForgotPassword}>
        <ForgotPasswordForm />
      </ReactHookForm>
    </div>
  );
}
