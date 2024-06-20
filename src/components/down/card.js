import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <div className='card flex flex-col justify-start'>
        
     <h3 className=' title text-bold '>{props.title}</h3>

     <p className='desc'>{props.desc}</p>

     <button className='btext button'>{props.buttext} </button>
      

    </div>
  )
}

export default card
