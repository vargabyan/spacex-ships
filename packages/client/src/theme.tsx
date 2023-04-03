import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "rgb(255, 255, 255)" },
    mode: "dark",
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});
