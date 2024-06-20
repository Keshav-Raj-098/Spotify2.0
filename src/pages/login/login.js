
 async function getuser(myuser){
    try {

           
        console.log(myuser);
        
        // Dynamically import the module
        let module = await import("./data.js");
        
        // Access the property dynamically
        let propertyValue = module[myuser];

        console.log(propertyValue);
        return propertyValue
        // Do something with the property value
    } catch (error) {
        console.error('Error importing module or accessing property:', error);
    }

 }




 async function login(m,n){


 let z = await getuser(m);

 if(z==null){return false}

 else{
 

if((m===(z.username))&&((n)===(z.passkey))){

return true;
}
else{
    
    return false;
}
}


    
}

export default login;