// src/components/Pagination.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../Redux/Reducer/productSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.products);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
