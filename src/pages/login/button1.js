 

import  getuse from"./getuser"
import { useNavigate } from "react-router-dom";

var y;
export default function Page() {
  
  const navigate = useNavigate()


  return (
    <button type="button" onClick={async() => {
      
       y = await getuse()
       console.log(y);
       
      if(y==true) {console.log('Verified');
        
          navigate('/dashboard')
          console.log(y);
          
      }
      else{alert("Invalid user")}
      }}>
      Login
    </button>
  )
}

export {y}