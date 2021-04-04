import React, {useState} from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "../global.css";
import { v1Theme } from "../utils/styles.js";

function EmailInput(props) {
  const buttonLabel = props.buttonLabel;
  const textFieldLabel = "Email address";
  const inputTextColor = v1Theme.palette.primary.main;
  const inputBackgroundColor = "transparent";
  const buttonBackgroundColor = v1Theme.palette.secondary.main;
  const buttonTextColor = v1Theme.palette.primary.main;
  const [valid, setValid] = useState(false);

  const checkValid = (mail) => {
    console.log("HEY")
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
    console.log(valid);
  };

  const useTextFieldStyles = makeStyles(() => ({
    inputRoot: {
      textTransform: "none",
      boxShadow: "none",
      border: "1px solid",
      borderColor: inputTextColor,
      color: inputTextColor,
      overflow: "hidden",
      borderRadius: 5,
      "& label .MuiFormLabel-root": {
        color: "white",
      },
      backgroundColor: inputBackgroundColor,
      "&:hover": {
        backgroundColor: inputBackgroundColor,
      },
    },
    input: {
      color: inputTextColor,
    },
    labelRoot: {
      color: inputTextColor,
    },
  }));
  const classes = useTextFieldStyles();
const EmailTextField = props.invalid ? (
    <TextField
    error
    helperText="Please enter a valid email."
    variant="filled"
    label={textFieldLabel}
    className="email-input-text-field"
    value={props.emailValue} 
    onChange={(e) => {
      props.setEmail(e.target.value);
      checkValid(e.target.value);
    }}
    InputProps={{
      classes: { root: classes.inputRoot },
      disableUnderline: true,
    }}
    InputLabelProps={{ classes: { root: classes.labelRoot } }}
    {...props}
  />
  ) : (
    <TextField
  variant="filled"
  label={textFieldLabel}
  className="email-input-text-field"
  value={props.emailValue} 
  onChange={(e) => {props.setEmail(e.target.value);
    checkValid(e.target.value);}}
  InputProps={{
    classes: { root: classes.inputRoot },
    disableUnderline: true,
  }}
  InputLabelProps={{ classes: { root: classes.labelRoot } }}
  {...props}
/>
  );
  const StyledButton = withStyles(() => ({
    root: {
      textTransform: "none",
      boxShadow: "none",
      overflow: "hidden",
      borderRadius: 5,
      height: "58px",
      color: buttonTextColor,
      backgroundColor: buttonBackgroundColor,
      "&:hover": {
        backgroundColor: buttonBackgroundColor,
      },
    },
  }))(Button);

  function EmailButton(props) {
    return (
      <StyledButton className="email-input-button" variant="filled" onClick={valid ? props.submitEmail : props.invalidClick} {...props}>
        {buttonLabel}
      </StyledButton>
    );
  }

  return (
    <Box className="email-input-container columns">
      {EmailTextField}
      <EmailButton {...props}/>
    </Box>
  );
}
export default EmailInput;
