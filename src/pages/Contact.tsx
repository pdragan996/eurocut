import React from 'react';
import './Contact.scss'
import { ADDRESS, CONTACT_DESCRIPTION, COORDINATES, EURO_CUT_MOTO } from '../app.config';
import { GoMail } from 'react-icons/go';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { GiRotaryPhone } from 'react-icons/gi';

const Contact = () => {
  const {lat, long} = COORDINATES;

  const goToMaps = () => {
    window.open("https://maps.google.com?q="+lat+","+long, '_blank');
  }
  
  return (
    <div className="contact">
      <div className="contact__left">
        <div className="contact__image"></div>
        <div className="contact__image-text">
          <i className="contact__image-text--moto">{EURO_CUT_MOTO}</i>
          <i className="contact__image-text--name">Euro Cut</i>
        </div>
      </div>
      <div className="contact__text">
        <div className="contact__title">{CONTACT_DESCRIPTION.HEADER}</div>
        <div className="contact__description">{CONTACT_DESCRIPTION.FIRST}</div>
        <div className="contact__description">{CONTACT_DESCRIPTION.SECOND}</div>
        <div className="contact__description">{CONTACT_DESCRIPTION.THIRD}</div>
        <div className="contact__icons-container">
          <span className="contact__icon"><GoMail/></span>
          <span>eurocut.info@gmail.com</span>
        </div>
        <div className="contact__icons-container">
          <span className="contact__icon"><BsTelephoneOutbound/></span>
          <span>+387 66/686-707</span>
        </div>
        <div className="contact__icons-container">
          <span className="contact__icon"><GiRotaryPhone/></span>
          <span>+387 51/951-388</span>
        </div>
        <div
          className="contact__icons-container
            contact__icons-container--clickable"
          onClick={goToMaps}>
          <div className="tooltip">
            <strong>Otvori google maps</strong>
          </div>
          <span className="contact__icon"><TiLocation/></span>
          <span>{ADDRESS}</span>
        </div>
        
        
        <div className="contact__text-text">
          <i className="contact__text-text--moto">{EURO_CUT_MOTO}</i>
          <i className="contact__text-text--name">Euro Cut</i>
        </div>
      </div>
    </div>
  )
}

export default Contact;