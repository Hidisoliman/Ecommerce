import React from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext.js";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { apiProducts, cartItems } = useShoppingCart();
  const productsInCart = apiProducts.filter((product) =>
    cartItems.some((item) => item.id === product.id)
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products in Cart</h2>
      <div className="row">
        {productsInCart.length > 0 ? (
          productsInCart.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price} USD</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No products in cart</p>
          </div>
        )}
      </div>
      <div className="m-3 p-3">
        <Link to={"/checkout"}>
          <button type="button" class="btn btn-outline-danger">
            Checkout
          </button>
        </Link>
        <Link to={"/contact"}>
          <button type="button" className="btn btn-outline-warning">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
