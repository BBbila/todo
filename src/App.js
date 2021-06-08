import React, { Component } from 'react';
import { CONTEXT } from './config';
import Index from './pages/index/index';

import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route
            exact
            path={`${CONTEXT}/`}
            render={() => <Redirect to={`${CONTEXT}/index`}></Redirect>}
          ></Route>
          <Route exact path={`${CONTEXT}/index`} component={Index} />
        </Switch>
      </Router>
  );
}

export default App;
