// FormPage.jsx
import "../scss/form.scss"
import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/";

const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [imgValue, setImgValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [priceValue, setPriceValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const inputData = {
      image: imgValue,
      title: titleValue,
      price: priceValue,
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((resp) => resp.json())
      .then(() => {
        alert('Product added successfully');
        setImgValue('');
        setTitleValue('');
        setPriceValue('');
        navigate('/products');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <nav>
        <NavLink to="/products" className={location.pathname === '/products' ? 'active' : ''}>
          Products
        </NavLink>
        <NavLink to="/form" className={location.pathname === '/form' ? 'active' : ''}>
          Form
        </NavLink>
      </nav>
      <h1>Pridėti prekę</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="url"
          placeholder="img"
          value={imgValue}
          onChange={(e) => setImgValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="price"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;