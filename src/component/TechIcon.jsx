const imageIcons = {
  HTML5: '/images/html5.svg',
  CSS: '/images/css3-original.svg',
  SCSS: '/images/scss.svg',
  'Bootstrap 5': '/images/bootstrap.svg',
  Laravel: '/images/laravel_icon.png',
  Git: '/images/git.svg',
  npm: '/images/npm.svg',
  Selenium: '/images/selenium.svg',
  Postman: '/images/postman.svg',
  RDM: '/images/rdm.png',
  Nagios: '/images/nagios.svg',
  JavaScript: '/images/javascript.svg',
  React: '/images/react.svg',
  ConfigCat: '/images/configcat.png',
}

const monogramIcons = {
  Cypress: { label: 'cy', color: '#1f2937' },
  MySQL: { label: 'SQL', color: '#00758f' },
  Konektive: { label: 'K', color: '#6d28d9' },
}

function HubSpotIcon() {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="HubSpot" title="HubSpot">
      <circle cx="50" cy="50" r="46" fill="#ff7a59" />
      <circle cx="50" cy="51" r="12" fill="#fff" />
      <circle cx="50" cy="22" r="7" fill="#fff" />
      <circle cx="76" cy="64" r="7" fill="#fff" />
      <circle cx="24" cy="70" r="7" fill="#fff" />
      <path d="M50 39V29M60 57l10 5M40 59l-11 7" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function OpenSearchIcon() {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="OpenSearch" title="OpenSearch">
      <circle cx="43" cy="43" r="25" fill="none" stroke="#2563eb" strokeWidth="12" />
      <path d="M61 61L84 84" stroke="#16a3b6" strokeWidth="12" strokeLinecap="round" />
    </svg>
  )
}

function TwilioIcon() {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Twilio" title="Twilio">
      <circle cx="50" cy="50" r="43" fill="#f22f46" />
      <circle cx="50" cy="50" r="31" fill="#fff" />
      <circle cx="40" cy="40" r="7" fill="#f22f46" />
      <circle cx="60" cy="40" r="7" fill="#f22f46" />
      <circle cx="40" cy="60" r="7" fill="#f22f46" />
      <circle cx="60" cy="60" r="7" fill="#f22f46" />
    </svg>
  )
}

function TechIcon({ name }) {
  if (imageIcons[name]) {
    return <img src={imageIcons[name]} alt={name} title={name} />
  }

  if (name === 'HubSpot') return <HubSpotIcon />
  if (name === 'OpenSearch') return <OpenSearchIcon />
  if (name === 'Twilio') return <TwilioIcon />

  const icon = monogramIcons[name] || { label: name.slice(0, 2), color: '#374151' }

  return (
    <svg viewBox="0 0 100 100" role="img" aria-label={name} title={name}>
      <circle cx="50" cy="50" r="46" fill={icon.color} />
      <text
        x="50"
        y="57"
        fill="#fff"
        fontFamily="Roboto, Arial, sans-serif"
        fontSize={icon.label.length > 2 ? 28 : 38}
        fontWeight="700"
        textAnchor="middle"
      >
        {icon.label}
      </text>
    </svg>
  )
}

export default TechIcon
