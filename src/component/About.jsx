import FadeIn from 'react-fade-in';
import splash from '/images/splashgold.png';

 function About() {

  return (
    <div id='about-container'>
      <div className='container container-cont about-container reveal-on-scroll'>
        <img className='about-splash' src={splash} alt="" aria-hidden='true'/>
        <FadeIn>
        <p>
          I am a <span>QA Automation &amp; Manual Engineer</span> with 7+ years of experience, in{' '}
          <i className="fa-solid fa-heart about-heart" aria-hidden='true'></i> with uncovering the unseen and turning imperfections into
          perfection. With a strong eye for detail and a passion for quality, I bring digital experiences to life
          through testing, crafting confidence in every release.
        </p>
      </FadeIn>
      </div>
    </div>
  )
 }


 export default About;
