import React, { useState } from 'react';
import './Slider.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import img1 from '../assets/img1.jpeg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

const Slider = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = [img1, img3, img4, img5, img6];
  
  const moveNext = () => {
    currentImgIndex === images.length - 1 ?  setCurrentImgIndex(0) :  setCurrentImgIndex(currentImgIndex + 1);
  }
  
  const movePrev = () => {
    currentImgIndex === 0 ? setCurrentImgIndex(images.length - 1) : setCurrentImgIndex(currentImgIndex - 1);
  }

  // setTimeout(() => {
  //  moveNext()
  // }, 10000)
  
  return (
    <div className="home-image" style={{backgroundImage: `url(${images[currentImgIndex]})`}}>
      <div className="home-image__icon_group">
          <AiOutlineLeft
            size={70}
            onClick={movePrev}
            strokeWidth={90}
            className="home-image__icon"/>
          <AiOutlineRight
            size={70}
            strokeWidth={90}
            onClick={moveNext}
            className="home-image__icon"/>
      </div>
      <div className="home-image__title">
        <div className="home-image__label">
          Euro cut
        </div>
        <div className="home-image__description">
          custom furniture
        </div>
      </div>
    </div>
  )
}

export default Slider;