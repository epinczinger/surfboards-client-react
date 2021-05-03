import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAccesories, getSurfboards } from '../actions';
import SideBar from './SideBar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SurfboardDetails from './SurfboardDetails';
import SurfboardsList from '../containers/SurfboardsList';

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
          <Route path="/surfboards/:id" exact>
            <SurfboardDetails />
          </Route>
          <Route path="/sign_up" exact>
            <SignUp />
          </Route>
          <Route path="/sign_in" exact>
            <SignIn />
          </Route>
          <Route path="/surfboards" exact>
            <SurfboardsList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
