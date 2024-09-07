import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../Redux/Reducer/productSlice';
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();  
  const {id} = useParams();
  
  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  const { selectedProduct: product } = useSelector((state) => state.products);
  if (!product) return null;
  
  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Popularity: {product.popularity}</p>
      <p>Description: {product.description || 'No description available Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit non necessitatibus reprehenderit, possimus recusandae temporibus est quam asperiores architecto reiciendis quisquam, blanditiis facere esse distinctio. Necessitatibus laudantium assumenda nihi'}</p>
    </div>
  );
};

export default ProductDetails;
