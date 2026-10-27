import TechIcon from './TechIcon'

const skillGroups = [
  {
    title: 'Automation & Testing',
    skills: ['Cypress', 'Selenium', 'Postman'],
  },
  {
    title: 'Front-End Development',
    skills: ['HTML5', 'CSS', 'SCSS', 'Bootstrap 5', 'React', 'Laravel'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'npm', 'RDM', 'Nagios', 'MySQL', 'HubSpot', 'Konektive', 'OpenSearch', 'Twilio', 'ConfigCat'],
  },
]



 function Skills() {

  return (
    <div id='skills-container' className='container container-cont skills-container'>
        <p className='ptitle-p reveal-on-scroll'>Skills</p>

         <div className='skill-groups'>
          {skillGroups.map((group) => (
            <section
              className='skill-group reveal-on-scroll'
              key={group.title}
              style={{ '--reveal-delay': `${skillGroups.indexOf(group) * 100}ms` }}
            >
              <h3>{group.title}</h3>
              <div className='skills-row-items'>
                {group.skills.map((skill) => (
                  <div className='skrow-item-box' key={skill}>
                    <TechIcon name={skill} />
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
         </div>

        </div>
  )
 }


 export default Skills;
