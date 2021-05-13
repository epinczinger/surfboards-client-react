import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './products';
import sessionReducer from './sessions';
import favouritesReducer from './favourites';

const rootReducer = combineReducers({
  products: productsReducer,
  session: sessionReducer,
  favourites: favouritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
