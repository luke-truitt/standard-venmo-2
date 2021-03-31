import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import ErrorPage from "./components/error/ErrorPage";

import { useEffect, useState } from "react";
import "./global.css";

function App() {
  const [referToId, setReferToId] = useState("");

  return (
    <div className="app-c0">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                referToId={referToId}
                setReferTo={(rid) => setReferToId(rid)}
              />
            </Route>
            <Route path="/contact">
              <Contact
                referToId={referToId}
                setReferTo={(rid) => setReferToId(rid)}
              />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
