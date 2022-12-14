import { Button, FormLabel, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Formik, Form } from "formik";
import TextfieldWrapper from "../../components/commonUI/TextfieldWrapper";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginEmployee } from "../../store/actions/auth";
import AlertPopup from "../../components/commonUI/AlertPopup";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { error, message } = auth;
  return (
    <Box
      sx={{
        width: "60%",
        margin: "auto",
      }}
    >
      {error?.loginError && (
        <AlertPopup open={true} message={message} severity="error" />
      )}
      <Typography variant="h5" textAlign={"center"}>
        Login
      </Typography>
      <br />
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={yup.object().shape({
          username: yup.string().required("Username/Email is required"),
          password: yup.string().required("Password is required"),
        })}
        onSubmit={(values) => {
          dispatch(loginEmployee(values));
        }}
      >
        {({ values, errors }) => {
          return (
            <Form>
              <Grid container>
                <Grid item xs={12}>
                  <FormLabel>Username/Email</FormLabel>
                  <br />
                  <br />
                  <TextfieldWrapper name="username" label="Username/Email" />
                </Grid>
                <Grid item xs={12}>
                  <br />
                  <FormLabel>Password</FormLabel>
                  <br />
                  <br />
                  <TextfieldWrapper
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <br />
              <br />
              <Box textAlign={"center"}>
                <Button variant="contained" type="submit">
                  Login
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
