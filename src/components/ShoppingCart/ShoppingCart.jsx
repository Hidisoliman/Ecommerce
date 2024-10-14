import React from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import style from "../ShoppingCart/ShoppingCart.modules.css";
import { Link } from "react-router-dom";

const ShoppingCartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, getTotalPrice } = useShoppingCart();

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-button">
          ×
        </button>
      </div>

      <ul className={style.cartitems}>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.images[0]}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <span>Quantity: {item.quantity}</span>
              <span>Price: {item.price} USD</span>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Price: {getTotalPrice()} USD</h3>

      <div className="d-flex justify-content-between align-items-center p-3 m-3">
        <Link to="/checkout">
          <button type="button" className="btn btn-outline-danger">
            Checkout
          </button>
        </Link>
        <Link to="/contact">
          <button type="button" className="btn btn-outline-warning">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartDrawer;
