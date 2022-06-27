import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Read() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        axios.get('https://62b736f8491a19c97af0a88f.mockapi.io/Crud')
            .then(res => {
                setUserData(res.data)
            });
    },[]);


    function deleteUser(id){
        axios.delete(`https://62b736f8491a19c97af0a88f.mockapi.io/Crud/${id}`)
        .then(result =>{}).catch(error => console.error(error))
        
        alert("Deleted");
    }

    

    function editUser(id){
      localStorage.setItem('Id',id);
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr >
                        <th >Sno.</th>
                        <th>Name</th>
                        <th>PhoneNo</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {userData.map((data,id) => {
                        return (
                            <tr key={id}>
                                <td >{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.phoneNo}</td>
                                <td><Link to='/update'>{<button className='upd-btn' onClick={()=>editUser(data.id)}>Update</button>}</Link></td>
                                <td><button className='del-btn' onClick={(e)=>deleteUser(data.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                    


                </tbody>
            </table>
            
            <div>
            </div>
            <Link to='/task2'>{<button className='tsk-btn'>Task2</button>}</Link>

        </div>
    )
}
