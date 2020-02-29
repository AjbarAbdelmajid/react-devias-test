import {combineReducers} from 'redux';
import UserReducer  from "./userReducer";

const indexReducer = combineReducers({
    users: UserReducer,
});


export default indexReducer;