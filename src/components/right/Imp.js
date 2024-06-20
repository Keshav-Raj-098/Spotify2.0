import React from 'react'
import Main from './main'
import pritam from '../../asset/pritam.jpeg'
import arjit from '../../asset/arjit.jpeg'
import rehman from '../../asset/rehman.jpeg'
import ani from '../../asset/ani.jpeg'
import vishal from '../../asset/vishal.jpeg'
import sky from '../../asset/sky.jpeg'
import animal from '../../asset/animal.jpeg'
import king from '../../asset/king.jpeg'
import moosa from '../../asset/moosa.jpeg'
import anna from '../../asset/anna.jpeg'


const Imp = () => {
  return (
    <section>

        <Main  
        title="Popular Artists"
         name1={"Pritam"}
         name2={"Arjit singh"}
         name3={"A.R Rahman"}
         name4={"Anirudh"}
         name5={"Vishal Kumar"}
         dis1={"Artist"}
         dis2={"Artist"}
         dis3={"Artist"}
         dis4={"Artist"}
         dis5={"Artist"}
         logo1={pritam}
         logo2={arjit}
         logo3={rehman}
         logo4={ani}
         logo5={vishal}
         br="50%"/>


        <Main  
        title="Popular Albums"
        logo1={sky}
         name1={"lovehotel"}
         dis1={"loveovermax"}

         logo2={animal}
         name2={"ANIMAL"}
         dis2={"Artist"}

         logo3={king}
         name3={"Ekta"}
         dis3={"Badshah"}

         logo4={moosa}
         name4={"Moosetape"}
         dis4={"Sidhu Moosewala"}

         logo5={anna}
         name5={"Avesham (orig..."}
         dis5={"Artist"}

         br="0%"/>

         
        <Main  
        title="Popular Albums"
        logo1={sky}
         name1={"lovehotel"}
         dis1={"loveovermax"}

         logo2={animal}
         name2={"ANIMAL"}
         dis2={"Artist"}

         logo3={king}
         name3={"Ekta"}
         dis3={"Badshah"}

         logo4={moosa}
         name4={"Moosetape"}
         dis4={"Sidhu Moosewala"}

         logo5={anna}
         name5={"Avesham (original..."}
         dis5={"Artist"}

         br="0%"/>
      
    </section>
  )
}

export default Imp
