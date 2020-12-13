import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Staff from "./pages/Staff";




export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/staff">Staff</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/staff">
            <Staff />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

