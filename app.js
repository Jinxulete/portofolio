

const autotyper = require('autotyper').default;

    
    document.addEventListener("DOMContentLoaded",()=>{
        const example = Object.create(autotyper);
    const element = document.querySelector('.signature');
    const options = {
      text: 'Emanoil Oriana Elena.',
    };
     
    example.init(element, options);
    console.log("orice");
    })