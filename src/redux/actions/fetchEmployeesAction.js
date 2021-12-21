import * as t from '../types';
import axios from 'axios';

export const fetchData = () => {
    return (dispatch) => {
      const config = axios.create({
  baseURL: 'https://employees-data-challenge.herokuapp.com/',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
        axios(config).then(res => (res.data)).then(data => dispatch(fetchEmployees(data))).catch(err => console.log(err));
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
