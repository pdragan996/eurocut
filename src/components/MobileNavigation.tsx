import { AiOutlineMenu } from 'react-icons/ai'
import './MobileNavigation.scss'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavigation = () => {
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
              <li>Eurocut</li>
            </Link>
            <Link to={'/products'} onClick={closeMenu}>
              <li>Proizvodi</li>
            </Link>
            <Link to={'/contact'} onClick={closeMenu}>
              <li>Kontakt</li>
            </Link>
          </ul>
        </div>}
    </div>
  )
}

export default MobileNavigation;