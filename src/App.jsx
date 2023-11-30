import React,{ useEffect, useState } from 'react'
 import First from './component/First';
 import About from './component/About';
 import WorkXP from './component/WorkXP';
 import Skills from './component/Skills';
 import Getintouch from './component/Getintouch';
 import Header from './component/Header';
 


 function App() {

  useEffect(() => {
    
  },[]);
  
  function goTop() {
    document.getElementById('header-container').scrollIntoView();
  }

  return (
    <div className="container-fluid">
      <Header/>
      <First/>
      <About/>
      <WorkXP/>
      <Skills/>
      <Getintouch/>
      
      <a href='#' onClick={goTop} className='scrolltotop-btn'>
        <i className="fa-solid fa-chevron-up"></i>
        <span>Go top</span>
        </a>

    </div>
  )
 }


 export default App;