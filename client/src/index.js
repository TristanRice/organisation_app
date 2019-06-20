import ReactDOM from 'react-dom';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login  from "./components/auth/Login";
import Register from "./components/auth/Register";
import App from './App';

console.log(Login);

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
), document.getElementById('root'));
