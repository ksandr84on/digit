import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import ServicesPage from './pages/services';
import ContactPage from './pages/contacts';
import ItEq from './pages/iteq';
import LabEq from './pages/labeq';
import StageEq from './pages/stageeq';
import Dev from './pages/dev';
import Consulting from './pages/consulting';


function App({ t }) {

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/services' component={ServicesPage} exact />
        <Route path='/contacts' component={ContactPage} exact />
        <Route path='/it-equipment' component={ItEq} exact />
        <Route path='/labs-equipment' component={LabEq} exact />
        <Route path='/stage-equipment' component={StageEq} exact />
        <Route path='/development' component={Dev} exact />
        <Route path='/consulting' component={Consulting} exact />
      </Switch>
    </Router>
  );
}

export default App;
