import React from 'react';
import './AboutUs.scss';
import image from '../assets/img2.jpg'

const AboutUs = () => {
  
  return (
    <div className="about-us">
      <div
        className="about-us__image"
        style={{backgroundImage: `url(${image})`}}>
      </div>
      <div className="about-us__text">
  
      </div>
    </div>
  )
}

export default AboutUs;