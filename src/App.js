import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Left from './components/left'
import Navbar from './components/navbars/navbar';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Card from './pages/card'
import Timer from './components/timer/timer'

const App = () => {
 
  // const [link,setlink] =useState() ;

 const  grow = () => {
    return(
      <>
      <div>Hello my friends</div>
      <div>kaise hai aaplog</div>
      </>
    )
  }

  console.log(grow);
  

  return (
    
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Timer/>} />
    //     <Route path="/login" element={<Login/>}/>
    //     <Route path="/dashboard" element={<Dashboard/>}/>
    //     <Route path="/card" element={<Card/>}/>
        
    //   </Routes>
    // </Router>
        
        // put the hr in 24-hr format
        <Timer deadlinedate={20} month={6} year={2024} hour={11} minutes={20}
        
        newscript={grow()}
        />
  );
};

export default App;
