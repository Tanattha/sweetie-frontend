import React from "react";
import "./Navbar.css";

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from '../About/About';  
import Home from '../Home/Home';  
import Menu from "../Menu/Menu";

class Navbar extends React.Component {
  render() {
    return (
   
    <Router>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src="img/logo.png" alt="logo" className="NavImg" />
        </a>

        <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          
        </ul>
      </nav>
      
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/menu" component={Menu}/>
      </Switch>
    </Router>
   
  )
}
}
export default Navbar;
