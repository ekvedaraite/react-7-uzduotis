// ProductsPage.jsx
import "../scss/products.scss"
import "../scss/buttons.scss"
import "../scss/nav.scss"
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/";

const ProductsPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const deleteProduct = (id) => {
    fetch(BASE_URL + "/" + id, {
      method: "DELETE",
    })
      .then(() => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <nav>
        <Link to="/products" style={{ color: location.pathname === '/products' ? 'red' : 'inherit' }}>
          Products
        </Link>
        <Link to="/form" style={{ color: location.pathname === '/form' ? 'red' : 'inherit' }}>
          Form
        </Link>
      </nav>
      <section id="app" className="products">
        {products.map((x) => (
          <div key={x.id} className="product">
            <img src={x.image} alt={x.title} />
            <p>{x.title}</p>
            <p className="price">€{x.price}</p>
            <button className="button" onClick={() => deleteProduct(x.id)}>
              Ištrinti
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;
