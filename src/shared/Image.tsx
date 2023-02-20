import React from 'react';
import './Image.scss';

interface ImageProps {
  image: any;
  alt: string;
}

const Image = (props: ImageProps) => {
  return (
    <div className="image-wrapper">
      <img src={props.image} alt={props.alt}/>
    </div>
  )
}

export default Image;