// src/components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { openProductDetails } from '../Redux/Reducer/productSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(openProductDetails(product));
  };

  return (
    <table className="product-list">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(products).map(([id,product]) => (
          <tr key={id} onClick={() => handleProductClick(product)}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
