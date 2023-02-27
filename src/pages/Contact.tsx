import React from 'react';
import './Contact.scss'
import image from '../assets/img2.jpg';
import { EURO_CUT_DESCRIPTION, EURO_CUT_MOTO } from '../app.config';

const Contact = () => {
  
  return (
    <div className="contact">
      <div
        className="contact__image"
        style={{backgroundImage: `url(${image})`}}>
        <div className="contact__image-text">
          <i className="contact__image-text--moto">{EURO_CUT_MOTO}</i>
          <i className="contact__image-text--name">Euro Cut</i>
        </div>
      </div>
      <div className="contact__text">
        {EURO_CUT_DESCRIPTION}
      </div>
    </div>
  )
}

export default Contact;