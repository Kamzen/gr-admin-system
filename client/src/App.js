import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();



  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: `400px`,
      }}
    >
      <Box textAlign={"center"}>
        <Typography sx={{ fontSize: "30px", fontWeight: "bolder" }}>
          Welcome To Employee Management System
        </Typography>
        <br />
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default App;
