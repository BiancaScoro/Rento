import React from 'react';
import Rento from '../../images/Rento.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container wrapper">
        <div className="footer-logo">
          <img src={Rento} alt="rento logo" />
        </div>
        <div className="footer-nav-container">
          <ul className="links-ul">
            <li>
              <h4>Links</h4>
            </li>
            <li className="footer-accordion">
              <Link className="footer-link" to={'/buy'}>
                Buy
              </Link>
            </li>
            <li>
              <Link className="footer-link" to={'/commercial'}>
                Commercial
              </Link>
            </li>
            <li>
              <Link className="footer-link" to={'/rent'}>
                Rent
              </Link>
            </li>
          </ul>
          <ul className="links-ul">
            <li>
              <h4>Legal</h4>
            </li>
            <li>
              <Link className="footer-link" to={'/terms'}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="footer-link" to={'/privacy'}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="newsletter-box">
          <h4>Newsletter</h4>
          <label htmlFor="newsletter"></label>
          <form action="">
            <input type="email" id="newsletter" placeholder="Enter your email" minLength="5" />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
