import { AiOutlineMenu } from 'react-icons/ai'
import './MobileNavigation.scss'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MobileNavigation = () => {
  const { t } = useTranslation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  
  const handleMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  }
  
  const closeMenu = () => {
    setIsMenuOpened(false);
  }
  
  return (
    <div className="mobile-nav">
      <AiOutlineMenu onClick={handleMenuClick}/>
      {isMenuOpened &&
        <div className="mobile-menu">
          <ul className="mobile-menu__list">
            <Link to={'/'} onClick={closeMenu}>
              <li>{t('welcome')}</li>
            </Link>
            <Link to={'/products'} onClick={closeMenu}>
              <li>{t('products')}</li>
            </Link>
              <li className="mobile-menu__materials">
                {t('materials')}
                <div className="mobile-menu__materials-block">
                  <span>{t('plywood')}</span>
                  <span>{t('mdf')}</span>
                  <span>{t('hdf')}</span>
                  <span>{t('plywood2')}</span>
                  <span>{t('cp')}</span>
                  <span>{t('shackles')}</span>
                </div>
              </li>
            <Link to={'/contact'} onClick={closeMenu}>
              <li>{t('contact')}</li>
            </Link>
          </ul>
        </div>}
    </div>
  )
}

export default MobileNavigation;