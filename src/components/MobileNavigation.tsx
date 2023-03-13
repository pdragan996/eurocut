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
              <li>Euro Cut</li>
            </Link>
            <Link to={'/products'} onClick={closeMenu}>
              <li>Proizvodi</li>
            </Link>
              <li className="mobile-menu__materials">
                Materijali
                <div className="mobile-menu__materials-block">
                  <span>Iverica</span>
                  <span>MDF</span>
                  <span>HDF</span>
                  <span>Iverica visoki sjaj</span>
                  <span>Kompakt ploca</span>
                  <span>Okovi</span>
                </div>
              </li>
            <Link to={'/contact'} onClick={closeMenu}>
              <li>Kontakt</li>
            </Link>
          </ul>
        </div>}
    </div>
  )
}

export default MobileNavigation;