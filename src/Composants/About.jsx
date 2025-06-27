import React from 'react'
import './About.css';

function About() {
  return (
    <div className='Main-About'>
        <div className='Image-About'>
            < img src='/Image-About.png'alt='photo de montagne'/>
          <div className='About-grid'>
            <div className='About-card'>
                <div className='dropdown'>
                    <h6>Fiabilité </h6>
                    <div className='dropdown-arrow'>
                        <img src='/Arrow-up.png' alt='flèche vers le haut'/>
                    </div>
                </div>
                 <div className='About-card'>
                 <div className='dropdown'>
                    <h6>Respect </h6>
                    <div className='dropdown-arrow'>
                        <img src='/Arrow-up.png' alt='flèche vers le haut'/>
                    </div>
                    </div>
                    
                </div>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default About
