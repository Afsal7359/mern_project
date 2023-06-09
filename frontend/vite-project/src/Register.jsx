import React from 'react'
import {useState} from "react";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
function Register() {
  let navigate=useNavigate()
    const history=useNavigate();

    var [firstname,setFirstname]=useState('')
    var [middlename,setMiddlename]=useState('')
    var [lastname,setLastname]=useState('')
    const[username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[confirm,setConfirm]=useState('')
    let obj = {
        email,
        password,
        username,
        firstname,
        middlename,
        lastname,
        confirm

    }
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/signup",obj  )
            .then((res)=>{
              history("/pro",{state:{id:email}})
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login-form">

            <h1>Signup</h1>
            <div className="content">
              <div className='input-field'>

            <form action="POST">
                <input type="firstname" onChange={(e) => { setFirstname(e.target.value) }} placeholder="First Name"  />
                <br/><br/>
                <input type="middlename" onChange={(e) => { setMiddlename(e.target.value) }} placeholder="Middle Name"  />
                <br/><br/>
                <input type="lastname" onChange={(e) => { setLastname(e.target.value) }} placeholder="Last Name"  />
                <br/><br/>
                <input type="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="User Name"  />
                <br/><br/>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <br/><br/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <br/><br/>
                <input type="confirm" onChange={(e) => { setConfirm(e.target.value) }} placeholder="Confirm Password"  />
                <br/><br/>
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <Link to="/Login">Login</Link>
                  </div>
            </div>
        </div>
    )
}


  
{/* <div class="login-form"> */}
  {/* <form>
    <h1>Register</h1>
    <div class="content">
      <div class="input-field">
        <input type="text" placeholder="name" autocomplete="nope"/>
      </div>
      <div class="input-field">
        <input type="number" placeholder="number" autocomplete="number"/>
      </div>
      <div class="input-field">
        <input type="email" placeholder='email' autocomplete="email"/>
      </div>
      <div class="input-field">
        <input type="password" placeholder="password" autocomplete="new-pasword"/>
      </div>
   
    </div>
    <div class="action">
      <button onClick={()=>navigate("/log")}>Login</button>
      <button onClick={()=>navigate("/")}>signup</button>
      
    </div>
  </form> */}
 {/* </div>
 </div> */}


   
  

export default Register