import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {products.map(product => (
        <div className="product-card" key={product._id}>
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Delivery Date:</strong> {product.deliveryDate}</p>
          <Link className="view-link" to={`/view/${product._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
