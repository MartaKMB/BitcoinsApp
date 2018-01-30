import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Ticker from './Ticker';
import Timer from './Timer';
import Orderbook from './Orderbook';
import HistoryApp from './HistoryApp'
import Footer from './Footer';
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
          <div className="link_container">
            <Link to="/" className="link_btn">Orderbook</Link>
            <Link to="/history" className="link_btn">History</Link>
            <Timer />
          </div>
          <div className="details_container">
            <Route exact path="/" component={Orderbook}/>
            <Route exact path="/history" component={HistoryApp}/>
          </div>
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
