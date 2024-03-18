
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './comonents/Login';
import Dashboard from './comonents/Dashboard';
import NotFound from './comonents/NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' Component={Login}/>
        <Route exact path='/dashboard' Component={Dashboard}/>
        <Route Component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
