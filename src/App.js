import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/About/About';  
import Home from './components/Home/Home';  
import Menu from "./components/Menu/Menu";
import ShowReviews from "./components/Review/ShowReviews"
import Footer from './components/Home/Footer';
import Contact from './components/Contact/Contact'


class App extends React.Component {
  render() {
    
    return (
     
      <Provider store={store}>
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
            <Link to="/reviews" className="nav-link">
              Reviews
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
      <Route exact path="/reviews" component={ShowReviews}/>
      <Route exact path="/contact" component={Contact}/>
      </Switch>
      <Footer />
    </Router>
    </Provider>
   
  )
}
}
export default App

