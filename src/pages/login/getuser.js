

import login from "./login"


async function run(){

    

 let user = document.getElementById("username");
 let password = document.getElementById("password");

 let m = user.value.replace(/ /g, "_")
 let n = password.value
  
 try {
    const resu = await login(m,n);
       
    // Return true if login is successful, false otherwise
    if(resu==true){
        alert("user logged in")
         


      
    
    }
    else{alert("Invalid user")}

    return resu;
} catch (error) {
    // Handle any errors that occur during the login process
    console.error("Error during login:", error);
    return false; // Return false in case of error
}
}

export default run;


