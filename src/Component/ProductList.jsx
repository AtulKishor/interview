
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {

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
          <tr key={id}>
            <td><Link to={`/detailspage/${id}`}>{product.title}</Link></td>
            <td>{product.price}</td>
            <td>{product.popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
