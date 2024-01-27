import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Rento.png'
import { LuMenu } from "react-icons/lu";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <section className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="rento-logo" />
      </Link>
      <div className="menu-icon" onClick={toggleNavbar}>
        <LuMenu />
      </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
                <li>
                  <Link to='/' className="nav-link">HOME</Link>
                </li>
                <li>
                  <Link to='/' className="nav-link">BUY</Link>
                </li>
                <li>
                  <Link to='/' className="nav-link">COMMERCIAL</Link>
                </li>
                <li>
                  <Link to='/' className="nav-link">RENT</Link>
                </li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Nav