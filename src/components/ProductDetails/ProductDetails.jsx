import axios from "axios";
import React, { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import T from "../assets/T.jpg";
import R from "../assets/R.jpg";
import L from "../assets/L.jpg";
import M from "../assets/M.jpg";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import { useShoppingCart } from "../Context/ShoppingCartContext";
export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const { addToCart } = useShoppingCart();

  async function productDetails() {
    try {
      let response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    productDetails();
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} Add To Cart`);
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="row align-items-start my-4">
          <div className="col-md-5">
            <Slider {...settings}>
              {product.images &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product.title}
                    className="w-100"
                  />
                ))}
            </Slider>
          </div>
          <div className="col-md-7">
            <div className="details">
              <h3 className="h5 font-weight-bold">{product.title}</h3>
              <p className="text-muted">{product.description}</p>
              <p className="text-muted">{product.priceAfterDiscount}</p>
              <span className="badge bg-secondary text-light mb-3">
                {product.category?.name}
              </span>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="font-weight-bold text-danger fs-5">
                  {product.price} EGP
                </span>
                <span className="text-warning">
                  <i className="fa fa-star rating-color me-2">
                    {product.ratingsAverage}
                  </i>
                </span>
              </div>
            </div>
            <button
              className="btn bg-main text-main-light w-100 btn-sm"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
      <div className="container py-4">
        <h3 className="h5 text-center">Description</h3>
        <p className="flex-grow-1 mx-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
          aliquam veniam hic, ipsa pariatur officiis alias dolor commodi unde
          nesciunt repellendus illum accusamus enim ut, minus obcaecati.
          Praesentium, earum?
        </p>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex gap-2">
            <img
              src={T}
              alt="T"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
            <img
              src={R}
              alt="R"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
            <img
              src={L}
              alt="L"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
            <img
              src={M}
              alt="M"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>

        <div className="d-flex flex-column align-items-center mb-4">
          <h2 className="h5 text-center mb-4">Related Products</h2>
          <div className="d-flex justify-content-around w-100 flex-wrap gap-4">
            <div className="card" style={{ width: "14rem" }}>
              <img src={pic1} className="card-img-top" alt="pic1" />
              <div className="card-body">
                <h3 className="card-text text-center">Dining</h3>
              </div>
            </div>

            <div className="card" style={{ width: "14rem" }}>
              <img src={pic2} className="card-img-top" alt="pic2" />
              <div className="card-body">
                <h3 className="card-text text-center">Living</h3>
              </div>
            </div>

            <div className="card" style={{ width: "14rem" }}>
              <img src={pic3} className="card-img-top" alt="pic3" />
              <div className="card-body">
                <h3 className="card-text text-center">Bedroom</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
