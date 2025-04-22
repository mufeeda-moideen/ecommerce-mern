import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then(res => {
        console.log("Product Data:", res.data); // As per task requirement
        setProduct(res.data);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Delivery Date:</strong> {product.deliveryDate}</p>
      <p><strong>Last Day of Replacement:</strong> {product.replacementDate}</p>
    </div>
  );
};

export default ProductView;
