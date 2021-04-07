import "./App.css";
import { Box, ThemeProvider } from "@material-ui/core";
import Home from "./components/home/Home";

import { v1Theme } from "./utils/styles";

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
