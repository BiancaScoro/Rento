import React from 'react'
import '../../components/Recent/Recent.css';

const RecentCard = ({category, img, price, imgAlt}) => {
  return (
    <div className="recent-div">
        <div className="recent-img-box">
            <img src={img} alt={imgAlt} className="recent-img"/>
        </div>
        <p className="recent-category">
            {category}
        </p>
        <p className="recent-price">
            {price}
        </p>
    </div>
  )
}

export default RecentCard