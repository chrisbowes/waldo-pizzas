import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import order from './order';

export default combineReducers({
    routing: routerReducer,
    order
})