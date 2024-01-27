import React from 'react'

const Cities = () => {
  return (
    <section className="cities-section wrapper">
        <div className="cities-container">
            <div className="header">
                <h2>Popular Cities in Canada</h2>
            </div>
            <div className="cities-list-box">
                <ul className="cities-ul">
                    <li>
                        <button className="toronto-button city-buttons">
                            TORONTO
                        </button>
                    </li>
                    <li>
                        <button className="edmonton-button city-buttons">
                            EDMONTON
                        </button>
                    </li>
                    <li>
                        <button className="calgary-button city-buttons">
                            CALGARY
                        </button>
                    </li>
                    <li>
                        <button className="winnipeg-button city-buttons">
                            WINNIPEG
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cities;