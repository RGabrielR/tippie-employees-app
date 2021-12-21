import * as t from '../types';

const initialState = {
 employees: [],
 error: ""
}
const employeesReducer = (state = initialState ,  action) => {
    switch(action.type) {
     case t.FETCH_EMPLOYEES:
        return {
          employees: [action.payload]
        }
        case t.HANDLE_ERROR:
        return {
          error: action.payload
        }
          default:
      return state;
    }
};

export default employeesReducer;