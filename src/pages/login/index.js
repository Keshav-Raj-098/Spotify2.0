"use client"

import React from 'react'
import "./page.css"
import Buttoon from "./button1" 



const Login = () => {




  return (
    <div >
     <input type='text' id='username' placeholder='Username' required></input>
     <input type='password' id='password' placeholder='Password' required></input>
     <Buttoon/>
     
    </div>
  )
}

export default Login

