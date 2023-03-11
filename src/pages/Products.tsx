import React from 'react';
import './Products.scss'
import MaterialBlock from '../shared/MaterialBlock';
import idea from '../assets/idea-removebg-preview.png';
import delivery from '../assets/delivery-removebg-preview.png';
import design from '../assets/design-removebg-preview.png';
import production from '../assets/production-removebg-preview.png';
import cikica from '../assets/cikica2.png';
import { BLOCK_DESCRIPTIONS_SR } from '../app.config';

const Products = () => {
  
  return (
    <div className="products">
      <div className="products__diagonal products__top-left"/>
      <div className="products__diagonal products__bottom-right"/>
      <div className="products__first-block" >
        <MaterialBlock image={cikica} alt="Idea" description={BLOCK_DESCRIPTIONS_SR.FIRST} />
      </div>
      <div className="main">
        <MaterialBlock image={idea} alt="Idea" description={BLOCK_DESCRIPTIONS_SR.IDEA} />
        <MaterialBlock image={design} alt="Design" description={BLOCK_DESCRIPTIONS_SR.DESIGN} />
        <MaterialBlock image={production} alt="Production" description={BLOCK_DESCRIPTIONS_SR.PRODUCTION} />
        <MaterialBlock image={delivery} alt="Delivery" description={BLOCK_DESCRIPTIONS_SR.DELIVERY} />
      </div>
    </div>
  )
}

export default Products;