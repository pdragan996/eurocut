import React from 'react';
import './Materials.scss'
import MaterialBlock from '../shared/MaterialBlock';
import idea from '../assets/idea-removebg-preview.png';
import delivery from '../assets/delivery-removebg-preview.png';
import design from '../assets/design-removebg-preview.png';
import production from '../assets/production-removebg-preview.png';

const Materials = () => {
  
  const descriptionIdea = 'Some description'
  
  return (
    <div className="materials">
      <div className="materials__diagonal materials__top-left"/>
      <div className="materials__diagonal materials__bottom-right"/>
      <div className="main">
        <MaterialBlock image={idea} alt="Idea" description={descriptionIdea} />
        <MaterialBlock image={delivery} alt="Delivery" description={descriptionIdea} />
        <MaterialBlock image={design} alt="Design" description={descriptionIdea} />
        <MaterialBlock image={production} alt="Production" description={descriptionIdea} />
      </div>
    </div>
  )
}

export default Materials;