import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    deliveryDate: '',
    replacementDate: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      product.name === "" ||
      product.price === "" ||
      product.description === "" ||
      product.deliveryDate === "" ||
      product.replacementDate === ""
    ) {
      alert("All Fields are required!");
    } else {
      await axios.post("http://localhost:8080/products/add", product);
      alert("Product Added");
      setProduct({
        name: '',
        price: '',
        description: '',
        deliveryDate: '',
        replacementDate: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Product Name</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} /> 
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} /> 
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={product.description} onChange={handleChange} /> 
      </div>
      <div className="form-group">
        <label>Delivery Date</label>
        <input type="date" name="deliveryDate" value={product.deliveryDate} onChange={handleChange} /> 
      </div>
      <div className="form-group">
        <label>Last Day of Replacement</label>
        <input type="date" name="replacementDate" value={product.replacementDate} onChange={handleChange} /> 
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;