import React,{ useState } from 'react'
import eye from '/images/eye.svg';
import git from '/images/github.svg';
import linkedin_circle from '/images/linkedin-circle.svg';




 function Getintouch() {

  return (
    <div id='getintouch-container' className='container container-cont getintouch-container'>
         <p className='ptitle-p'>Get in touch</p>

          <div className='git-wrapper'>
            <p className='gitstitle-bold'>Hello!</p>
            <p className='git-stitle'>You can <span>reach me</span> out at <a id='mailto-a' href='mailto:oriana.emanoil@gmail.com'>oriana.emanoil@gmail.com</a> </p>
          
          <p className='git-stitle'>via social media</p>
            <div className='git-wrpsocial'>
          
              <div className='git-wrpsocial-icons'>
                  <a href='https://github.com/Jinxulete'> <img src={git} fill='red' alt='Git'/></a>
                  <a href='https://www.linkedin.com/in/oriana-elena-emanoil-cosma-338487111/'> <img src={linkedin_circle} alt='Linkedin'/></a>
              </div>
            </div>
            <p className='git-stitle'>or download my resume</p>
            <a className='git-view-a' target='_blank' href='./EmanoilOrianaCV.pdf'>View resume <img src={eye} alt='view resume'/></a>

          </div>

      <p className='credits-bottom'>oriana @ 2023 </p>

    </div>
  )
 }


 export default Getintouch;