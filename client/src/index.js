import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/login" component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
