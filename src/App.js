import "./App.css";
import { Box, ThemeProvider } from "@material-ui/core";
import Home from "./components/home/Home";

import { v1Theme } from "./utils/styles";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-194068468-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <ThemeProvider theme={v1Theme}>
      <Box className="app">
        <Home></Home>
      </Box>
    </ThemeProvider>
  );
}

export default App;
