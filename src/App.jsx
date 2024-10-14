import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartItem from "./components/CartItem/CartItem";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingCartProvider from "./components/Context/ShoppingCartContext";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "productdetails/:id", element: <ProductDetails /> },
        { path: "cart/:id", element: <Cart /> },
        { path: "cartitem", element: <CartItem /> },
        { path: "checkout", element: <Checkout /> },
        { path: "contact", element: <Contact /> },
        { path: "shoppingcart", element: <ShoppingCart /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <ShoppingCartProvider>
      <RouterProvider router={routes} />
    </ShoppingCartProvider>
  );
}

export default App;
