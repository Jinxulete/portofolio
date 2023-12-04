import React,{ useState } from 'react'
import laravel from '/images/laravel_icon.png';
import github from '/images/github.svg';
import css from '/images/css3-original.svg';
import html from '/images/html5.svg';
import npm from '/images/npm.svg';
import javascript from '/images/javascript.svg';
import react from '/images/react.svg';
import spn from '/images/spn.png'
import blogstartech from '/images/blogstartech.png';
import facecards from '/images/facecards.jpeg';
import enjoee from '/images/enj.png';
import ea from '/images/ea.png';
import postman from '/images/postman.svg';
import selenium from '/images/selenium.svg';

 function WorkXP() {

  return (
    <div id='workxp-container' className='container container-cont workxp-container'>
        <p className='ptitle-p'>Work Experience</p>

        <ul className='workexp-ul'>
          <li>
            <div className='work-exp-ul-div'>
              <span>2023 - present</span>
              <span>Front-end Web Developer</span>
            </div>
            <div>
              <span>Remote</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2022 - 2023</span>
              <span>QA Testing</span>
            </div>
            <div>
              <span>Remote</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2019 - 2020</span>
              <span>Critical Support Administrator</span>
            </div>
            <div>
              <span>Hybrid</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2017 - 2019</span>
              <span>QA Testing </span>
            </div>
            <div>
              <span>Office</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2016 - 2017</span>
              <span>QA Testing </span>
            </div>
            <div>
              <span>Office</span>
            </div>
          </li>

        </ul>


        <p className='ptitle-p ctim-title'>Cool things i've made</p>

        <div className='mywork-ctim-div'>
          <div className='mywork-box-project'>
            <a href='https://www.sigurantapenet.ro/' target='_blank'>
              <img className='mywork-project-img' src={spn} alt='SigurantaPeNet'/>
            </a>
            <div className='mywork-exp-sect'>
            <span>A platform build for online courses teaching employes to dive Safe on the internet</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={html} alt='html5'/>
            <img src={css} alt='css3-original'/>
            <img src={javascript} alt='javascript'/>
            <img src={react} alt='react'/>
            <img src={laravel} alt='Laravel'/>
            <img src={npm} alt='npm'/>
            
            </div>
            <p>Front-end</p>
            </div>
          </div>

          <div className='mywork-box-project'>
            <a href='https://blog.startechteam.ro/' target='_blank'>
              <img className='mywork-project-img' src={blogstartech} alt='StarTechTeam'/>
            </a>
            <div className='mywork-exp-sect'>
            <span>A News blog filled with information and experience of Startechteam</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={html} alt='html'/>
            <img src={css} alt='css'/>
            <img src={laravel} alt='Laravel'/>
            <img src={npm} alt='npm'/>
            </div>

            <p>Front-end</p>
            </div>
          </div>

          <div className='mywork-box-project'>
            <a href='https://play.google.com/store/apps/details?id=com.eventmanager.android.joee' target='_blank'>
              <img className='mywork-project-img' src={enjoee} alt='enjoee.jpeg'/>
            </a>
            <div className='mywork-exp-sect'>
            <span>Enjoee- Android & Apple App build to Create Events and invite people</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={postman} alt='Postman'/>
            <img src={selenium} alt='Selenium'/>
            
            </div>

            <p>QA Testing</p>
            </div>
          </div>


          <div className='mywork-box-project'>
            <a href='https://www.payscout.com/' target='_blank'> 
              <img className='mywork-project-img' src={facecards} alt='facecards.jpg'/>
            </a>
            <div className='mywork-exp-sect'>
            <span>PAYSCOUT- A payment platform build for transactions</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={postman} alt='Postman'/>
            <img src={selenium} alt='Selenium'/>
            </div>

            <p>QA Testing</p>
            </div>
          </div>

          <div className='mywork-box-project'>
            <a href='https://www.ea.com/' target='_blank'>
              <img className='mywork-project-img' src={ea} alt='ea.png'/>
            </a>
            <div className='mywork-exp-sect'>
            <span>E.A. GAMES - Creation games on diffrent platforms like XP0, PS3, PS4 & PC</span>
            <div className='mywork-exp-sect-tehn'>
            <img src={postman} alt='Postman'/>
            <img src={selenium} alt='Selenium'/>
            </div>

            <p>QA Testing</p>
            </div>
          </div>
        </div>
    </div>
  )
 }


 export default WorkXP;