import { useEffect, useRef } from 'react'
import TechIcon from './TechIcon'

const qaTechnologies = [
  'Cypress',
  'Postman',
  'JavaScript',
  'MySQL',
  'Git',
  'HubSpot',
  'Konektive',
  'OpenSearch',
  'Twilio',
]

const projectRows = [
  [
    {
      name: 'Member Portal FEM',
      link: 'https://dev.member.femexcel.com',
      image: '/images/member-portal-fem.jpeg',
      description:
        'A patient-facing healthcare portal designed for women to complete medical intake forms, provide health information, and access prescription-related services. Desktop & Mobile.',
      technologies: qaTechnologies,
      role: 'QA Automation & Manual Engineer',
      screenshot: true,
    },
    {
      name: 'Member Portal Male',
      link: 'https://member.maleexcel.com',
      image: '/images/member-portal-male.jpeg',
      description:
        'A patient-facing healthcare portal for men to complete medical questionnaires, submit health information, and access prescription-related services. Desktop & Mobile.',
      technologies: qaTechnologies,
      role: 'QA Automation & Manual Engineer',
      screenshot: true,
    },
  ],
  [
    {
      name: 'Male Excel',
      link: 'https://go.maleexcel.com/payment/bhrt?formId=MIP-H2',
      image: '/images/male-excel.jpeg',
      description:
        'Male patient intake data covering questionnaire responses and medical information used for clinical review and prescription workflows. Desktop & Mobile.',
      technologies: qaTechnologies,
      role: 'QA Automation & Manual Engineer',
      screenshot: true,
    },
    {
      name: 'Fem Excel',
      link: 'https://go.femexcel.com/f/payment/fbhrt?formId=MIP-FHA&productId=1420&aff_id=HSEMMD1B',
      image: '/images/fem-excel.jpeg',
      description:
        'Female patient intake data covering questionnaire responses and medical information used for clinical review and prescription workflows. Desktop & Mobile.',
      technologies: qaTechnologies,
      role: 'QA Automation & Manual Engineer',
      screenshot: true,
    },
  ],
  [
    {
      name: 'MEMO',
      link: 'https://memologin.com',
      image: '/images/memo.jpeg',
      description:
        'A healthcare platform used by doctors to manage patient information, conduct consultations, document medical visits, and prescribe medications. Desktop & Mobile.',
      technologies: qaTechnologies,
      role: 'QA Automation & Manual Engineer',
      screenshot: true,
    },
    {
      name: 'SigurantaPeNet',
      link: 'https://www.sigurantapenet.ro/',
      image: '/images/spn.png',
      description: 'An online learning platform that teaches employees how to stay safe on the internet.',
      technologies: ['HTML5', 'CSS', 'JavaScript', 'React', 'Laravel', 'npm'],
      role: 'QA Automation - Manual Engineer & Front-End Web Developer',
    },
    {
      name: 'StarTechTeam',
      link: 'https://blog.startechteam.ro/',
      image: '/images/blogstartech.png',
      description: 'A news blog featuring technical information and experience from the StarTechTeam community.',
      technologies: ['HTML5', 'CSS', 'Laravel', 'npm'],
      role: 'QA Automation - Manual Engineer & Front-End Web Developer',
    },
  ],
  [
    {
      name: 'Enjoee',
      link: 'https://play.google.com/store/apps/details?id=com.eventmanager.android.joee',
      image: '/images/enj.png',
      description: 'An Android and iOS application for creating events and inviting people.',
      technologies: ['Postman', 'Selenium'],
      role: 'QA Automation & Manual Engineer',
    },
    {
      name: 'PAYSCOUT',
      link: 'https://www.payscout.com/',
      image: '/images/facecards.jpeg',
      description: 'A payment platform built to process transactions.',
      technologies: ['Postman', 'Selenium'],
      role: 'QA Automation & Manual Engineer',
    },
    {
      name: 'E.A. GAMES',
      link: 'https://www.ea.com/',
      image: '/images/ea.png',
      description: 'Game testing across platforms including Xbox, PlayStation and PC.',
      technologies: ['Postman', 'Selenium'],
      role: 'QA Automation & Manual Engineer',
    },
  ],
]

const projects = projectRows.reduce((items, row) => items.concat(row), [])

function ProjectCard({ project, index }) {
  const projectType = project.role.includes('Front-End') ? 'QA + Front-End' : 'QA'
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return undefined

    if (!('IntersectionObserver' in window)) {
      card.classList.add('is-card-scanned')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        card.classList.toggle('is-card-scanned', entry.isIntersecting && entry.intersectionRatio >= 0.35)
      },
      { threshold: [0, 0.35], rootMargin: '-6% 0px -6% 0px' },
    )

    observer.observe(card)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`project-card-reveal reveal-on-scroll${projectType === 'QA + Front-End' ? ' project-card-reveal--hybrid' : ' project-card-reveal--qa'}`}
      style={{
        '--reveal-delay': `${(index % 3) * 90}ms`,
        '--scan-delay': `${(index % 3) * 140}ms`,
      }}
    >
    <div className="mywork-box-project">
      <a className="project-image-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
        <img
          className={`mywork-project-img${project.screenshot ? ' mywork-project-img--screenshot' : ''}`}
          src={project.image}
          alt={project.name}
          loading="lazy"
          decoding="async"
        />
        <span className="project-scan-status" aria-hidden="true">
          <span>✓</span>
          Passed
        </span>
      </a>
      <div className="mywork-exp-sect">
        <div className="project-card-labels">
          <h3>{project.name}</h3>
          <span className="project-type-badge">{projectType}</span>
        </div>
        <span className="project-description">{project.description}</span>
        <div className="mywork-exp-sect-tehn">
          {project.technologies.map((technology) => (
            <TechIcon key={technology} name={technology} />
          ))}
        </div>
        <p className="project-role">{project.role}</p>
      </div>
    </div>
    </div>
  )
}

 function WorkXP() {

  return (
    <div id='workxp-container' className='container container-cont workxp-container'>
        <p className='ptitle-p reveal-on-scroll'>Work Experience</p>

        <ul className='workexp-ul reveal-on-scroll'>
          <li className='current-role'>
            <div className='work-exp-ul-div'>
              <span>2024 - present</span>
              <span>QA Automation &amp; Manual Engineer</span>
            </div>
            <div>
              <span>Hybrid</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2023 - 2024</span>
              <span>QA Automation - Manual Engineer &amp; Front-End Web Developer</span>
            </div>
            <div>
              <span>Remote</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2022 - 2023</span>
              <span>QA Automation &amp; Manual Engineer</span>
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
              <span>QA Automation &amp; Manual Engineer</span>
            </div>
            <div>
              <span>Office</span>
            </div>
          </li>

          <li>
            <div className='work-exp-ul-div'>
              <span>2016 - 2017</span>
              <span>QA Automation &amp; Manual Engineer</span>
            </div>
            <div>
              <span>Office</span>
            </div>
          </li>

        </ul>


        <p id='projects-container' className='ptitle-p ctim-title reveal-on-scroll'>Projects I've Built &amp; Tested</p>

        <div className='mywork-ctim-div'>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
    </div>
  )
 }


 export default WorkXP;
