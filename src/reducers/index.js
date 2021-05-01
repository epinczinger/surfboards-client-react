import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import surfboardsReducer from './surfboards';
import accesoriesReducer from './accesories';

const rootReducer = combineReducers({
  accesories: accesoriesReducer,
  surfboards: surfboardsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
