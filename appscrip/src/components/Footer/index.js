import USflagIcon from '../Assets/US-Flag-Icon.png';
import InstaIcon from '../Assets/Insta.png';
import LinkedInIcon from '../Assets/linked.png';
import GooglePayIcon from '../Assets/google-pay-icon.png';
import MastercardIcon from '../Assets/matercard-icon.png';
import PaypalIcon from '../Assets/paypal-icon.png';
import AmexIcon from '../Assets/apex-icon.png';
import ApplepayIcon from '../Assets/apple-icon.png';
import PayIcon from '../Assets/pay-icon.png';
import './index.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-main-container">
        <div className="footer-top-container">
            <div className="top-left-container">
                <h1 className='footer-left-heading'>Be the first to know</h1>
                <p className='footer-left-descrip'>Signup for updates from metta muse.</p>
                <div className="email-container">
                    <input type='email' placeholder='Enter your email' className='email-field' />
                    <button className='subscribe-button'>Subscribe</button>
                </div>
            </div>
            <div className="top-right-container">
                <h2 className="footer-right-heading">CONTACT US</h2>
                <p className="number">+44 221 133 5360</p>
                <p className="email">customercare@muttamuse.com</p>
                <h2 className="currency">CURRENCY</h2>
                <div className="flag-currency-con">
                    <img src={USflagIcon} alt="us flag" className='us-flag' />
                    <h1 className='dot'>.</h1>
                    <h1 className='usd'>USD</h1>
                </div>
                <p className="right-descrip">Transactions will be completed in Euros and a currency refernce is available on hover.</p>
            </div>
        </div>
        <hr />
        <div className="footer-bottom-container">
            <ul className="bottom-left-list-container">
                <h1 className='list-heading'>metta muse</h1>
                <li className="list-item">About Us</li>
                <li className="list-item">Stories</li>
                <li className="list-item">Artisans</li>
                <li className="list-item">Boutiques</li>
                <li className="list-item">Contact Us</li>
                <li className="list-item">EU Compliances Docs</li>
            </ul>
            <ul className="bottom-middle-list-container">
                <h1 className="quick-heading">QUICK LINKS</h1>
                <li className="list-item">Order & Shipping</li>
                <li className="list-item">Join/Login as Sellar</li>
                <li className="list-item">Payment & Pricing</li>
                <li className="list-item">Return & Refunds</li>
                <li className="list-item">FAQs</li>
                <li className="list-item">Privacy Policy</li>
                <li className="list-item">Terms & Conditions</li>
            </ul>
            <div className="bottom-right-container">
                <h1 className='follow-us'>FOLLOW US</h1>
                <div className="social-icons-con">
                    <img src={InstaIcon} alt="social icons" className="social-icons" />
                    <img src={LinkedInIcon} alt="social icons" className="social-icons" />
                </div>
                <h1 className="accepts">metta muse ACCEPTS</h1>
                <div className="pay-accepts-con">
                    <img src={GooglePayIcon} alt="" className="pay-icon" />
                    <img src={MastercardIcon} alt="" className="pay-icon" />
                    <img src={PaypalIcon} alt="" className="pay-icon" />
                    <img src={AmexIcon} alt="" className="pay-icon" />
                    <img src={ApplepayIcon} alt="" className="pay-icon" />
                    <img src={PayIcon} alt="" className="pay-icon" />
                </div>
            </div>
        </div>
        <p className="copy-rights">Copyright@2023 mettamuse. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
