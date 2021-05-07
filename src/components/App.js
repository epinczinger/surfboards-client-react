import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getProducts, localStorageSignIn } from '../actions';
import SideBar from './SideBar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SurfboardDetails from './SurfboardDetails';
import AccesoryDetails from './AccesoryDetails';
import SurfboardsList from '../containers/SurfboardsList';
import FavouritesList from '../containers/FavouritesList';
import AccesoriesList from '../containers/AccesoriesList';
import DefaultNotFound from '../containers/DefaultNotFound';
import Lifestyle from '../containers/Lifestyle';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.session[1]);

  useEffect(() => {
    dispatch(getProducts());
    if (window.localStorage.getItem('sessionID') && !isLoggedIn) {
      dispatch(
        localStorageSignIn(window.localStorage.getItem('sessionID')),
      );
    }
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
          <Route path="/favourites" exact>
            <FavouritesList />
          </Route>
          <Route path="/lifestyle" exact>
            <Lifestyle />
          </Route>
          <Route path="*">
            <DefaultNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
