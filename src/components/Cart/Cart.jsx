import React from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useShoppingCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: {item.price} USD</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: {getTotalPrice()} USD</h3>
    </div>
  );
};

export default ShoppingCart;
