import { createTheme } from "@mui/material";
import { amber, red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
        main: red[400]
    }
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
        main: amber[800]
    }
  },
});
