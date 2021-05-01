import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getSurfboards } from '../actions';
import SideBar from './SideBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurfboards());
  }, []);

  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
