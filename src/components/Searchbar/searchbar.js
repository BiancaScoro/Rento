import React from 'react'

const Searchbar = () => {
  return (
    <>
    <form className="search-form">
        <div className="location-box">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="Location" />
        </div>
        <div className="category-box">
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
                <option value="rent">Rent</option>
                <option value="commercial">Commercial</option>
                <option value="buy">Buy</option>
            </select>
        </div>
        <button type="submit" className="search-button">Search</button>
    </form>
    </>
  )
}

export default Searchbar