import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import Read from './Read';

export default function Update(props) {

    const [name, setname] = useState('');
    const [phoneNo, setphoneNo] = useState('');
let id=localStorage.getItem('Id');
    console.log(name,phoneNo)
    

const handlename=(e)=>{
    setname(e.target.value)
}

const handlephoneNo=(e)=>{
    setphoneNo(e.target.value)
}

useEffect(() => {
    axios.get(`https://62b736f8491a19c97af0a88f.mockapi.io/Crud/${id}`)
        .then(res => {
            setname(res.data.name);
            setphoneNo(res.data.phoneNo);
        });
},[]);


const UpdateUser=()=>{
    let isOk=true;
    if(!name || !phoneNo){
        isOk=false;
    }
    if(isOk){
    axios.put(`https://62b736f8491a19c97af0a88f.mockapi.io/Crud/${id}`,
    {
        name,
        phoneNo
    })
alert("Updated Successfully");
    }
    else{
alert('Enter Name and Phone no.')
    }
}




    return (
        <div className='container'>
            <div className='subcontainer'>
                <div >
                    <label>name</label>
                    <input placeholder='name' value={name} style={name===""?{borderColor:"red"}:{}} name="name" onChange={handlename} />
                </div>
                <div>
                    <label>phoneNo</label>
                    <input placeholder='phoneNo' value={phoneNo} style={phoneNo===""?{borderColor:"red"}:{}} onChange={handlephoneNo} />
                </div>
                <div>
                    <button className='btn' onClick={()=>UpdateUser()}>Update</button>
                </div>
                </div>
                <Read />
        </div>
        
    )
}

