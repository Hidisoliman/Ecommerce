import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../assets/logo.jpeg";
import ShoppingCartDrawer from "../ShoppingCart/ShoppingCart";
import { useState } from "react";
export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className={`${style.box}`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="fresh cart" /> Furniro
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-4 my-lg-0 navbar-nav-scroll">
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cartitem">
                    Cart Item
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/checkout">
                    Checkout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </>
            </ul>
            <ul className="navbar-nav mb-2">
              <li className="nav-item d-flex align-items-center">
                <i className="fa-solid fa-user me-3"></i>
                <i className="fa-solid fa-magnifying-glass me-3"></i>
                <i className="fa-regular fa-heart me-3"></i>
                <Link to={"/cartitem"}>
                  <i class="fa-solid fa-cart-shopping"></i>
                </Link>
                <button
                  onClick={openDrawer}
                  style={{ margin: "20px", padding: "10px", fontSize: "10px" }}
                >
                  Open Cart
                </button>

                <ShoppingCartDrawer
                  isOpen={isDrawerOpen}
                  onClose={closeDrawer}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
