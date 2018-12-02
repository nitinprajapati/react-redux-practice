import React, { Component } from 'react';
import Navigation from './components/nav/nav';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Routers from './components/routers/routers';
class App extends Component {

  render() {
    return (
        <Router>
            <React.Fragment>
                <Navigation />
                <Routers />
            </React.Fragment>
        </Router>
    );
  }
}

export default App;
