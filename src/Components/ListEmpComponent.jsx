import React, { useEffect, useState } from 'react'
import { listEmpl } from '../services/EmpService';

const ListEmpComponent = () => {

    const [emps , setEmps] = useState([]) ;

    useEffect(() =>{
        listEmpl().then((res)=>{
            setEmps(res.data)
        }).catch(err=>{
            console.error(err);
        })

    },[])
    

    return (
        <div className='container'>
             <h2> List Emploees : </h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <th>Id Employee</th>
                    <th>First Name </th>
                    <th>Last Name </th>
                    <th>Email </th>
                </thead>
                <tbody>
                    {
                        emps.map(emp =>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.mail}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
 
}

export default ListEmpComponent