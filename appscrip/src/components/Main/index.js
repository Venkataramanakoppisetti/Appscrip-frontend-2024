import LeftArrowIcon from '../Assets/arrow-left-icon.png';
import RightArrowIcon from '../Assets/arrow-right-icon.png';
import BottomArrowIcon from '../Assets/arrow-bottom-icon.png'
import './index.css';
import React, { useState, useEffect } from 'react';

const Main = () => {
  const [isFilterBarOpen, setFilterBarOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(null); // Track the open filter section
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [productsList, setProductsList] = useState([]);
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });

  const filterOptions = {
    idealFor: ["Men", "Women", "Baby & Kids"],
    occasion: ["Casual", "Formal", "Party"],
    work: ["Embroidery", "Printing", "Handwork"],
    fabric: ["Cotton", "Silk", "Polyester"],
    segment: ["Luxury", "Premium", "Economy"],
    suitableFor: ["Summer", "Winter", "Rainy"],
    rawMaterials: ["Natural", "Synthetic", "Blended"],
    pattern: ["Solid", "Printed", "Striped"]
  };

  const onClickedFilter = () => {
    setFilterBarOpen(!isFilterBarOpen);
  };

  const toggleFilter = (filterCategory) => {
    setOpenFilter(openFilter === filterCategory ? null : filterCategory);
  };

  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (filterCategory, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterCategory]: prevFilters[filterCategory].includes(value)
        ? prevFilters[filterCategory].filter(item => item !== value)
        : [...prevFilters[filterCategory], value]
    }));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(response => response.json())
      .then(data => setProductsList(data))
      .catch(error => console.log(`Error while fetching products: ${error}`));
  }, []);

  return (
    <div className='main-container'>
      <div className="main-heading-discrip-container">
        <h2 className="main-heading">DISCOVER OUR PRODUCTS</h2>
        <p className="main-discrip">
          Lorem ipsum dolor sit amet consectetur. Amet eset posuere rhoncus<br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor
        </p>
      </div>
      <div className="middle-container">
        <div className='middle-left-container'>
          <p className="items-count">{productsList.length} ITEMS</p> {/* Display the number of items */}
          <div className="sidebar-opening-container">
            <img src={isFilterBarOpen ? LeftArrowIcon : RightArrowIcon} alt="direction arrow" />
            <button className='filter-button' onClick={onClickedFilter}>
              {isFilterBarOpen ? "Hide Filter" : "Show Filter"}
            </button>
          </div>
        </div>

        <select id="sort" value={sortOption} onChange={handleChange} className="sort-select">
          <option value="RECOMMENDED">Recommended</option>
          <option value="NEWEST">Newest first</option>
          <option value="POPULAR">Popular</option>
          <option value="HIGH TO LOW">Price: High to low</option>
          <option value="LOW TO HIGH">Price: Low to high</option>
        </select>
      </div>

      <div className="content-container">
        {isFilterBarOpen && (
          <div className="sidebar">
            <div className="customize-container">
              <input
                type="checkbox"
                className="checkbox"
                checked={filters.customizable}
                onChange={() => setFilters({ ...filters, customizable: !filters.customizable })}
              />
              <p className='customizable-discrip'>CUSTOMIZABLE</p>
            </div>
            <hr />

            {Object.keys(filterOptions).map((filterCategory, index) => (
              <div key={index} className="filters-section">
                <div className="filter-con">
                  <p className="filter" onClick={() => toggleFilter(filterCategory)}>
                    {filterCategory.toUpperCase()}
                  </p>
                  <img
                    src={BottomArrowIcon}
                    alt="toggle filter"
                    className="bottom-arrow-icon"
                    onClick={() => toggleFilter(filterCategory)}
                    style={{ transform: openFilter === filterCategory ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </div>
                {openFilter === filterCategory && (
                  <div className="filter-options">
                    {filterOptions[filterCategory].map((option, idx) => (
                      <div key={idx}>
                        <input
                          type="checkbox"
                          id={`${filterCategory}-${idx}`}
                          checked={filters[filterCategory].includes(option)}
                          onChange={() => handleFilterChange(filterCategory, option)}
                        />
                        <label htmlFor={`${filterCategory}-${idx}`}>{option}</label>
                      </div>
                    ))}
                  </div>
                )}
                {index < Object.keys(filterOptions).length - 1 && <hr />}
              </div>
            ))}
          </div>
        )}
        <div className={`products-container ${isFilterBarOpen ? 'shrink' : ''}`}>
          <div className="products-grid">
            {productsList.length === 0 ? (
              <p>No products available</p>
            ) : (
              productsList.map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
                  <h3>{product.title}</h3>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
