import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.scss';
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import logo from '../assets/logo.png'
import MobileNavigation from '../components/MobileNavigation';

const Dashboard = () => {
  
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
              <li>Euro Cut</li>
            </Link>
            <Link to={'/products'}>
              <li>Proizvodi</li>
            </Link>
            <Link to={'/materials'}>
              <li>Materijali</li>
            </Link>
            <Link to={'/contact'}>
              <li>Kontakt</li>
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
      </header>
      <Outlet/>
    </React.Fragment>
  )
}

export default Dashboard;