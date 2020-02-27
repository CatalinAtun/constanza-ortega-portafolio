import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Contact from "./components/Contact";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/project1" component={Project1} />
        <Route path="/project2" component={Project2} />
        <Route path="/project3" component={Project3} />
        <Route path="/project4" component={Project4} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
