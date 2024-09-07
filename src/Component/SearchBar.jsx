// src/components/SearchBar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../Redux/Reducer/productSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search by title..."
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
