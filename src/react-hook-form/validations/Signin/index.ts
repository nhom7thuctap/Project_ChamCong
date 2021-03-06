// libs
import * as yup from "yup";

export const schemaSignin = yup
  .object()
  .shape({
    username: yup
      .string()
      .email("Email is invalid")
      .required("This field is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 charaters")
      .required("This field is required"),
  })
  .required();
