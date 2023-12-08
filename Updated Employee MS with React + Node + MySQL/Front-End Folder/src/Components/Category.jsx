import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            if(result.data.Status) {
                setCategory(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            {/* <h3>Job List</h3> */}
        </div>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Employee Type:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map(c => (
                            <tr>
                                <td>{c.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to="/dashboard/add_category" className='btn add-employee w-10'>Add Category</Link>
        </div>

    </div>
  )
}

export default Category