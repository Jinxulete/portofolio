import React,{ useEffect } from 'react'
import logo from '/images/logo-qa.svg';

 function Header({ onRunQa, qaTestState }) {

  useEffect(() => { 

    let hamburger = document.querySelector('.hamburger');
    let mobilemenu = document.querySelector('.mobile-menu-cont');

    hamburger.addEventListener('click', function() {
      mobilemenu.classList.toggle('mobilemenu-active');
      hamburger.classList.toggle('isactive');
      document.querySelector('body').classList.toggle('fixed-body');
      });
    
    let navBtns = document.querySelectorAll('.nav_btn');

    navBtns.forEach(el => {
    
      el.addEventListener('click', (e) => {
        let btnType = e.target.getAttribute('data-type');

        document.querySelector('.mobile-menu-cont').classList.remove('mobilemenu-active');
        hamburger.classList.remove('isactive');
        document.querySelector('body').classList.remove('fixed-body');

        switch(btnType) {
          case 'home':
            document.getElementById('first-container').scrollIntoView();
            break;
          case 'about':
            document.getElementById('about-container').scrollIntoView();
            break;
          case 'skills':
            document.getElementById('skills-container').scrollIntoView();
            break;
          case 'cool-things':
            document.getElementById('workxp-container').scrollIntoView();
            break;
          case 'contact':
            document.getElementById('getintouch-container').scrollIntoView();
          break;
          default:
            return;
        }
      })
    });

  },[]);

  return (
    <div id='header-container' className='header-container'>
        <img src={logo} alt='QriAna.dev — QA portfolio'/>

        <div className='mobile-menu-cont'>
                <ul>
                    <li><button className='btn  mobnav-btn home_btn nav_btn' type='button' data-type='home'>Home</button></li>
                    <li><button className='btn  mobnav-btn about_btn nav_btn' type='button' data-type='about'>About me</button></li>
                    <li><button className='btn  mobnav-btn ctim_btn nav_btn' type='button' data-type='cool-things'>Projects</button></li>
                    <li><button className='btn  mobnav-btn skills_btn nav_btn' type='button' data-type='skills'>Skills</button></li>
                    <li><button className='btn  mobnav-btn contact_btn nav_btn' type='button' data-type='contact'>Contact</button></li>

                </ul>
           </div>


        <div className='header-actions'>
          <div className="header-nav">
            <button type='button' className='home_btn nav_btn' data-type='home'>Home</button>
            <button type='button' className='about_btn nav_btn' data-type='about'>About</button>
            <button type='button' className='ctim_btn nav_btn'  data-type='cool-things'>Projects</button>
            <button type='button' className='skills_btn nav_btn' data-type='skills'>Skills</button>
            <button type='button' className='contact_btn nav_btn' data-type='contact'>Contact</button>
          </div>

          <button
            type='button'
            className={`qa-run-button qa-run-button--${qaTestState}`}
            onClick={onRunQa}
            disabled={qaTestState === 'running'}
            aria-label={qaTestState === 'running' ? 'QA test running' : 'Run QA test'}
          >
            <i className={qaTestState === 'complete' ? 'fa-solid fa-check' : 'fa-solid fa-bug'} aria-hidden='true'></i>
            <span>{qaTestState === 'running' ? 'Testing…' : qaTestState === 'complete' ? '5/5 Passed' : 'Run QA'}</span>
          </button>

          <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
          </div>
        </div>
        <span className='header-scroll-progress' aria-hidden='true'></span>
        </div>
  )
 }


 export default Header;
