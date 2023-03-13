import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.scss';
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import logo from '../assets/logo.png'
import MobileNavigation from '../components/MobileNavigation';
import { useTranslation } from 'react-i18next';

const lngs = [
  { code: "en" },
  { code: "sr" },
  { code: "de" },
];

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  
  const handleTrans = (code: string) => {
    i18n.changeLanguage(code);
  }
  
  return (
    <React.Fragment>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo"/>
        </div>
        <nav className="navigation">
          <MobileNavigation/>
          <ul className="header-list">
            <Link to={'/'}>
              <li>{t('welcome')}</li>
            </Link>
            <Link to={'/products'}>
              <li>{t('products')}</li>
            </Link>
            <li className="header-list__materials">
              {t('materials')}
              <div className="header-list__materials-block">
                <span>{t('plywood')}</span>
                <span>{t('mdf')}</span>
                <span>{t('hdf')}</span>
                <span>{t('plywood2')}</span>
                <span>{t('cp')}</span>
                <span>{t('shackles')}</span>
              </div>
            </li>
            <Link to={'/contact'}>
              <li>{t('contact')}</li>
            </Link>
          </ul>
        </nav>
        <div className="social">
          <a href={'https://www.facebook.com/profile.php?id=100090754463246'}
             target="_blank"
             rel="noreferrer"
             className="social--icon">
            <BsFacebook/>
          </a>
          <a href={'https://www.instagram.com/eurocut.d.o.o/'}
             target="_blank"
             rel="noreferrer"
             className="social--icon">
            <BsInstagram/>
          </a>
        </div>
        <div className="languages">
          {/*<span>SR</span>*/}
          {/*<span>EN</span>*/}
          {/*<span>DE</span>*/}
          {lngs.map(lng => {
            const code = lng.code;
            return <span onClick={ ()=> handleTrans(code) }>{code} </span>
          })}
        </div>
      </header>
      <Outlet/>
    </React.Fragment>
  )
}

export default Dashboard;