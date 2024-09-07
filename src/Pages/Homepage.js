import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchProducts, setPage } from '../Redux/Reducer/productSlice';

// Components
import ProductList from '../Component/ProductList';
import SearchBar from '../Component/SearchBar';
import Filters from '../Component/Filters';
import Sort from '../Component/Sort';
import Pagination from '../Component/Pagination';
import { useParams } from "react-router-dom";

const Homepage = () => {
    const dispatch = useDispatch();
    const { status, error, filteredProducts } = useSelector((state) => state.products);
    const {pageNo} = useParams();
  
    useEffect(() => {
      dispatch(fetchProducts());
      dispatch(setPage(pageNo));
    }, [dispatch, pageNo]);
  
    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;
    
    return (
      <div className="home-container">
          <SearchBar />
          <Filters />
          <Sort />
          <ProductList products={filteredProducts}  />
          <Pagination />
      </div>
    )
}

export default Homepage;
