import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Navbar/>
            <Switch className="container">
              <Route path="/" component={Home} exact></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route component={Error}></Route>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
