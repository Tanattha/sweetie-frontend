import React from 'react';
import './App.css';
import store from "./store";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Home/Footer';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
       <Router>
       <Switch>
       <Navbar />
       </Switch>
       <Footer />
     </Router>
    </Provider>
    );
  }
}

export default App;
