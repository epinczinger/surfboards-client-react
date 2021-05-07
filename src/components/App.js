import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getProducts, localStorageSignIn, signIn } from '../actions';
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
    <div className="flex">
      <Router>
        <SideBar />
        <Switch>
          <Route path="/surfboards/:id" exact component={SurfboardDetails} />
          <Route path="/accesories/:id" exact component={AccesoryDetails} />
          <Route path="/sign_up" exact component={SignUp} />
          <Route path="/sign_in" exact component={SignIn} />
          <Route path="/surfboards" exact component={SurfboardsList} />
          <Route path="/accesories" exact component={AccesoriesList} />
          <Route path="/favourites" exact component={FavouritesList} />
          <Route path="/lifestyle" exact component={Lifestyle} />
          <Route path="*" component={DefaultNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
