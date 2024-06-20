import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'



const Card1 = (props) => {
    
  const {borderradius,linkk} = props
  const [hover, sethover] = useState(false);
  const navigate = useNavigate();
  
  
  const styles = {
    
    container: {
      backgroundColor: hover && "#242424", 
      cursor: hover && "pointer",
      
      
    }
  }
  
  return (
    
    
    <section className='flex flex-col gap- px-3' style={styles.container}
    onMouseEnter={()=>sethover(true)}
    onMouseLeave={()=>sethover(false)}
    onClick={()=>{
     navigate('/card',{state: {lunk : linkk}})
      
    }}
    
    >
      
     <img src={props.src} height={170} width={170}
     style={{ borderRadius:borderradius, boxShadow:"1px 1px 25px black "}}
     />

         <span className='font-medium'>{props.name}</span>
         <span style={{fontSize:'13px' ,color:"#a7a7a7"}}>{props.desc}</span>

    </section>
  )
  
}

export default Card1
