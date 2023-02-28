import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import i18n from  'i18next';

function App() {
  i18n.changeLanguage("GB")
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
