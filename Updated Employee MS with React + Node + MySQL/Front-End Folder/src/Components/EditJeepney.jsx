import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditJeepney = () => {
  const { id } = useParams();
  const [jeepney, setJeepney] = useState({
    route_code: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/employee/jeepneys/${id}`)
      .then(result => {
        if (result.data.Status) {
          setJeepney(result.data.Result[0]);
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/employee/edit_jeepney/${id}`, jeepney)
      .then(result => {
        if (result.data.Status) {
          alert('Successfully edited jeepney!');
          navigate('/dashboard/jeepney_detail');
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 w-50 border">
        <div className="manage-emp-header">
          <h3 className="text-center">EDIT</h3>
        </div>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputRouteCode" className="form-label">
              Route Code
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRouteCode"
              placeholder="Enter Route Code"
              autoComplete="off"
              value={jeepney.route_code}
              onChange={(e) =>
                setJeepney({ ...jeepney, route_code: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn add-employee w-100">
              Edit Jeepney
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJeepney;
