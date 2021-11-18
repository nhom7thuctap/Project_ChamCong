import * as yup from "yup";

export const schemaAddNewEmployee = yup
  .object()
  .shape({
    fullName: yup.string().required("This field is required"),
    username: yup
      .string()
      .email("Email is invalid")
      .required("This field is required"),
    sex: yup.string().required("This field is required"),
    phone: yup.string().required("This field is required"),
    office: yup.string().required("This field is required"),
    typeOfJob: yup.string().required("This field is required"),
    department: yup.string().required("This field is required"),
    rank: yup.string().required("This field is required"),
    position: yup.string().required("This field is required"),
  })
  .required();
