import React, { useEffect } from "react";
import {
  fetchData,
  handleError,
  sortByName,
  sortByAge,
  sortBySector,
  sortByEmail,
} from "../redux/actions/fetchEmployeesAction";
import { withRouter } from "../components/useRouter";
import { connect } from "react-redux";
import DisplayEmployees from "../components/DisplayEmployees";
import NavBar from "../components/NavBar";
import axios from 'axios';
const Main = (props) => {
  useEffect(async () => {
    if(!props.employeesDisplay){
    console.log("pasa")
    console.log(props)
     await props.fetchData();
      }
  }, []);
  const { employees } = props.employeesData;
  let employeesDisplay = employees[0];
  const sortBy = (field) => {
    switch (field) {
      case "Name":
        return props.sortByName(employeesDisplay);
      case "Edad":
        return props.sortByAge(employeesDisplay);
      case "Sector":
        return props.sortBySector(employeesDisplay);
      case "Email":
        return props.sortByEmail(employeesDisplay);
      default:
        return "";
    }
  };

  return (
    <>
      <NavBar />
      <div className="text-3xl text text-slate-700 flex items-center justify-center mt-6">
        Lista de empleados
      </div>
      <div className="flex items-center justify-center mt-12">
        <table className="table-fixed min-w-screen min-h-screen bg-gray-100 bg-gray-100 font-sans overflow-hidden w-100">
          <thead className="border-b-4 border-zinc-600">
            <tr>
              <th
                onClick={() => sortBy("Name")}
                className="px-4 cursor-pointer"
              >
                Nombre
              </th>
              <th
                onClick={() => sortBy("Edad")}
                className="px-4 cursor-pointer"
              >
                Edad
              </th>
              <th
                onClick={() => sortBy("Sector")}
                className="px-6 cursor-pointer"
              >
                Sector
              </th>
              <th
                onClick={() => sortBy("Email")}
                className="px-4 cursor-pointer"
              >
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {employeesDisplay ? (employeesDisplay.map((employee) => {
                return (
                  <React.Fragment key={employee.id}>
                  <DisplayEmployees employee={employee} key={employee.id} />
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
              <td> Cargando... </td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  employeesData: state.employees,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => { dispatch(fetchData())},
    handleError: () => { dispatch(handleError())},
    sortByName: (employees) => { dispatch(sortByName(employees))},
    sortByAge: (employees) => { dispatch(sortByAge(employees))},
    sortBySector: (employees) => { dispatch(sortBySector(employees))},
    sortByEmail: (employees) => { dispatch(sortByEmail(employees))}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
