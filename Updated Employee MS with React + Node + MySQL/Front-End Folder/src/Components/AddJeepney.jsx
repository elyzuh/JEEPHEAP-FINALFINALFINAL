import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddJeepney = () => {
    const navigate = useNavigate()
    const [jeepney, setJeepney] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/employee/add_jeepney', { jeepney })
            .then(result => {
                if (result.data.Status) {
                    alert('Successfully added jeepney!');
                    navigate('/dashboard/jeepney_detail')
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='p-3 rounded w-25 border d-flex flex-column align-items-center'>
                <h2>ADD JEEPNEY</h2>
                <form onSubmit={handleSubmit} className='w-100'>
                    <div className='form-group mb-3'>
                        <label htmlFor="jeepney"><strong>Jeepney:</strong></label>
                        <input type="text" name='jeepney' placeholder='Enter Jeepney'
                            onChange={(e) => setJeepney(e.target.value)} className='form-control' />
                    </div>
                    <button type="submit" className='btn add-employee w-100'>Add Jeepney</button>
                </form>
            </div>
        </div>


    )
}

export default AddJeepney