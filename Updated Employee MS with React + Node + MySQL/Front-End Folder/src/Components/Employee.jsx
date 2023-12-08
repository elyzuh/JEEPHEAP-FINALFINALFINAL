import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Compo.css';

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");

    if (confirmDelete) {
      axios.delete(`http://localhost:3000/auth/delete_employee/${id}`)
        .then(result => {
          if (result.data.Status) {
            alert("Employee deleted successfully!");
            window.location.reload();
          } else {
            alert(result.data.Error);
          }
        })
        .catch(error => {
          console.error("Error deleting employee:", error);
          alert("An error occurred while deleting the employee.");
        });
    }
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        {/* <h2>Employee List</h2> */}
      </div>
      <div className="mt-3">
        <table className="table rounded-3">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
              <th>SALARY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.salary}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_employee/` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/dashboard/add_employee" className="btn add-employee w-10 ">
        Add Employee
      </Link>
    </div>
  );
};

export default Employee;