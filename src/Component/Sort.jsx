// src/components/Sort.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../Redux/Reducer/productSlice';

const Sort = () => {
  const dispatch = useDispatch();

  return (
    <div className="sort">
      <button onClick={() => dispatch(setSortBy('price-asc'))}>
        Sort by Price Ascending
      </button>
      <button onClick={() => dispatch(setSortBy('price-desc'))}>
        Sort by Price Descending
      </button>
      <button onClick={() => dispatch(setSortBy('popularity-asc'))}>
        Sort by Popularity Ascending
      </button>
      <button onClick={() => dispatch(setSortBy('popularity-desc'))}>
        Sort by Popularity Descending
      </button>
    </div>
  );
};

export default Sort;
