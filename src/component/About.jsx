import React,{ useState } from 'react'
import FadeIn from 'react-fade-in';

 function About() {

  return (
    <div id='about-container'>
      <div className='container container-cont about-container'>
        <FadeIn>
        <p> I am a <span>Front-end developer</span> in <i className="fa-regular fa-heart"></i> with programming and <span>passionate</span> about creating an
      amazing <span>user-experience</span>. I have a <span>strong knowledge</span> of the inner workings of the web
      and the ability to <span>bring websites</span> to <span>life</span> from a mock-up to a fully <span>functional web app</span>.
      </p>
      </FadeIn>
      </div>
    </div>
  )
 }


 export default About;