import React from 'react'
import { useState} from 'react';
import axios from 'axios';
import Read from './Read';

export default function Update(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
let id=localStorage.getItem('Id');
    console.log(id)
    

const handleEmail=(e)=>{
    setEmail(e.target.value)
}

const handlePassword=(e)=>{
    setPassword(e.target.value)
}

const UpdateUser=()=>{
    axios.put(`https://62b736f8491a19c97af0a88f.mockapi.io/Crud/${id}`,
    {
        email,
        password
    })
alert("Updated Successfully");
}




    return (
        <div className='container'>
            <div className='subcontainer'>
                <div >
                    <label>Email</label>
                    <input placeholder='email' value={email} name="email" onChange={handleEmail} />
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder='Password' value={password} onChange={handlePassword} />
                </div>
                <div>
                    <button onClick={()=>UpdateUser()}>Update</button>
                </div>
                </div>
                <Read />
        </div>
        
    )
}

