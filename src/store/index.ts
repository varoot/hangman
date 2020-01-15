import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import guesses from './guesses';

const rootReducer = combineReducers({ guesses });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
