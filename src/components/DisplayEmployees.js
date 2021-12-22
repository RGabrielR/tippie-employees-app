import React from "react";
const DisplayEmployees = (employeeObj) => {
  const { employee } = employeeObj;
  return (
    <>
      <tr >
        <td className="text-center"> {employee.name} </td>
        <td className="text-center"> {employee.age} </td>
        <td className="text-center"> {employee.sector} </td>
        <td className="text-center"> {employee.email} </td>
      </tr>
    </>
  );
};

export default DisplayEmployees;
