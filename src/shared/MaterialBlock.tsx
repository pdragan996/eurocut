import React from 'react';
import './MaterialBlock.scss';


interface MaterialBlockProps {
  image: any;
  alt: string;
  description: string
}

const MaterialBlock = (props: MaterialBlockProps) => {
  return (
    <div className="material-block">
      <div className="material-block__image">
        <img src={props.image} alt={props.alt}/>
      </div>
      <div className="material-block__description">
      
      </div>
    </div>
  )
}

export default MaterialBlock;