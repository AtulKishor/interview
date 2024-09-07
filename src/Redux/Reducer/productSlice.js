// src/redux/productSlice.js
// import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch product data using fetch
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {  
  const response = await fetch('http://localhost:8080/https://cdn.drcode.ai/interview-materials/products.json');
  
  if (!response.ok) {    
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  // passing data to extrareducer
  return data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
    selectedProduct: null,
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
    searchQuery: '',
    priceRange: '0-5000',
    popularityRange: '0-10000',
    sortBy: '', // e.g., 'price-asc', 'price-desc', 'popularity-asc', 'popularity-desc'
    currentPage: 1,
    itemsPerPage: 20,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      // Update filtered products based on search query
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
      // Filter products by selected price range
      const [minPrice, maxPrice] = state.priceRange.split('-').map(Number);
      state.filteredProducts = state.products.filter((product) =>
        maxPrice ? product.price >= minPrice && product.price <= maxPrice : product.price >= minPrice
      );
    },
    setPopularityRange: (state, action) => {
      state.popularityRange = action.payload;
      // Filter products by selected popularity range
      const [minPopularity, maxPopularity] = state.popularityRange.split('-').map(Number);
      state.filteredProducts = state.products.filter((product) =>
        maxPopularity
          ? product.popularity >= minPopularity && product.popularity <= maxPopularity
          : product.popularity >= minPopularity
      );
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      // Sort products based on selected criteria
      state.filteredProducts.sort((a, b) => {
        if (state.sortBy === 'price-asc') return a.price - b.price;
        if (state.sortBy === 'price-desc') return b.price - a.price;
        if (state.sortBy === 'popularity-asc') return a.popularity - b.popularity;
        if (state.sortBy === 'popularity-desc') return b.popularity - a.popularity;
        return 0;
      });
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    fetchProductDetail: (state, action) => {
      state.selectedProduct = {
        "subcategory": "mobile",
        "title": "Apple iPhone 3GS 16GB",
        "price": "12179",
        "popularity": "2579"
    };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const res = [];        
        Object.entries(action.payload).forEach(([id,product]) => {
          res.push({id, product})
        });
        
        state.products = [...res];
        state.filteredProducts =  [...res]; // Initialize filtered products with all products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions
export const {
  setSearchQuery,
  setPriceRange,
  setPopularityRange,
  setSortBy,
  setPage,
  fetchProductDetail,
} = productSlice.actions;

export default productSlice.reducer;
