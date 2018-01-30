import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Ticker from './Ticker';
import Orderbook from './Orderbook';
import HistoryApp from './HistoryApp'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router> 
        <div className="container">
          <Header />
          <Ticker />
          <Link to="/">Orderbook</Link>
          <Link to="/history">History</Link>
          <Route exact path="/" component={Orderbook}/>
          <Route exact path="/history" component={HistoryApp}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
