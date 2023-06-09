import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './index.css';


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    let obj = {
        username: email,
        pass: password
    }

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/login", obj)
                .then((res) => {
                    console.log(res.data);
                    if(res.data){

                        history('/pro')
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


    return (
        <div className="login-form">

            <h1>Login</h1>
            <div className="content">
              <div className="input-firld">
                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="mail" /><br /><br />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="pass" /><br /><br />
                    <input type="submit" onClick={submit} />

                </form>

                <br />
                <Link to="/ForgotPass">Forgot Password</Link><br/>
                {/* <button onClick={()=>history("/signup")}>NEW ACCOUNT</button>
                <br /> */}
                <Link to="/">Create a New Account</Link>
            </div>
                </div>
        </div>
    )
}

export default Login;