import * as yup from "yup";

export const schemaForgotPassword = yup
  .object({
    username: yup.string().required(),
  })
  .required();
