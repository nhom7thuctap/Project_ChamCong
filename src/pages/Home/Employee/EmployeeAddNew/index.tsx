import Copyright from "@/components/Copyringht";
import { DEPARTMENT_OPTIONS } from "@/constants/Department";
import { OFFICE_OPTIONS } from "@/constants/Offices";
import { RANK_OPTIONS } from "@/constants/Ranks";
import { ROUTES } from "@/constants/routers";
import { SEX_OPTIONS } from "@/constants/Sex";
import { TYPE_OF_JOB_OPTIONS } from "@/constants/TypeOfJobs";
import InputField from "@/custom-fields/InputField";
import SelectField from "@/custom-fields/SelectField";
import { schemaAddNewEmployee } from "@/react-hook-form/validations/AddNewEmployee";
import { schemaForgotPassword } from "@/react-hook-form/validations/ForgotPassword";
import { Avatar, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { FastField, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function EmployeeAddNew() {
  const initialValues = {
    fullName: "",
    username: "",
    sex: "",
    phone: "",
    office: "",
    typeOfJob: "",
    department: "",
    rank: "",
    position: "",
  };
  const handleSubmit = () => {
    console.log("handle Submit");
  };

  return (
    <div className="form-wrapper form-add">
      <Formik
        initialValues={initialValues}
        validationSchema={schemaAddNewEmployee}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, isSubmitting, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <div className="title">
                <h3>Thêm nhân viên mới</h3>
              </div>
              <div className="group">
                <h5 className="group-title">Thông tin cá nhân</h5>
                <div className="form-group">
                  <div className="field">
                    <FastField
                      name="fullName"
                      component={InputField}
                      label="Họ tên"
                      type="text"
                    />
                  </div>
                  <div className="field">
                    <FastField
                      name="sex"
                      component={SelectField}
                      label="Giới tính"
                      options={SEX_OPTIONS}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="field">
                    <FastField
                      name="username"
                      component={InputField}
                      label="Email"
                      type="email"
                    />
                  </div>
                  <div className="field">
                    <FastField
                      name="phone"
                      component={InputField}
                      label="Điện thoại"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <h5 className="group-title">Thông tin nhân viên</h5>
                <div className="form-group">
                  <div className="field">
                    <FastField
                      name="office"
                      component={SelectField}
                      label="Văn phòng làm việc"
                      options={OFFICE_OPTIONS}
                    />
                  </div>
                  <div className="field">
                    <FastField
                      name="typeOfJob"
                      component={SelectField}
                      label="Loại hình công việc"
                      options={TYPE_OF_JOB_OPTIONS}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="field">
                    <FastField
                      name="department"
                      component={SelectField}
                      label="Phòng ban"
                      options={DEPARTMENT_OPTIONS}
                    />
                  </div>
                  <div className="field">
                    <FastField
                      name="rank"
                      component={SelectField}
                      label="Cấp bậc"
                      options={RANK_OPTIONS}
                    />
                  </div>
                </div>
              </div>
              <button className="signin-button btn-add" type="submit">
                submit
              </button>
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs>
                  <Link className="link" to={ROUTES.EMPLOYEE}>
                    Back
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
