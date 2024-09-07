// src/components/Filters.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPriceRange, setPopularityRange } from '../Redux/Reducer/productSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handlePriceChange = (event) => {
    dispatch(setPriceRange(event.target.value));
  };

  const handlePopularityChange = (event) => {
    dispatch(setPopularityRange(event.target.value));
  };

  return (
    <div className="filters">
      <span>Filter by price: </span>
      <select onChange={handlePriceChange}>
        <option value="0-5000">0-5000</option>
        <option value="5000-10000">5000-10000</option>
        <option value="10000-20000">10000-20000</option>
        <option value="20000+">20000+</option>
      </select>

      <span>Filter by popularity: </span>
      <select onChange={handlePopularityChange}>
        <option value="0-10000">0-10000</option>
        <option value="10000-30000">10000-30000</option>
        <option value="30000-50000">30000-50000</option>
        <option value="50000+">50000+</option>
      </select>
    </div>
  );
};

export default Filters;
