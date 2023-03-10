import React, { useState } from 'react';
import './Slider.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import img1 from '../assets/img1.jpeg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import { useTranslation } from 'react-i18next';

const Slider = () => {
  const { t } = useTranslation();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = [img1, img3, img4, img5, img6];
  
  const moveNext = () => {
    currentImgIndex === images.length - 1 ?  setCurrentImgIndex(0) :  setCurrentImgIndex(currentImgIndex + 1);
  }
  
  const movePrev = () => {
    currentImgIndex === 0 ? setCurrentImgIndex(images.length - 1) : setCurrentImgIndex(currentImgIndex - 1);
  }
  
  const getMessage = (): string => {
    switch (currentImgIndex) {
      case 1:
        // return HOME_MESSAGES.B
        return t('home_messages.B')
      case 2:
        return t('home_messages.C')
      case 3:
        return t('home_messages.E')
      case 4:
        return t('home_messages.D')
      default:
        return t('home_messages.A')
    }
  }
  
  return (
    <div className="home-image" style={{backgroundImage: `url(${images[currentImgIndex]})`}}>
      <div className="home-image__message">{getMessage()}</div>
      <div className="home-image__icon-group">
          <AiOutlineLeft
            size={50}
            onClick={movePrev}
            strokeWidth={40}
            className="home-image__icon"/>
          <AiOutlineRight
            size={50}
            strokeWidth={40}
            onClick={moveNext}
            className="home-image__icon"/>
      </div>
      <div className="home-image__title">
        <div className="home-image__label">
          Euro cut
        </div>
        <div className="home-image__description">
          {t('custom_made_furniture')}
        </div>
      </div>
    </div>
  )
}

export default Slider;