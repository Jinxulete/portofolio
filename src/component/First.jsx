import React,{ useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import triangle from '/images/triangle-v.png';



 function First() {
  const [displayh2, setDisplayh2] = useState(false);

    useEffect(() => {
        let cards = document.querySelectorAll(".card");
        let perspectiveElement = document.getElementById("perspective");

        cards.forEach(function(card) {
            let img = card.querySelector("img");
            let paragraph = card.querySelector("p");

            card.addEventListener("mousemove", function(event) {
                let cardRect = card.getBoundingClientRect();
                let cardCenterX = cardRect.left + cardRect.width / 2;
                let cardCenterY = cardRect.top + cardRect.height / 2;

                let rotateX = -(event.clientY - cardCenterY) / 10;
                let rotateY = -(event.clientX - cardCenterX) / 30;

                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                img.style.transform = `translateX(${rotateY}px) translateY(${rotateX}px)`;
                paragraph.style.transform = `translateX(${rotateY}px) translateY(${rotateX}px)`;
            });

            card.addEventListener("mouseleave", function() {
                card.style.transform = "";
                img.style.transform = "";
                paragraph.style.transform = "";
            });
        });

        setTimeout(() => {
          setDisplayh2(true);
        }, 2000);


    },[]);

  return (
    <div id='first-container'>
      <div className='container container-cont first-container'>
          <h3><span>Emanoil Oriana Elena</span></h3>

          <div className="first-cont-h2">
            {displayh2 && 
            (
              <FadeIn>
                  <h2>The Digital Alchemist</h2>
              </FadeIn>
            )
            }
          </div>
            
          <FadeIn>
          <div id='perspective' className='first-tri-scrolldown'>
            <a href='#about-container' className='card'>
              <img src={triangle} alt=''/>
              <p>Dig into my universe</p>
            </a>
          </div>
          </FadeIn>
          {/* <div className="heart">
          <div className="title">
            Let's get <br />
            Started
          </div>
          <span>❤️</span>

          <span className="heart-anim heart-1">❤️</span>
          <span className="heart-anim heart-2">❤️</span>
          <span className="heart-anim heart-3">❤️</span>
          <span className="heart-anim heart-4">❤️</span>
          <span className="heart-anim heart-5">❤️</span>
          <span className="heart-anim heart-6">❤️</span>
          <span className="heart-anim heart-7">❤️</span>
          <span className="heart-anim heart-8">❤️</span> */}


        {/* </div> */}
      </div>
    </div>
    
  )
 }


 export default First;