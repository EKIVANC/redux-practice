import  counterReducer from './counter';
import  isLoggedInReducer from './islogged';
import {combineReducers} from 'redux';


const allReducers = combineReducers( {
    counterReducer,
    isLoggedInReducer
});

export default allReducers;