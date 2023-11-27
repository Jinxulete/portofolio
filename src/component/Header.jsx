import React,{ useState } from 'react'
import logo from '/images/logo.png';

 function Header() {

  return (
    <div id='header-container' className='header-container'>
        <img src={logo} alt='Logo'/>
        <div className="header-nav">
          <a href='/'>Home</a>
          <a href='#about-container'>About</a>
          <a href='#skills-container'>Skills</a>
          <a href='#workxp-container'>Cool things i've made</a>
          <a href='#getintouch-container'>Contact</a>
        </div>
        </div>
  )
 }


 export default Header;