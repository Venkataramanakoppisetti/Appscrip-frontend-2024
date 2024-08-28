import TopLogo from '../Assets/top-logo.png';
import Logo from '../Assets/Logo.png';
import SearchIcon from '../Assets/search-icon.png';
import FavouriteIcon from '../Assets/heart-icon.png';
import BagIcon from '../Assets/shopping-bag-icon.png';
import ProfileIcon from '../Assets/profile-icon.png';
import EngIcon from '../Assets/ENG-icon.png';
import BottomArrowIcon from '../Assets/arrow-bottom-icon.png'
import './index.css'
import React from 'react'

const Header = () => {
  return (
    <div className='top-header-container'>
      <div className="top-container">
        <div className='topo-logo-container'>
            <img src={TopLogo} alt="top logo" className='top-logo' />
            <p className="top-text">Lorem ipsum dolor</p>
        </div>
        <div className='topo-logo-container'>
            <img src={TopLogo}  alt="top logo" className='top-logo'/>
            <p className="top-text">Lorem ipsum dolor</p>
        </div>
        <div className='topo-logo-container'>
            <img src={TopLogo}  alt="top logo" className='top-logo'/>
            <p className="top-text">Lorem ipsum dolor</p>
        </div>
      </div>
      <header className="header-container">
        <div className="header-top-container">
            <img src={Logo} alt="logo" className="web-logo" />
            <h1 className="web-heading">LOGO</h1>
            <div className="elements-container">
                <img src={SearchIcon} alt="search icon" className="element" />
                <img src={FavouriteIcon} alt="favourite icon" className="element" />
                <img src={BagIcon} alt="bag icon" className="element" />
                <img src={ProfileIcon} alt="profile icon" className="element" />
                <div className="profile-container">
                    <img src={EngIcon} alt="eng icon" className="element" />
                    <img src={BottomArrowIcon} alt="bottom arrow icon" className="element" />
                </div>
            </div>
        </div>
        <nav className="nav-options-container">
            <ul className="nav-list">
                <li className="nav-list-option">SHOP</li>
                <li className="nav-list-option">SKILLS</li>
                <li className="nav-list-option">STORIES</li>
                <li className="nav-list-option">ABOUT</li>
                <li className="nav-list-option">CONTACT US</li>
            </ul>
        </nav>
        <hr className='line'/>
      </header>
      
    </div>
  )
}

export default Header
