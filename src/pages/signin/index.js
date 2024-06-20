import React from 'react';
import datahandle from "./signin";
import extract from "./func"
import "./page.css";

const Signin = () => {
    async function sign() {
        const user = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        

       const a =  extract("private/data.js",user);
     
       a.then((result)=>{
        console.log(result);
        
    if(result===false){alert("user exist")}  
 else{datahandle(user, password);}
       })
    }

    return (
        <div>
            <input type='text' id='username' placeholder='Username' required></input>
            <input type='password' id='password' placeholder='Password' required></input>
            <button onClick={sign}>Sign In</button>
        </div>
    );
};

export default Signin;
