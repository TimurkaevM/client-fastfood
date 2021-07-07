import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import category from './ducks/category';
import basket from './ducks/basket';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  category: category,
  basket: basket,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
