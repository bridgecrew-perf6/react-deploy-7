import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Read from './Read';

export default function Create() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email,password);

const handleEmail=(e)=>{
    setEmail(e.target.value)
}

const handlePassword=(e)=>{
    setPassword(e.target.value)
}

const CreateUser=()=>{
    axios.post('https://62b736f8491a19c97af0a88f.mockapi.io/Crud',
    {
        email,
        password
    })
alert("Successfull");
}

    return (
        <div className='container'>
            <div className='subcontainer'>
                <div >
                    <label>Email</label>
                    <input placeholder='email' name="email" onChange={handleEmail} />
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder='Password' onChange={handlePassword} />
                </div>
                <div>
                    <button onClick={CreateUser}>Create</button>
                </div>
                </div>
                <Read />
        </div>
        
    )
}
