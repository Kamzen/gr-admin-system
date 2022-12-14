import { createTheme } from "@mui/material";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#22664F",
    },
    mode: "dark",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root:{
            fontWeight: 'bolder',
            minWidth: '150px',
            borderRadius: '10px'
        },
      },
    },
  },
});

export default appTheme;
