// App.jsx
import './scss/global.scss'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import FormPage from './pages/FormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </Router>
  );
}

export default App;
