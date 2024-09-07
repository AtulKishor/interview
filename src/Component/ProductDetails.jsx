// src/components/ProductDetails.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeProductDetails } from '../Redux/Reducer/productSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);

  if (!product) return null;

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Popularity: {product.popularity}</p>
      <p>Description: {product.description || 'No description available'}</p>
      <button onClick={() => dispatch(closeProductDetails())}>Close</button>
    </div>
  );
};

export default ProductDetails;
