import React from 'react'
import Up from '../../components/leftup/up1'
import Down from '../../components/down/down'
import Navbar from '../../components/navbars/navbar'
import {useLocation } from 'react-router-dom';



const Left = () => {
  
  
  const state = useLocation().state;
  const link = state?.lunk || "none";
  

  
  return (
    <div className='flex flex-row'>
    <div className='flex flex-col'>
      <Up/>
      <Down/>
    </div>
    <section className='flex-1 flex flex-col ' style={{backgroundColor:"",width:"75%" , height: "95vh",overflowY:"scroll",overflowY:"scroll"}}>
      <Navbar/>
       
       <section style={{ marginLeft: "8px", padding: '10px',height:"95vh",overflowY:"scroll"}}>
        
        
      {link}

      

       </section>
     
    
    </section>
    </div>

  );
}

export default Left
