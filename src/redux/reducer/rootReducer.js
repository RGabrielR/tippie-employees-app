import { combineReducers } from "redux";
import logInReducer from './logInReducer';
import employeesReducer from './employeesReducer';
const rootReducer = combineReducers({
 logged: logInReducer,
 employees: employeesReducer
});

export default rootReducer;