import { render, screen } from '@testing-library/react';
import App from '../temp/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
// src/components/ProductList.test.js
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

test('renders product list', () => {
  const products = [
    { id: 1, title: 'Product 1', price: 100, popularity: 200 },
    { id: 2, title: 'Product 2', price: 200, popularity: 300 },
  ];
  render(<ProductList products={products} />);
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});
*/
