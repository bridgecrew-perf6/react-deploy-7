import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Read from './Read';

export default function Create() {

    const [name, setName] = useState(' ');
    const [phoneNo, setPhoneNo] = useState(' ');
    console.log(name, phoneNo);

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePhoneNo = (e) => {
        setPhoneNo(e.target.value)
    }

    const CreateUser = () => {

        let isOk = true;
        console.log(name);
        if (!name || !phoneNo) {
            isOk = false;
        }
        if (isOk) {
            axios.post('https://62b736f8491a19c97af0a88f.mockapi.io/Crud',
                {
                    name,
                    phoneNo
                })
            alert("Successfull");
        }

        else {
            alert("Please Enter Name and Phone Number");
        }
    }

    return (
        <div className='container'>
            <div className='subcontainer'>
                <div className='forms'>
                    <label>Name</label>
                    <input id="name" placeholder='Enter Your Name' style={name === "" ? { borderColor: "red" } : {}} name="name" onChange={handleName} />
                </div>
                <div>
                    <label>Phone</label>
                    <input id="name" placeholder='Enter Your PhoneNo' style={phoneNo === "" ? { borderColor: "red" } : {}} onChange={handlePhoneNo} />
                </div>
                <div>
                    <button onClick={CreateUser} className='btn'>Create</button>
                </div>
            </div>
            <Read />
        </div>

    )
}
