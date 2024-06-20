
"use server";
import fs from "fs";

function extractConstVariables(filePath,user) {

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const objectRegex = /const\s+\w+\s*=\s*{\s*username\s*:\s*"([^"]+)",/g;
    
    let match;
    const usernames = [];
    
    while ((match = objectRegex.exec(fileContent)) !== null) {
        const username = match[1];
        usernames.push(username);
    }
    
    const ufo = user.replace(/ /g, "_");
    var x=true;
    

    for (const username of usernames) {
        
        console.log(username)
        if (username === ufo) {
         x=false;
        }

    }

    return x;
}



export default extractConstVariables;