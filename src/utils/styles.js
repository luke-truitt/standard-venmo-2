import { createMuiTheme } from "@material-ui/core/styles";

export const v1Theme = createMuiTheme({
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: { borderRadius: "0px" },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#2CC499",
    },
  },
});
