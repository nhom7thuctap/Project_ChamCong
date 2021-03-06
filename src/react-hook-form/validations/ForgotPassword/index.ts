import * as yup from "yup";

export const schemaForgotPassword = yup
  .object({
    username: yup
      .string()
      .email("Email is invalid")
      .required("This field is required"),
  })
  .required();
