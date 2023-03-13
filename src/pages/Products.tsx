import React from 'react';
import './Products.scss'
import MaterialBlock from '../shared/MaterialBlock';
import idea from '../assets/idea-removebg-preview.png';
import delivery from '../assets/delivery-removebg-preview.png';
import design from '../assets/design-removebg-preview.png';
import production from '../assets/production-removebg-preview.png';
import cikica from '../assets/cikica2.png';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();
  
  return (
    <div className="products">
      <div className="products__diagonal products__top-left"/>
      <div className="products__diagonal products__bottom-right"/>
      <div className="products__first-block" >
        <MaterialBlock image={cikica} alt="Idea" description={t('block_descriptions.FIRST')} />
      </div>
      <div className="main">
        <MaterialBlock image={idea} alt="Idea" description={t('block_descriptions.IDEA')} />
        <MaterialBlock image={design} alt="Design" description={t('block_descriptions.DESIGN')} />
        <MaterialBlock image={production} alt="Production" description={t('block_descriptions.PRODUCTION')} />
        <MaterialBlock image={delivery} alt="Delivery" description={t('block_descriptions.DELIVERY')} />
      </div>
    </div>
  )
}

export default Products;