import {
  ThemeProvider,
  Button,
  Typography,
  TextField,
  CircularProgress,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import "./contact.css";
import "./../../styles.css";
import { primaryTheme } from "../../utils/constants.js";
import { NameInput, PhoneNumberInput, TextInput } from "../inputs/Inputs.js";
import { useState, forwardRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../header/Header";

function ContactInfo(props) {
  const history = useHistory();
  let location = useLocation();
  return (
    <div className="contact-form row-container">
      <Typography variant="body1" className="contact-or">
        <strong>Email</strong>{" "}
        <a href="mailto:hello@fromstandard.com">team@fromstandard.com</a>
      </Typography>
      <Typography variant="body1" className="contact-or">
        <strong>Call or Text</strong>{" "}
        <a href="tel:+17208072551">+1 (720) 807 - 2551</a>
      </Typography>
      <Typography variant="body1" className="contact-or">
        <strong>Address</strong> 1801 California Street Floor 24, Denver, CO
        80202
      </Typography>
      <div
        className="contact-or-horizontal-line"
        style={{ marginTop: "5vh", marginBottom: "5vh" }}
      />
      <Button
        className="contact-sign-button"
        variant="contained"
        color="secondary"
        onClick={() => {
          history.push({ pathname: "/" });
        }}
      >
        Go Home
      </Button>
    </div>
  );
}

function Contact() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Header page={"Contact"} />
      <div className="contact-page-c0 column-container">
        <div className="contact-page-c1-right row-container">
          <div className="contact-page-c1-right-content row-container">
            <Typography
              color="textPrimary"
              variant="h2"
              className="form-title pass-form-title"
            >
              <span className="teal-highlight">Contact Us</span>
            </Typography>
            <ContactInfo />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Contact;
