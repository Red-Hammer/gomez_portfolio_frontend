import React from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Header";
import Portfolio from "./Pages/Portfolio";
import Admin from "./Pages/Admin";
import Homepage from "./Pages/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

function App() {


    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Homepage}/> //Currently the home page, will change later
                <Route path="/portfolio" exact component={Portfolio}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/admin" component={Admin}/> // Move this behind a security wall
            </Switch>
        </Router>

    );
}

export default App;
