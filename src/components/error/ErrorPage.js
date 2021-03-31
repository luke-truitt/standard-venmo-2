import "./error-page.css";
import "../../global.css";
import {
  ThemeProvider,
  Button,
  Typography,
  TextField,
} from "@material-ui/core/";
// import { Mixpanel } from "./../../mixpanel";

import { primaryTheme } from "../../utils/constants.js";
import { useHistory } from "react-router-dom";
import React, { useRef, useState } from "react";

function ErrorPage(props) {
  const history = useHistory();

  const goHome = () => {
    history.push({ pathname: "/" });
  };
  const signIn = () => {
    // Mixpanel.track("visit_sign_in", { source: "error_page" });
    history.push({ pathname: "/signin" });
  };
  return (
    <ThemeProvider theme={primaryTheme}>
      <div
        className="outer-container outer-container-error"
        id="outer-container-mobile"
      >
        <div className="inner-container-left" id="inner-container-left-mobile">
          <Typography variant="h4" color="text-primary" id="h1-mobile">
            Looks like you might be lost. This page doesn't exist...
          </Typography>
          <div style={{ flex: "row", marginTop: "50px" }}>
            <Button
              className="embedded-field-button"
              id="embedded-field-button-mobile"
              variant="contained"
              color="secondary"
              style={{ marginRight: "30px", marginLeft: "30px" }}
              onClick={goHome}
            >
              Go Home
            </Button>
            <Button
              className="embedded-field-button"
              id="embedded-field-button-mobile"
              variant="contained"
              color="primary"
              style={{ marginRight: "30px", marginLeft: "30px" }}
              onClick={signIn}
            >
              Log In
            </Button>
          </div>

          <Typography
            variant="h6"
            color="text-primary"
            id="h3-mobile"
            style={{ marginTop: "50px" }}
          >
            It does in fact blow our minds how much money is left on the table
            by college students. Do yourself a favor and let us help you.
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default ErrorPage;
