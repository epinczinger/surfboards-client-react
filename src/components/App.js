import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getProducts, localStorageSignIn } from '../actions';
import SideBar from './SideBar';
import SignUp from '../forms/SignUp';
import SignIn from '../forms/SignIn';
import Home from './Home';
import SurfboardDetails from './SurfboardDetails';
import AccesoryDetails from './AccesoryDetails';
import ItemList from '../containers/ItemList';
import FavouritesList from '../containers/FavouritesList';
import DefaultNotFound from './DefaultNotFound';
import Lifestyle from './Lifestyle';
import AddItem from './AddItem';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.session.isLogged);

  useEffect(() => {
    dispatch(getProducts());
    if (window.localStorage.getItem('sessionID') && !isLoggedIn) {
      dispatch(localStorageSignIn(window.localStorage.getItem('sessionID')));
    }
  }, []);

  return (
    <div className="flex">
      <Router>
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/surfboards/:id" exact component={SurfboardDetails} />
          <Route path="/accesories/:id" exact component={AccesoryDetails} />
          <Route path="/sign_up" exact component={SignUp} />
          <Route path="/sign_in" exact component={SignIn} />
          <Route path="/surfboards" exact component={ItemList} />
          <Route path="/accesories" exact component={ItemList} />
          <Route path="/additem" exact component={AddItem} />
          <Route path="/favourites" exact component={FavouritesList} />
          <Route path="/lifestyle" exact component={Lifestyle} />
          <Route path="*" component={DefaultNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
