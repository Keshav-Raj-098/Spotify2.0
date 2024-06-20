"use client"
const deadline ={
    date:"1",
    month:"7",
    year:"2024",
    hr:'15',
    min:'0'
    
    
  }
  function getDaysInMonth(month, year) {
    // Month is 0-based, January is 0, February is 1, and so on.
    return new Date(year, month, 0).getDate();
}


  const date = new Date();
  const currentdate  =  date.getDate(); 
  const currentmonth  =  date.getMonth() + 1; 
  const currentyear  =  date.getFullYear(); 
  const hr = date.getHours();
  const  min= date.getMinutes();
  
  var daysremaining = deadline.date - currentdate;
  var monthremaining = deadline.month - currentmonth;
  var yearremaining=deadline.year - currentyear;
  var hrremaining = deadline.hr - hr;
  var minremaining = deadline.min - min;
  var secremaining = date.getSeconds();
  
  
     if(yearremaining > 0){

      daysremaining = null;
      hrremaining = null;
      minremaining = null;
      secremaining = null;


      let x = parseInt(12-currentmonth) + parseInt(deadline.month) +  parseInt(yearremaining - 1) * 12;
       yearremaining = Math.floor(x/12); 
       monthremaining = x % 12 ;
      if(yearremaining  == 0){yearremaining = null;}
     }




   else if(yearremaining == 0){
   
     yearremaining = null;
     monthremaining = null;


     if(deadline.month>=currentmonth){

       let z = 0;
       
       let a = 0;

       if((deadline.month - currentmonth)>1){

         for (let i = currentmonth+1; i <deadline.month;i++){z = z + getDaysInMonth(i ,currentyear);}

          a  =( getDaysInMonth(currentmonth,currentyear) - parseInt(currentdate)) + parseInt(deadline.date)  + z;
        }
         else if(deadline.month == currentmonth){
          let a = daysremaining; 
        } 



         let totalhr = (a * 24) + parseInt(24 - hr) + parseInt(deadline.hr);
         
         if(minremaining <0){
           totalhr--;
           minremaining = parseInt(60-min) + parseInt(deadline.min);
        }
        
        daysremaining = Math.floor(totalhr/24);
        hrremaining = (totalhr % 24)  ;
        // minremaining = minremaining - 3;
      }}

            
    else{


      daysremaining = null;
      hrremaining = null;
      minremaining = null;
      secremaining = null;
      yearremaining = null;

      
    }


      var FinalDate = ( yearremaining + monthremaining + daysremaining+
      hrremaining+minremaining)
      
      
      
      export{ yearremaining,monthremaining,daysremaining,
        hrremaining,minremaining,secremaining,FinalDate }
        

                
          // console.log(deadline.hr,hr,hrremaining);
          
      