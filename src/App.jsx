import { useEffect, useRef, useState } from 'react'
 import First from './component/First';
 import About from './component/About';
 import WorkXP from './component/WorkXP';
 import Skills from './component/Skills';
 import Getintouch from './component/Getintouch';
 import Header from './component/Header';
 


const qaChecks = ['Navigation', 'Content', 'Project cards', 'Responsive UI', 'Contact flow']

 function App() {

  const [qaTestState, setQaTestState] = useState('idle')
  const [qaRunId, setQaRunId] = useState(0)
  const qaTimers = useRef([])

  useEffect(() => {
    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
    const revealElements = Array.prototype.slice.call(document.querySelectorAll('.reveal-on-scroll'))
    const navButtons = Array.prototype.slice.call(document.querySelectorAll('.nav_btn'))
    const goTopButton = document.querySelector('.scrolltotop-btn')
    const requestFrame = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 16))
    const cancelFrame = window.cancelAnimationFrame || window.clearTimeout
    const sections = [
      { id: 'first-container', type: 'home' },
      { id: 'about-container', type: 'about' },
      { id: 'workxp-container', type: 'cool-things' },
      { id: 'skills-container', type: 'skills' },
      { id: 'getintouch-container', type: 'contact' },
    ]

    let revealObserver
    let animationFrame

    if (
      !prefersReducedMotion &&
      window.CSS &&
      typeof window.CSS.supports === 'function' &&
      window.CSS.supports('animation-name', 'hero-name-reveal')
    ) {
      root.classList.add('motion-ready')
    }

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
    } else if ('IntersectionObserver' in window) {
      root.classList.add('reveal-ready')
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              revealObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )
      revealElements.forEach((element) => revealObserver.observe(element))
    } else {
      revealElements.forEach((element) => element.classList.add('is-visible'))
    }

    const updateScrollEffects = () => {
      animationFrame = undefined
      const marker = Math.min(window.innerHeight * 0.35, 280)
      const scrollPosition = window.scrollY || window.pageYOffset || 0
      const scrollableDistance = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const showGoTop = scrollPosition >= scrollableDistance * 0.45
      const scrollProgress = Math.min(1, scrollPosition / scrollableDistance)
      let activeType = 'home'

      root.style.setProperty('--scroll-progress', scrollProgress)

      if (goTopButton) {
        goTopButton.classList.toggle('is-visible', showGoTop)
        goTopButton.setAttribute('aria-hidden', showGoTop ? 'false' : 'true')
        goTopButton.tabIndex = showGoTop ? 0 : -1
      }

      sections.forEach(({ id, type }) => {
        const section = document.getElementById(id)
        if (!section) return
        const bounds = section.getBoundingClientRect()
        if (bounds.top <= marker && bounds.bottom > marker) activeType = type
      })

      navButtons.forEach((button) => {
        const isActive = button.dataset.type === activeType
        button.classList.toggle('is-active', isActive)
        if (isActive) button.setAttribute('aria-current', 'page')
        else button.removeAttribute('aria-current')
      })

      if (!prefersReducedMotion) {
        const parallaxOffset = Math.max(-36, scrollPosition * -0.012)
        root.style.setProperty('--parallax-offset', `${parallaxOffset}px`)
      }
    }

    const requestScrollUpdate = () => {
      if (animationFrame !== undefined) return
      animationFrame = requestFrame(updateScrollEffects)
    }

    updateScrollEffects()
    window.addEventListener('scroll', requestScrollUpdate, { passive: true })
    window.addEventListener('resize', requestScrollUpdate)

    return () => {
      if (revealObserver) revealObserver.disconnect()
      window.removeEventListener('scroll', requestScrollUpdate)
      window.removeEventListener('resize', requestScrollUpdate)
      if (animationFrame !== undefined) cancelFrame(animationFrame)
      root.classList.remove('reveal-ready')
      root.classList.remove('motion-ready')
      root.style.removeProperty('--parallax-offset')
      root.style.removeProperty('--scroll-progress')
    }
  },[]);

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('qa-test-running', qaTestState === 'running')
    root.classList.toggle('qa-test-complete', qaTestState === 'complete')

    return () => {
      root.classList.remove('qa-test-running')
      root.classList.remove('qa-test-complete')
    }
  }, [qaTestState])

  useEffect(() => () => {
    qaTimers.current.forEach((timer) => window.clearTimeout(timer))
  }, [])

  function runQaTest() {
    qaTimers.current.forEach((timer) => window.clearTimeout(timer))
    qaTimers.current = []
    setQaRunId((currentRun) => currentRun + 1)

    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

    if (prefersReducedMotion) {
      setQaTestState('complete')
      qaTimers.current.push(window.setTimeout(() => setQaTestState('idle'), 4500))
      return
    }

    setQaTestState('running')
    qaTimers.current.push(window.setTimeout(() => setQaTestState('complete'), 4200))
    qaTimers.current.push(window.setTimeout(() => setQaTestState('idle'), 7600))
  }
  
  function goTop() {
    const scrollRoot = document.scrollingElement || document.documentElement
    const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style

    if (scrollRoot && typeof scrollRoot.scrollTo === 'function') {
      scrollRoot.scrollTo({
        top: 0,
        left: 0,
        behavior: supportsSmoothScroll ? 'smooth' : 'auto',
      })
      return
    }

    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  return (
    <div className="container-fluid">
      <Header onRunQa={runQaTest} qaTestState={qaTestState}/>
      <First/>
      <About/>
      <WorkXP/>
      <Skills/>
      <Getintouch/>

      {qaTestState !== 'idle' && (
        <div key={qaRunId} className={`qa-test-layer qa-test-layer--${qaTestState}`}>
          <div className='qa-scan-field' aria-hidden='true'>
            <span className='qa-scan-beam'></span>
            <span className='qa-caught-bug'>
              <i className='fa-solid fa-bug qa-caught-bug__icon'></i>
              <span className='qa-capture-result'>
                <i className='fa-solid fa-check'></i>
                <span>Bug catched</span>
              </span>
            </span>
            <span className='qa-mystic-particle qa-mystic-particle--one'>✦</span>
            <span className='qa-mystic-particle qa-mystic-particle--two'>✧</span>
            <span className='qa-mystic-particle qa-mystic-particle--three'>✦</span>
          </div>

          <aside className='qa-test-panel' role='status' aria-live='polite'>
            <div className='qa-test-panel__header'>
              <span className='qa-test-orb' aria-hidden='true'>
                <i className={qaTestState === 'complete' ? 'fa-solid fa-check' : 'fa-solid fa-bug'}></i>
              </span>
              <div>
                <strong>{qaTestState === 'complete' ? 'All checks passed' : 'QA test running'}</strong>
                <small>{qaTestState === 'complete' ? 'Quality assured' : 'Scanning the experience…'}</small>
              </div>
            </div>

            <ul className='qa-test-list'>
              {qaChecks.map((check, index) => (
                <li key={check} style={{ '--qa-delay': `${450 + index * 620}ms` }}>
                  <span>{check}</span>
                  <span className='qa-test-result'><i className='fa-solid fa-check'></i> Pass</span>
                </li>
              ))}
            </ul>

            <div className='qa-test-summary'>
              {qaTestState === 'complete' ? '1 bug catched • 5/5 sections passed ✨' : 'Running 5 automated checks…'}
            </div>
          </aside>
        </div>
      )}
      
      <button type='button' onClick={goTop} className='scrolltotop-btn' aria-hidden='true' tabIndex={-1}>
        <i className="fa-solid fa-chevron-up"></i>
        <span>Go top</span>
      </button>

    </div>
  )
 }


 export default App;
