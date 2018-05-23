import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers/talent';

export default createStore(combineReducers(reducers));