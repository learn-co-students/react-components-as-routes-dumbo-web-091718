import React from 'react';
import ReactDOM from 'react-dom';
import About from './About'
import Login from './Login'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
)
