import React from 'react';
import Nav from '../../components/Navbar/nav.js';
import house from "../../images/house.png";
import './../home/home.css';
import '../../components/Navbar/nav.css';
import Searchbar from '../../components/Searchbar/searchbar.js';
import '../../components/Searchbar/searchbar.css';
import banner from "../../images/Group 5.png";
import Cities from '../../components/Cities/cities.js';
import '../../components/Cities/cities.css';
import Recent from '../../components/Recent/Recent.js';
import '../../components/Recent/Recent.css';
import professional from "../../images/real-estate.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Commercial from '../commercial.js';
import Footer from '../../components/Footer/footer.js';
import '../../components/Footer/footer.css';

const Home = () => {
  return (
    <div>
        <div className="home-bg">
            <Nav />
            <img src={house} alt="" />
            <h1 className="title">RENTALS, HOMES, AND <br/> COMMERCIAL PROPERTIES</h1>
            <Searchbar />
        </div>
        <div className="home-section">
          <img src={banner} alt="category banner" />
        </div>
        <div className="popular-section">
          <Cities />
        </div>
        <div className="recent-section">
          <Recent />
        </div>
        <div className="real-estate-section">
          <div className="real-estate-info">
          <h1>Real Estate Professional?</h1>
          <h2>Want to get more leads through your listings?</h2>
          <div className="learn-more-link">
            <p>Learn More</p>
            <Link to="/commercial" element={<Commercial />}>
            <FaArrowRightLong className='learn-more-arrow'/>
            </Link>
          </div>
          </div>
          <img src={professional} alt="Real Estate Professional Section" />
        </div>
        <Footer />
    </div>
  )
}

export default Home