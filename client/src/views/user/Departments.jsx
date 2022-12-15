import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import CustomEditEmployeeDialog from "../../components/modals/EditEmployeeModal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartments, getAllEmployees } from "../../store/actions/employee";
import AddDepartmentModal from "../../components/modals/AddDepartmentModal";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Departments = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const employee = useSelector((state) => state.employee);

  const userInfo = auth?.userInfo;
  const departments = employee?.departments;

  useEffect(() => {
    dispatch(getAllDepartments());
  }, [dispatch]);

  return (
    <Box
      component="div"
      // style={{ height: 400, width: "80%", margin: "auto" }}
    >
      <fieldset
        style={{
          border: "0.05em solid #22664F",
        }}
      >
        <legend>
          <Typography>Filters</Typography>
        </legend>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography sx={{ mt: 2 }}>Status:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField fullWidth name="firstName" label="Firstname" />
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ mt: 2 }}>Department:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField fullWidth name="firstName" label="Firstname" />
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ mt: 2 }}>Manager:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField fullWidth name="firstName" label="Firstname" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </fieldset>
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div></div>
        <AddDepartmentModal />
        <TextField name="search" label="Search" />
      </Box>
      <br />
      <TableContainer component={Paper} sx={{ border: "0.05em solid #22664F" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell align="center">Department Name</TableCell>
              <TableCell align="center">Manager</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments?.map((department) => (
              <TableRow
                key={department.id}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CustomEditEmployeeDialog />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="error" variant="outlined">
                      {department.status === "active"
                        ? "De Activate"
                        : "Activate"}
                    </Button>
                  </Box>
                </TableCell>
                <TableCell align="center">{department.name}</TableCell>
                <TableCell align="center">{department.Employee.firstName}</TableCell>
                <TableCell align="center">{department.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Departments;
