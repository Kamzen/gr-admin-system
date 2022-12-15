import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const userInfo = auth?.userInfo;

  if (userInfo) {
    return <Navigate to={"/employees"} />;
  }

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
