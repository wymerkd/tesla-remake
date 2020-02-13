import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ModelS from './components/ModelS';
import Error404 from './components/Error404';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/models' component={ModelS}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
