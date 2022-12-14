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
import React from "react";
import CustomEmployeeDialog from "../../components/modals/AddEmployeeModal";
import CustomEditEmployeeDialog from "../../components/modals/EditEmployeeModal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

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

const Employees = () => {
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
        <CustomEmployeeDialog />
        <TextField name="search" label="Search" />
      </Box>
      <br />
      <TableContainer component={Paper} sx={{ border: "0.05em solid #22664F" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align="center">Manager</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.id}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">
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
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Employees;
