import React from 'react'
import Up from './leftup/up1'
import Down from './down/down'
import Navbar from './navbars/navbar'
import Imp from './right/Imp'


const Left = () => {


  
  return (
    <div className='flex flex-row'>
    <div className='flex flex-col'>
      <Up/>
      <Down/>
    </div>
    <section className='flex-1 flex flex-col ' style={{backgroundColor:"",width:"75%" , height: "95vh",overflowY:"scroll",overflowY:"scroll"}}>
      <Navbar/>
       
       <section>


      <Imp/>

       </section>
     
    
    </section>
    </div>

  );
}

export default Left
