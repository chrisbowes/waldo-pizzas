import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menu from './app.reducer.menu';
import cart from './app.reducer.cart';

export default combineReducers({
    routing: routerReducer,
    menu,
    cart
})