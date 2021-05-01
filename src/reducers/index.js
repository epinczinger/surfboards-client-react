import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import surfboardReducer from './surfboard';

const rootReducer = combineReducers({
  surfboard: surfboardReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
