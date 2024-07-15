import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <div className="container">
          <header>
            <nav className="navbar">
              <h1>Krist</h1>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink>Our Story</NavLink>
                </li>
                <li>
                  <NavLink>Blog</NavLink>
                </li>
                <li>
                  <NavLink>Contact Us</NavLink>
                </li>
              </ul>
              <a className="icons">
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <a href="#" className="icons">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <NavLink to="cart" className="icons">
                <FontAwesomeIcon icon={faCartShopping} />
                {cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
              </NavLink>
              <button className="btn login">Log In</button>
            </nav>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
