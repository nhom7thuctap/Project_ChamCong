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
import { schemaSignup } from "@/react-hook-form/validations/SignUp";

export default function Test() {
  const initialValues = {
    name: "",
    username: "",
    password: "",
    phone: "",
    address: "",
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
        validationSchema={schemaSignup}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, isSubmitting, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <div className="title">
                <Avatar sx={{ bgcolor: deepPurple[500] }} className="avatar" />
                <h3>sign up</h3>
              </div>
              <FastField
                name="name"
                component={InputField}
                label="Name Of Company*"
                placeholder="Enter your company name"
                type="text"
              />
              <FastField
                name="username"
                component={InputField}
                label="Email Address*"
                placeholder="Enter your email"
                type="email"
              />
              <FastField
                name="password"
                component={InputField}
                label="Password*"
                type="password"
              />
              <div className="line">More</div>
              <FastField
                name="phone"
                component={InputField}
                label="Phone Number"
                placeholder="Your Phone Number"
                type="text"
              />
              <FastField
                name="address"
                component={InputField}
                label="Address"
                placeholder="Your Address"
                type="text"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email"
              />
              <button className="signin-button" type="submit">
                Sign up
              </button>
              <Link className="link-to-signin" to={ROUTES.SIGN_IN}>
                Already hava an account? Sign In
              </Link>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// // import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { ROUTES } from "@/constants/routers";
// import { NavLink } from "react-router-dom";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             {/* <LockOutlinedIcon /> */}
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox value="allowExtraEmails" color="primary" />
//                   }
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href={ROUTES.SIGN_IN} variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
