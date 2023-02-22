import React from 'react';
import './Contact.scss'
import image from '../assets/img2.jpg';

const Contact = () => {
  
  return (
    <div className="contact">
      <div
        className="contact__image"
        style={{backgroundImage: `url(${image})`}}>
      </div>
      <div className="contact__text">
      
      </div>
    </div>
  )
}

export default Contact;