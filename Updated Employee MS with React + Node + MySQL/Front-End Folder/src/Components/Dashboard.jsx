import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Compo.css';
import axios from "axios";
import logo from "../assets/logo.png";

const Dashboard = () => {
  
  const anvigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(result => {
        if (result.data.Status) {
          localStorage.removeItem("valid")
          anvigate('/')
        }
      })
  }


  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 custom-sidebar">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <h1 classname='dashboard-jeepheap'>
                JeepHeap
              </h1>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 ms-2 dashboard-link">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 ms-2 dashboard-link">
                    Manage Members
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/jeepney_detail"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 ms-2 dashboard-link">Manage Jeepneys</span>
                </Link>
              </li>
              <li className="w-100"></li>
              <li className="w-100">
                <Link
                  to="/dashboard/category"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 dashboard-link">Category</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  className="nav-link px-0 align-middle text-white"
                >
          
                  <span className="ms-2 ms-2 dashboard-link">Logged in as: </span>

                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <Link
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 ms-2 dashboard-link">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          {/* <div className="p-2 d-flex justify-content-center shadow">
              <h4 classname="JeepHeap-Text">JeepHeap Management System</h4>
          </div> */}
          <Outlet />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


