import React from 'react';
import './Materials.scss'
import MaterialBlock from '../shared/MaterialBlock';
import idea from '../assets/idea-removebg-preview.png';
import delivery from '../assets/delivery-removebg-preview.png';
import design from '../assets/design-removebg-preview.png';
import production from '../assets/production-removebg-preview.png';
import { BLOCK_DESCRIPTIONS_SR } from '../app.config';

const Materials = () => {
  
  return (
    <div className="materials">
      <div className="materials__diagonal materials__top-left"/>
      <div className="materials__diagonal materials__bottom-right"/>
      <div className="aaa" ></div>
      <div className="main">
        <MaterialBlock image={idea} alt="Idea" description={BLOCK_DESCRIPTIONS_SR.IDEA} />
        <MaterialBlock image={design} alt="Design" description={BLOCK_DESCRIPTIONS_SR.DESIGN} />
        <MaterialBlock image={production} alt="Production" description={BLOCK_DESCRIPTIONS_SR.PRODUCTION} />
        <MaterialBlock image={delivery} alt="Delivery" description={BLOCK_DESCRIPTIONS_SR.DELIVERY} />
      </div>
    </div>
  )
}

export default Materials;