import React from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Header";
import Portfolio from "./Pages/Portfolio";
import Admin from "./Pages/Admin";
import Homepage from "./Pages/Home";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import ProtectedRoute from "./ProtectedRoute";

function App() {
    const isAuthenticated = true;

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Homepage}/> //Currently the home page, will change later
                <Route path="/portfolio" exact component={Portfolio}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <ProtectedRoute path="/admin" component={Admin} auth={isAuthenticated}/> // Move this behind a security wall
            </Switch>
        </Router>

    );
}

export default App;
