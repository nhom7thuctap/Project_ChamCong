import { schemaSignin } from "@/react-hook-form/validations/Signin";
import { FastField, Form, Formik } from "formik";
import {
  Avatar,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import "./styles.scss";
import InputField from "@/custom-fields/InputField";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routers";
import { deepPurple } from "@mui/material/colors";

export default function Test() {
  const initialValues = {
    username: "",
    password: "",
  };
  const handleSubmit = () => {
    console.log("handle Submit");
  };

  function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <a color="inherit" href="https://mui.com/">
          Dev Team
        </a>
        {new Date().getFullYear()}.
      </Typography>
    );
  }
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={schemaSignin}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, isSubmitting, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <div className="title">
                <Avatar sx={{ bgcolor: deepPurple[500] }} className="avatar" />
                <h3>sign in</h3>
              </div>
              <FastField
                name="username"
                component={InputField}
                label="Email Address"
                placeholder="Enter your email"
                type="email"
              />
              <FastField
                name="password"
                component={InputField}
                label="Password"
                type="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <button className="signin-button" type="submit">
                Sign in
              </button>
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs>
                  <Link className="link" to={ROUTES.FORGOT_PASSWORD}>
                    Forgot password?
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
