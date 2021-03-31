import {
  AppBar,
  ThemeProvider,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { primaryTheme } from "../../utils/constants";
import { useHistory, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./../../styles.css";
import "./header.css";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import useWindowDimensions from "../useWindowDimensions";
import logo from "./../../images/logo/tax.svg";
// import { Mixpanel } from "./../../mixpanel.js";

function Header(props) {
  const history = useHistory();
  const [loadAttempts, setLoadAttempts] = useState(0);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(props.page);
  
  const onContact = () => {
    // Mixpanel.track("visit_contact", { source: "header" });
    history.push({ pathname: "/contact" });
  };

  const onLogo = () => {
  //   if (user.user) {
  //     // Mixpanel.identify(user.user.referToId);
  //   }
    history.push({ pathname: "/" });
  };
  const { width, height } = useWindowDimensions();
  const isMobile = width < 900;


  useEffect(() => {
    
  });
  return (
    <ThemeProvider theme={primaryTheme}>
      <div className="header-c0 column-container">
        <Typography
          variant="h4"
          className="logo-text"
          style={{ cursor: "pointer" }}
          onClick={() => onLogo()}
        >
          <img src={logo} className="header-logo" />
          {}
        </Typography>
        <div className="header-button-container">
          <Button
              onClick={onContact}
              variant="outlined"
              color="primary"
              className="contact-button"
            >
              {" "}
              Contact{" "}
            </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Header;
