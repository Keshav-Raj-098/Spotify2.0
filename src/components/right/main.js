import React from 'react'
import { useState } from 'react'
import Card1 from './card1'


const Main = (props) => {
  const [hover, sethover] = useState(false);

  const styles = {

    container: {
      textDecoration: hover ? "underline" : "none",
      cursor: hover && "pointer",
      fontSize: "21px"
    }
  }

  const { name1, name2, name3, name4, name5 
  , br,title,logo1,logo2,logo3,logo4,logo5,
  dis1,dis2,dis3,dis4,dis5} = props


  return (
    <section
      style={{
        backgroundColor: "#1d1d1d", width: "75vw",
        marginLeft: "8px", padding: '10px'}}>

      <section className='flex flex-row justify-between mb-5 mt-7'>

        <span className='font-bold' style={styles.container}
          onMouseEnter={() => sethover(true)}
          onMouseLeave={() => sethover(false)}

        >{title}</span>
        <span style={{ fontSize: "13px", color: "#b3b3b3" }}>Show all</span>

      </section>

      <section className='flex flex-row gap-4'>
        <Card1 name={name1} src={logo1} desc={dis1} borderradius={br} linkk={name1} />
        <Card1 name={name2} src={logo2} desc={dis2} borderradius={br}/>
        <Card1 name={name3} src={logo3} desc={dis3} borderradius={br} />
        <Card1 name={name4} src={logo4} desc={dis4} borderradius={br}/>
        <Card1 name={name5} src={logo5} desc={dis5} borderradius={br}/>
      </section>
    </section>
  )
}

export default Main
