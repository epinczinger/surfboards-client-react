import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './SideBar';

const App = () => (
  <div className="App">
    <Router>
      <SideBar />
      <Switch>
        <Route />
      </Switch>
    </Router>
  </div>
);

export default App;
