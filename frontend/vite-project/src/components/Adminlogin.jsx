import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"



function AdminloginPage() {

    const history=useNavigate();

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
  
    let obj={
        email:email,
        pass:password,
       
    }

    async function submit(e){
        e.preventDefault();
        try {

            await axios.post("http://localhost:6001/check", obj)
            .then((res) => {
                console.log(res.data);
                if(res.data){
    
                    history('/adminpage')
                }
                else{
                    alert("check usernam or password")
                }
            })
            .catch(e => {
                // alert("wrong details")
                console.log(e);
            })
    
    }
    catch (e) {
        console.log(e);
    
    }
               
    
      }

    //     try{

    //         await axios.post("http://localhost:6000/check",obj)
    //         .then((res)=>{
    //             console.log(res.data);
    //             history('/ownership')
    //         })
    //         .catch(e=>{
    //             alert("wrong details")
    //             console.log(e);
    //         })

    //     }
    //     catch(e){
    //         console.log(e);

    //     }

    // }


    return (
        <div className="login">

            <h1>Admin LOGIN  </h1>
            
            <div className="loginbox">

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/><br/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  /><br/><br/>
                

                <input type="submit" onClick={submit} />

            </form>

            <br />
            <Link to="/ForgotPass">Forgot Password</Link>
            <br/>
            <Link to="/signup">Create a New Account</Link>
            </div>

        </div>
    )
}

export default AdminloginPage;