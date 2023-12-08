import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Compo.css';

const Jeepneys = () => {
  const [jeepney, setJeepney] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/jeepneys")
      .then((result) => {
        if (result.data.Status) {
            setJeepney(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);


  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/employee/delete_jeepney/'+id)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
            alert('Successfully deleted jeepney!')
        } else {
            alert(result.data.Error)
        }
    })
  } 
  
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        {/* <h2>Employee List</h2> */}
      </div>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>JEEPNEY ID</th>
              <th>ROUTE CODE</th>
            </tr>
          </thead>
          <tbody>
            {jeepney.map((e) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.route_code}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_jeepney/` + e.id}
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
      <Link to="/dashboard/add_jeepney" className="btn add-employee w-10 ">
        Add Jeepney
      </Link>
    </div>
  );
};

export default Jeepneys;