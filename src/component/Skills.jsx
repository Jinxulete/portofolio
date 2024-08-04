import React,{ useState } from 'react'
import laravel from '/images/laravel_icon.png';
import github from '/images/github.svg';
import css from '/images/css3-original.svg';
import html from '/images/html5.svg';
import npm from '/images/npm.svg';
import bootstrap from '/images/bootstrap.svg';
import selenium from '/images/selenium.svg';
import postman from '/images/postman.svg';
import scss from '/images/scss.svg';
import git from '/images/git.svg';
import javascript from '/images/javascript.svg';
import react from '/images/react.svg';
import rdm from '/images/rdm.png';
import nagios from '/images/nagios.svg';



 function Skills() {

  return (
    <div id='skills-container' className='container container-cont skills-container'>
        <p className='ptitle-p'>Skills</p>

         <p className='ptitle-p-subtitle'>I've been workinG with</p>
         <div className='skills-row-items'>
          <div className='skrow-item-box'>
            <img src={laravel} alt=''/>
            <p>HTML5</p>
          </div>
          <div className='skrow-item-box'>
            <img src={css} alt=''/>
            <p>CSS</p>
          </div>
          <div className='skrow-item-box'>
            <img src={scss} alt=''/>
            <p>SCSS</p>
          </div>
          <div className='skrow-item-box'>
            <img src={bootstrap} alt=''/>
            <p>Bootstrap 5</p>
          </div>
          <div className='skrow-item-box'>
            <img src={laravel} alt=''/>
            <p>Laravel</p>
          </div>
          <div className='skrow-item-box'>
            <img src={git} alt=''/>
            <p>Git</p>
          </div>
          <div className='skrow-item-box'>
            <img src={npm} alt=''/>
            <p>npm</p>
          </div>
          <div className='skrow-item-box'>
            <img src={selenium} alt=''/>
            <p>Selenium</p>
          </div>
          <div className='skrow-item-box'>
            <img src={postman} alt=''/>
            <p>Postman</p>
          </div>
          <div className='skrow-item-box'>
            <img src={rdm} alt='RDM'/>
            <p>RDM</p>
          </div>
          <div className='skrow-item-box'>
            <img src={nagios} alt='Nagios'/>
            <p>Nagios</p>
          </div>
         </div>

         <p className='ptitle-p-subtitle'>Familiar with</p>
         <div className='skills-row-items'>
          <div className='skrow-item-box'>
            <img src={javascript} alt=''/>
            <p>Javascript</p>
          </div>
          <div className='skrow-item-box'>
            <img src={react} alt=''/>
            <p>React Hooks</p>
          </div>
          </div>

        </div>
  )
 }


 export default Skills;