import React from 'react';
import home1 from '../img/home1.png';
const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We Work to Make</h2>
          </div>
          <div className='hide'>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </div>
          <div className='hide'>
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photograpy or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </div>
      <div className='image'>
        <img src={home1} alt='' />
      </div>
    </div>
  );
};

export default AboutSection;
