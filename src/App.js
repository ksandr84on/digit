import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import ServicesPage from './pages/services';
import ContactPage from './pages/contacts';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/services' component={ServicesPage} exact />
        <Route path='/contacts' component={ContactPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
