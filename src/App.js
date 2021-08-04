import React from "react";
import About from "./about";
import Contact from "./contact";
import Header from "./Header";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {


  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Portfolio} /> //Currently the home page, will change later
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>

  );
}

export default App;
