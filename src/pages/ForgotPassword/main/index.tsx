import Copyright from "@/components/Copyringht";
import { ROUTES } from "@/constants/routers";
import InputField from "@/custom-fields/InputField";
import { schemaForgotPassword } from "@/react-hook-form/validations/ForgotPassword";
import { Avatar, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { FastField, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function ForgotPasswordForm() {
  const initialValues = {
    username: "",
  };
  const handleSubmit = () => {
    console.log("handle Submit");
  };

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={schemaForgotPassword}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, isSubmitting, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <div className="title">
                <Avatar sx={{ bgcolor: deepPurple[500] }} className="avatar" />
                <h3>Forgot password</h3>
                <p>
                  Enter your email. We will send a new password to your email
                </p>
              </div>
              <FastField
                name="username"
                component={InputField}
                label="Email Address"
                placeholder="Enter your email"
                type="email"
              />
              <button className="signin-button" type="submit">
                next
              </button>
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs>
                  <Link className="link" to={ROUTES.SIGN_IN}>
                    Back
                  </Link>
                </Grid>
                <Grid item>
                  <Link className="link" to={ROUTES.SIGN_UP}>
                    Do not have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
