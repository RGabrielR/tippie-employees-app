import * as t from '../types';
import axios from 'axios';
import employeesData from '../../components/data';
export const fetchData = async () => {
   return async (dispatch) => {
//       const data = '';
//       const config = {
//   method: 'get',
//   url: 'https://employees-data-challenge.herokuapp.com',
//   headers: { },
//   data : data
// };
// try {
//    axios(config).then( (res) => (res.data)).then(data => dispatch(fetchEmployees(data)))
// } catch (error) {
//   console.log(error)
// }
 return await  dispatch(fetchEmployees(employeesData))
}};
export const sortByName = employees => {
  return (dispatch) => {
    const sortedByName = employees.sort((a, b) => a.name.localeCompare(b.name));
    dispatch(fetchEmployees(sortedByName))  
  }
}
export const sortByAge = employees => {
  return (dispatch) => {
    const sortedByAge = employees.sort((a, b) => a.age.localeCompare(b.age));
    dispatch(fetchEmployees(sortedByAge))  
  }
}
export const sortBySector = employees => {
  return (dispatch) => {
    const sortedBySector = employees.sort((a, b) => a.sector.localeCompare(b.sector));
    dispatch(fetchEmployees(sortedBySector))  
  }
}
export const sortByEmail = employees => {
  return (dispatch) => {
    const sortedByEmail = employees.sort((a, b) => a.email.localeCompare(b.email));
    dispatch(fetchEmployees(sortedByEmail))  
  }
}
export const fetchEmployees = employees => {
    return {
        type: t.FETCH_EMPLOYEES,
        payload: employees
    }
}
export const handleError = error =>{
  return{
    type:t.HANDLE_ERROR,
    payload: error
  }
}
