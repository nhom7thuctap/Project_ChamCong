import * as yup from "yup";

export const schemaSignup = yup
  .object()
  .shape({
    name: yup.string().required("This field is required"),
    username: yup
      .string()
      .email("Email is invalid")
      .required("This field is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 charaters")
      .required("This field is required"),
    phone: yup.string().required("This field is required"),
    address: yup.string().required("This field is required"),
  })
  .required();
