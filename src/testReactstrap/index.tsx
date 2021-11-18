import { schemaSignin } from "@/react-hook-form/validations/Signin";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import InputF from "./InputField";

export default function Test() {
  const initialValues = {
    username: "",
    password: "",
  };
  const handleSubmit = () => {
    console.log("handle Submit");
  };
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaSignin}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, isSubmitting, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form style={{ display: "flex" }}>
              <div style={{ width: "100%", marginLeft: "20px" }}>
                <FastField
                  name="username"
                  component={InputF}
                  label="Username"
                  placeholder="Eg: Now Nature ..."
                />
              </div>
              <div style={{ width: "100%", marginLeft: "20px" }}>
                <FastField
                  name="password"
                  component={InputF}
                  label="Password"
                  placeholder="Eg: Now Nature ..."
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
