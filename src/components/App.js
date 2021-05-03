import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAccesories, getSurfboards } from '../actions';
import SideBar from './SideBar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SurfboardDetails from './SurfboardDetails';
import AccesoryDetails from './AccesoryDetails';
import SurfboardsList from '../containers/SurfboardsList';
import AccesoriesList from '../containers/AccesoriesList';

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
          <Route path="/accesories/:id" exact>
            <AccesoryDetails />
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
          <Route path="/accesories" exact>
            <AccesoriesList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
