import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAccesories, getSurfboards } from '../actions';
import SideBar from './SideBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurfboards());
    dispatch(getAccesories());
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
