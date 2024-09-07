// src/components/Sort.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../Redux/Reducer/productSlice';

const Sort = () => {
  const dispatch = useDispatch();

  return (
    <div className="sort">
      Sort by
      <button onClick={() => dispatch(setSortBy('price-asc'))}>
        Price Ascending
      </button>
      <button onClick={() => dispatch(setSortBy('price-desc'))}>
        Price Descending
      </button>
      <button onClick={() => dispatch(setSortBy('popularity-asc'))}>
        Popularity Ascending
      </button>
      <button onClick={() => dispatch(setSortBy('popularity-desc'))}>
        Popularity Descending
      </button>
    </div>
  );
};

export default Sort;
