import { createMuiTheme } from "@material-ui/core/";
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./../styles.css";
export const primaryTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#f6f6f6",
      dark: "#c3c3c3",
      contrastText: "#2d2d2d",
    },
    secondary: {
      light: "#5F5FC4",
      main: "#283593",
      dark: "#001064",
      contrastText: "#f6f6f6",
    },
    text: {
      primary: "#2d2d2d",
      secondary: "#86868B",
    },
  },
  shadows: ["none"],
  overrides: {
    body2: { color: "#6D6D6D" },
    MuiInputBase: {
      root: {
        height: "50px",
      },
    },
    MuiTextField: {
      root: {
        height: "50px",
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#2d2d2d",
        },
      },
    },
  },
  shape: { borderRadius: "2px" },
  typography: {
    fontFamily: ["Lato", "sans-serif"],
    letterSpacing: "1rem",
    h2: {
      fontFamily: ["Crimson Text", "serif"],
    },
    button: {
      textTransform: "none",
      boxShadow: "none",
      height: "50px",
    },
  },
});

export const fadeDefault = {
  timeout: {
    enter: 2000,
  },
};

export const slideDefault = {
  timeout: {
    enter: 1000,
  },
};

export const shortFade = {
  timeout: {
    enter: 500,
  },
};

export const timelineData = [
  { number: 1, text: "Join Standard" },
  {
    number: 2,
    text:
      "Receive a link to file after our team of tax experts review your info*",
  },
  {
    number: 3,
    text:
      "Upload supporting documents (W2s, etc.). We'll help you find what you need.",
  },
  {
    number: 4,
    text: "Submit! Refunds are typically processed within 3 weeks.",
  },
  {
    number: 5,
    text: "Pay a flat rate of $25 only if you receive a refund.",
  },
];
