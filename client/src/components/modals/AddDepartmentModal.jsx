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

function AddDepartment(props) {
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

AddDepartment.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddDepartmentModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const employee = useSelector((state) => state.employee);

  const userInfo = auth?.userInfo;
  const roles = employee?.roles;
  const managers = employee?.managers;
  const { errors, message } = auth;

  const managersList = [];
  const rolesList = [];

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

  React.useEffect(() => {
    dispatch(getAllRoles());
  }, [dispatch]);

  return (
    <div>
      {userInfo?.roleType === "hr-admin" && (
        <Box textAlign={"center"}>
          <Button variant="contained" onClick={handleClickOpen}>
            Add Department
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
        <AddDepartment id="customized-dialog-title" onClose={handleClose}>
          <Box textAlign={"center"}>Add New Department</Box>
        </AddDepartment>
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
            }}
            validationSchema={yup.object().shape({
              status: yup.string().required("Status is required"),
              name: yup.string().required("Name is required"),
              managerId: yup.string().required("Manager is required"),
            })}
            onSubmit={(values) => {
              dispatch(createEmployee(values));
            }}
          >
            {({ values, errors }) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography>*Name:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextfieldWrapper name="name" label="Name" />
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
