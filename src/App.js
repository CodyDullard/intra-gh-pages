/* eslint-disable */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Staff from "./pages/Staff";
import Navigation from './components/Navigation';



export default function App() {
  return (
    <Router>
      <div>
        <Navigation/>
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

