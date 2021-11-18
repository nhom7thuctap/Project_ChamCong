import Copyright from "@/components/Copyringht";
import { ROUTES } from "@/constants/routers";
import InputField from "@/custom-fields/InputField";
import { schemaChangePassword } from "@/react-hook-form/validations/ChangePassword";
import { Avatar, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { FastField, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function ChangePasswordForm() {
  const initialValues = {
    password: "",
  };
  const handleSubmit = () => {
    console.log("handle Submit");
  };

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={schemaChangePassword}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, isSubmitting, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <div className="title">
                <Avatar sx={{ bgcolor: deepPurple[500] }} className="avatar" />
                <h3>Change your password</h3>
              </div>
              <FastField
                name="password"
                component={InputField}
                label="Password"
                placeholder="Enter your new password"
                type="password"
              />
              <button className="signin-button" type="submit">
                confirm
              </button>
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs>
                  <Link className="link" to={ROUTES.HOME}>
                    Home
                  </Link>
                </Grid>
                <Grid item>
                  <Link className="link" to="/help">
                    Need Help
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
