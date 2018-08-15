import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Volunteer from './components/Volunteer.jsx';
import Call from './components/Call.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" exact="true" component={Home} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/call" component={Call} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
