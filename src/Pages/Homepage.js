import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchProducts } from '../Redux/Reducer/productSlice'; // check

// Components
import ProductList from '../Component/ProductList';
import SearchBar from '../Component/SearchBar';
import Filters from '../Component/Filters';
import Sort from '../Component/Sort';
import Pagination from '../Component/Pagination';
import ProductDetails from '../Component/ProductDetails';

const Homepage = () => {
    const dispatch = useDispatch();
    const { products, status, error, filteredProducts } = useSelector((state) => state.products);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;
    
    return (
          <>
              <SearchBar />
              <Filters />
              <Sort />
              <ProductList products={filteredProducts || products}  />
              <Pagination />
              <ProductDetails />
          </>
    )
}

export default Homepage;
