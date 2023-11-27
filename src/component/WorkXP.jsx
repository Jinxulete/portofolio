import React,{ useState } from 'react'
import nature from '/images/nature.jpg';
import laravel from '/images/laravel_icon.png';
import github from '/images/github.svg';
import css from '/images/css3-original.svg';
import html from '/images/html5.svg';
import npm from '/images/npm.svg';

 function WorkXP() {

  return (
    <div id='workxp-container' className='container container-cont workxp-container'>
        <p className='ptitle-p'>Work experience</p>

        <ul className='workexp-ul'>
          <li>
            <div className='work-exp-ul-div'>
              <span>2023 - present</span>
              <span>Front-end</span>
            </div>
            <div>
              <span>Remote</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2023 - present</span>
              <span>Front-end</span>
            </div>
            <div>
              <span>Remote</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2023 - present</span>
              <span>Front-end</span>
            </div>
            <div>
              <span>Remote</span>
            </div>
          </li>

        </ul>


        <p className='ptitle-p ctim-title'>Cool things i've made</p>

        <div className='mywork-ctim-div'>
          <div className='mywork-box-project'>
            <a href='#'>
              <img className='mywork-project-img' src={nature} alt=''/>
            </a>
            <div className='mywork-exp-sect'>
            <span>agagasgas asgagsa gasgag asga gsa gasg asgalgkagas agagkasgag as;lasgas agasgas a</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={laravel} alt='Laravel'/>
            <img src={github} alt='github.svg'/>
            <img src={css} alt='css3-original.svg'/>
            <img src={html} alt='html5.svg'/>
            <img src={npm} alt='npm.svg'/>
            </div>

            <p>Front end</p>
            </div>
          </div>

          <div className='mywork-box-project'>
            <a href='#'>
              <img className='mywork-project-img' src={nature} alt=''/>
            </a>
            <div className='mywork-exp-sect'>
            <span>agagasgas asgagsa gasgag asga gsa gasg asgalgkagas agagkasgag as;lasgas agasgas a</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            </div>

            <p>Front end</p>
            </div>
          </div>

          <div className='mywork-box-project'>
            <a href='#'>
              <img className='mywork-project-img' src={nature} alt=''/>
            </a>
            <div className='mywork-exp-sect'>
            <span>agagasgas asgagsa gasgag asga gsa gasg asgalgkagas agagkasgag as;lasgas agasgas a</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            </div>

            <p>Front end</p>
            </div>
          </div>


          <div className='mywork-box-project'>
            <a href='#'>
              <img className='mywork-project-img' src={nature} alt=''/>
            </a>
            <div className='mywork-exp-sect'>
            <span>agagasgas asgagsa gasgag asga gsa gasg asgalgkagas agagkasgag as;lasgas agasgas a</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            </div>

            <p>Front end</p>
            </div>
          </div>

          <div className='mywork-box-project'>
            <a href='#'>
              <img className='mywork-project-img' src={nature} alt=''/>
            </a>
            <div className='mywork-exp-sect'>
            <span>agagasgas asgagsa gasgag asga gsa gasg asgalgkagas agagkasgag as;lasgas agasgas a</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            <img src={laravel} alt='Laravel'/>
            </div>

            <p>Front end</p>
            </div>
          </div>
        </div>
    </div>
  )
 }


 export default WorkXP;