import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import TextfieldWrapper from "../commonUI/TextfieldWrapper";
import { Grid } from "@mui/material";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import SelectWrapper from "../commonUI/Select";
import { createEmployee } from "../../store/actions/auth";
import AlertPopup from "../commonUI/AlertPopup";
import { getAllRoles } from "../../store/actions/employee";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function AddEmployeeModal(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

AddEmployeeModal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomEmployeeDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const statuses = [
    {
      value: "active",
      label: "Active",
    },
    {
      value: "inactive",
      label: "In Active",
    },
  ];

  const auth = useSelector((state) => state.auth);
  const employee = useSelector((state) => state.employee);

  const userInfo = auth?.userInfo;
  const roles = employee?.roles;
  const managers = employee?.managers;
  const departments = employee?.departments;
  const { errors, message } = auth;

  const managersList = [];
  const rolesList = [];
  const departmentsList = [];

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  managers?.map((manager) => {
    managersList.push({
      value: manager.id,
      label: manager.firstName,
    });
  });

  roles?.map((role) => {
    rolesList.push({
      value: role.id,
      label: role.roleType,
    });
  });

  departments?.map((department) => {
    departmentsList.push({
      value: department.id,
      label: department.name,
    });
  });

  React.useEffect(() => {
    dispatch(getAllRoles());
  }, [dispatch]);

  return (
    <div>
      {userInfo?.roleType === "hr-admin" && (
        <Box textAlign={"center"}>
          <Button variant="contained" onClick={handleClickOpen}>
            Add Employee
          </Button>
        </Box>
      )}

      {errors?.createEmployeeError === false && (
        <AlertPopup open={true} message={message} />
      )}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <AddEmployeeModal id="customized-dialog-title" onClose={handleClose}>
          <Box textAlign={"center"}>Add New Employee</Box>
        </AddEmployeeModal>
        <DialogContent dividers>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phoneNumber: "",
              email: "",
              managerId: "",
              username: "",
              roleId: "",
              status: "",
            }}
            validationSchema={yup.object().shape({
              firstName: yup.string().required("Fisrtname is required"),
              lastName: yup.string().required("Lastname is required"),
              phoneNumber: yup
                .string()
                .matches(/^\d+$/, {
                  message: "Phone number should be only numbers",
                })
                .min(10, "Phone number should be 10 digits")
                .max(10, "Phone number should be 10 digits")
                .required("Phone number is required"),
              email: yup
                .string()
                .email("Invalid email")
                .required("Email is required"),
              managerId: yup.string().required("Manager is required"),
              username: yup.string().required("Username is required"),
              roleId: yup.string().required("Role is required"),
              status: yup.string().required("Status is required"),
            })}
            onSubmit={(values) => {
              dispatch(createEmployee(values));
            }}
          >
            {({ values, errors }) => {
              console.log(errors)
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography>*Firstname:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextfieldWrapper name="firstName" label="Firstname" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>*Lastname:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextfieldWrapper name="lastName" label="Lastname" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>*Username:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextfieldWrapper name="username" label="Username" />
                    </Grid>

                    <Grid item xs={4}>
                      <Typography>*Telephone Number:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextfieldWrapper
                        name="phoneNumber"
                        label="Telephone Number"
                        placeholder="e.g 0797126016"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>*Email Address:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextfieldWrapper name="email" label="Email Address" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>*Manager:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <SelectWrapper
                        name="managerId"
                        label="Manager"
                        options={managersList.length > 0 && managersList}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>*Roles:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <SelectWrapper
                        name="roleId"
                        label="Role"
                        options={rolesList.length > 0 && rolesList}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>*Status:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <SelectWrapper
                        name="status"
                        label="Status"
                        options={statuses}
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <Box textAlign={"end"}>
                    <Button variant="contained" type="submit">
                      Save
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant="outlined" autoFocus onClick={handleClose}>
                      Cancel
                    </Button>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
