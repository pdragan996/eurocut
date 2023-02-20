import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.scss';
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Dashboard = () => {
  
  return (
    <React.Fragment>
      <header className="header">
        <div className="logo">
        
        </div>
        <nav className="navigation">
          <ul className="header-list">
            <Link to={'/'}>
              <li>Eurocut</li>
            </Link>
            <Link to={'/about-us'}>
              <li>About Us</li>
            </Link>
            <Link to={'/materials'}>
              <li>Materials</li>
            </Link>
            <Link to={'/contact'}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <div className="social">
          <a href={'https://sr-rs.facebook.com/'}
             target="_blank"
             rel="noreferrer"
             className="social--icon">
            <BsFacebook/>
          </a>
          <a href={'https://www.instagram.com/'}
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