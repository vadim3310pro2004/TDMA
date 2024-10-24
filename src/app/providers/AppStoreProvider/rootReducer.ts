import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user/store/user.slice';


const rootReducer = combineReducers({
    user: userReducer
});


export default rootReducer;