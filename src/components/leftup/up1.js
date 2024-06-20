import React from 'react'
import './up1.css'
import spot from '../../asset/spot.svg'
import home from '../../asset/home.svg'
import search from '../../asset/search.svg'

const up1 = () => {
  return (  


    <>
    
    <section className='first'>
      
   <span className='my-3'><img src={spot}/></span>


   <section className='flex flex-row'><img src={home}/>
   <span className='my-3 mx-6'  >Home</span></section>


   <span className='flex'><img src={search} height={25} width={25}/><span
   
   className='my-3 mx-6 font-bold color'  >Search</span></span>








    </section>
    </>
  );
}

export default up1
