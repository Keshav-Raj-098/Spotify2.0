"use server";
import fs from "fs";



async function datahandle(user, password) {

    
// let x = user.split(" ").join("");

let use =  user.replace(/ /g, "_");
 
const data =  
   

` const ${use} = {

            username:"${use}",
            passkey:"${password}"

}

export {${use}};


`
    
    
    
    fs.appendFile("private/data.js", data, (err) => {
        if (err) throw err;
        
        
    });
}

export default datahandle;
