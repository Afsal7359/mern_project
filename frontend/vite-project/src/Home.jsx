import React from 'react'
import {useNavigate} from "react-router-dom";

function Home() {
  let navigate=useNavigate()
  return (
    <div>
      <div className='Home'>
      <div className='login-forms'>
      <div className='action'>
   <button onClick={()=>navigate("/log")}>login </button>
   <button onClick={()=>navigate("/reg")}>Register </button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home