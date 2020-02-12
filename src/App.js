import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ModelS from './components/ModelS';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/models' component={ModelS}/>
      </Switch>
    </div>
  );
}

export default App;
