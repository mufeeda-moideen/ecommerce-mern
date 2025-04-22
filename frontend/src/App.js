import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <div><strong>E-Commerce</strong></div>
        <div>
          <Link to="/">Product List</Link>
          <Link to="/add">Add Product</Link>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/view/:id" element={<ProductView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
