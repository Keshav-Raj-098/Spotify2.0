import React from 'react'
import './down.css'
import x from "../../asset/x.svg"
import y from "../../asset/y.svg"
import Card from './card'

const down = () => {
    return (
        <>
        <section className="down">


        <section className=' flex flex-row justify-start align-middle gap-10 ' style={{paddingLeft:"25px",  marginBottom:'25px'}}>
            <section className='flex flex-row  gap-3'>
                <img src={x} alt="" />
                <span>Your Library</span>
            </section>
            <img src={y} alt="" />
        </section>
    
         <section className='cards'>

         <Card title="Create Your Playlist"  desc="It's easy,we will help you" buttext="Create playlist"/>

         <Card title="Let's find some podcasts to follow"  desc="We'll keep you updated on new episodes" buttext="Browse Posdcst"/>


            </section>

            <section className="footer">

             <section className="flex mt-5">
                <span className='me-5'>legal </span>
                <span  className='flex-2'>saftey & privacy center</span>
             </section>
             <section className="flex mt-5">
                <span className='me-3'>Privacy Policy </span>
                <span className='me-3'  >cookies</span>
                <span className='me-3'>About Ads </span>
             </section>
             <section className='mt-5'>
                <span className='me-5'>legal </span>
                <span   className='me-5'>saftey & privacy center</span>
             </section>
         </section>



















        </section>








    </>
  );
}

export default down
