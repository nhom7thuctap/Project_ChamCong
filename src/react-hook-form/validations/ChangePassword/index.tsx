import * as yup from "yup";

export const schemaChangePassword = yup
  .object({
    password: yup
      .string()
      .min(6, "Password must be at least 6 charaters")
      .required("This field is required"),
  })
  .required();
