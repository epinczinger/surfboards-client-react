import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAccesories, getSurfboards } from '../actions';
import SideBar from './SideBar';
import SignUp from './SignUp';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurfboards());
    dispatch(getAccesories());
  }, []);

  return (
    <div className="App flex">
      <Router>
        <SideBar />
        <Switch>
          <Route path="/sign_up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
