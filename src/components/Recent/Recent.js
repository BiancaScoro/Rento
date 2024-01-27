import React from 'react'
import { Link } from "react-router-dom"
import condo1 from "../../images/condo.jpg";
import condo2 from "../../images/condo2.jpg";
import home from "../../images/home.jpg";
import Rent from '../../pages/rent';
import RecentCard from './recentCard';

const Recent = () => {

    const recentCards = [
        {
            img: condo1,
            imgAlt: 'Condominium 1',
            category: 'CONDOMINIUM',
            price: '$2,985'
        },
        {
            img: condo2,
            imgAlt: 'Condominium 2',
            category: 'CONDOMINIUM',
            price: '$2,675'
        },
        {
            img: home,
            imgAlt: 'home',
            category: 'RESIDENTIAL',
            price: '$3,745'
        },
    ]
  return (
    <section className="recent-section wrapper">
            <div className="recent-header">
                <h3>Recently Viewed Listings</h3>
                <div className="recent-link">
                    <Link to={'/rent'} element={<Rent />} className="recent-link">See All
                    </Link>
                </div>
            </div>
            <ul className="recent-ul">
                {recentCards.map(
                ({img, category, price, imgAlt}, index) => 
                (<RecentCard key={index} img={img} imgAlt={imgAlt} category={category} price={price}/>)
                )}
            </ul>
    </section>
  )
}

export default Recent