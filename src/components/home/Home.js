import "../../global.css";
import "./home.css";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import mockup from "../../resources/images/mockup-lottery.png";
import headerLogo from "../../resources/images/logo-light.svg";
import EmailInput from "../EmailInput";
import GradientTextBox from "../GradientTextBox";
import Fade from "react-reveal/Fade";
import React, { useState } from "react";
import * as emailjs from "emailjs-com";
const {
  REACT_APP_API_BASE_URL,
  REACT_APP_WAITLIST_URL,
  REACT_APP_CALCULATOR_URL,
  REACT_APP_EMAILJS_USER_ID, 
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_PAGE_ID
} = process.env;

const USER_ID = REACT_APP_EMAILJS_USER_ID;
const TEMPLATE_ID = "template_b3u2bhe";
const SERVICE_ID = REACT_APP_EMAILJS_SERVICE_ID;
const PAGE_ID = REACT_APP_PAGE_ID;
function Home() {  
  const axios = require("axios");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const explainerText = [
    {
      number: 1,
      title: "A title is what happens",
      body:
        "nd then heres an explanation of what really happens. Everything goes wow.",
    },
    {
      number: 2,
      title: "A title is what happens",
      body:
        "nd then heres an explanation of what really happens. Everything goes wow.",
    },
    {
      number: 3,
      title: "A title is what happens",
      body:
        "nd then heres an explanation of what really happens. Everything goes wow.",
    },
  ];
  const keyDown = (e, val) => {
    var code = e.keyCode || e.which;
    if (code === 13 || code === 32 || code === 39) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        ) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email2
        )
      ) {
        submitEmail();
        setInvalid(false);
      } else {
        setInvalid(true);
      }
    }
  };
  const addEmail = async (email) => {
      axios
        .post(REACT_APP_API_BASE_URL + REACT_APP_WAITLIST_URL, {
          email: email,
          landingPageId: PAGE_ID
        })
        .then(function (response) {
          const templateParams = {
          to_email: email,
          waitlist_spot: response.data.waitlist_spot
          };

          emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
            function (response) {},
            function (error) {}
          );
          console.log("Email Sent");
        })
        .catch(function (error) {console.log(error);});
    }
    const invalidClick = () => {
      setInvalid(true);
    };
  const submitEmail = () => {
    // setLoading(true);
    if(email.length > 0) {
      addEmail(email);
      setEmail('');
      setInvalid(false);
    }
    if(email2.length > 0) {
      addEmail(email2);
      setEmail2('');
      setInvalid(false);
    }
    setMessage('Successfully Registered!');
  };
  const ExplainerTextBoxes = explainerText.map((step) => (
    <Fade top>
      <GradientTextBox
        color="pink"
        number={step.number}
        title={step.title}
        body={step.body}
      />
    </Fade>
  ));
  return (
    <Box className="lottery-home rows">
      <Box className="lottery-home-header">
        <img className="lottery-home-header-logo" src={headerLogo} />
      </Box>
      <Box className="lottery-home-landing-container columns">
        <Box className="lottery-home-text rows">
          <Typography variant="h2" color="primary">
            The simplest intro to crypto
          </Typography>
          <EmailInput buttonLabel="Join Waitlist"  invalid={invalid} onKeyPress={(e, val) => keyDown(e, val)} submitEmail={submitEmail} emailValue={email} setEmail={setEmail} invalidClick={invalidClick}/>
          <Typography variant="h5" color="primary">
            {message}
          </Typography>
          <Typography variant="h5" color="primary">
            Store crypto and earn interest. No fees.
          </Typography>
        </Box>{" "}
        <Fade top>
          <img src={mockup} className="lottery-home-mockup" />{" "}
        </Fade>
      </Box>
      <Box className="explainer-container">
        <Box className="explainer-container-content rows">
          <Fade top>
            <Typography
              className="explainer-title"
              variant="h3"
              color="primary">
              How does it work?
            </Typography>
          </Fade>
          <Box className="explainer-text-boxes columns">
            {ExplainerTextBoxes}
          </Box>
        </Box>
      </Box>
      <Box className="lottery-home-footer">
        <EmailInput buttonLabel="Join Waitlist" invalid={invalid} onKeyPress={(e, val) => keyDown(e, val)} submitEmail={submitEmail} emailValue={email2} setEmail={setEmail2}/>
      </Box>
    </Box>
  );
}

export default Home;
