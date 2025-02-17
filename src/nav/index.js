import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Loading from "../pages/loading";
import Project from "../pages/projects";
import Timeline from "../pages/timeline";

export default function Nav() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        <Route path="/timeline" component={Timeline} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}