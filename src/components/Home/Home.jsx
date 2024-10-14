import { useEffect, useState } from "react";
import style from "../Home/Home.module.css";
import cover from "../assets/cover.jpeg";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";
import pic7 from "../assets/pic7.jpeg";
import pic8 from "../assets/pic8.jpeg";
import pic9 from "../assets/pic9.jpeg";
import pic10 from "../assets/pic10.jpeg";
import pic11 from "../assets/pic11.jpeg";
import pic12 from "../assets/pic12.jpeg";
import pic13 from "../assets/pic13.jpeg";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(12);

  async function getProducts() {
    try {
      let { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 12);
  };

  return (
    <>
      <div className={`${style.cover}`}>
        <img src={cover} alt="cover" />
        <div className={`${style.box}`}>
          <span>New Arrival</span>
          <h1 className="warning">
            Discover Our <br />
            New Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit omnis
            voluptates neque consequuntur vero magni in magnam nulla consectetur
            harum reiciendis delectus?
          </p>
          <button className="btbtn w-50 mt-3">Buy Now</button>
        </div>
      </div>

      <div className="text-center my-4">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        {[pic1, pic2, pic3].map((pic, index) => (
          <div className="card" style={{ width: "14rem" }} key={index}>
            <img src={pic} className="card-img-top" alt={`pic${index + 1}`} />
            <div className="card-body">
              <h3 className="card-text text-center">
                {["Dining", "Living", "Bedroom"][index]}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-center pt-4">Our Products</h1>

      <div>
        {loading ? (
          <div className="text-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          <div className="container">
            <div className="row">
              {products.slice(0, visibleProducts).map((product) => (
                <div
                  key={product.id}
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                >
                  <Link
                    to={`/productdetails/${product.id}`}
                    className="text-decoration-none"
                  >
                    <div className="product card shadow-sm">
                      <img
                        src={product.images[0]}
                        alt={product.title.substring(0, 2)}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <span className="text-muted">
                          {product.category.name}
                        </span>
                        <h5 className="card-title">{product.title}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-danger fw-bold">
                            {product.price} EGP
                          </span>
                        </div>
                        <button className="btn btn-success w-100 mt-3">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              {visibleProducts < products.length && (
                <div className="text-center my-4">
                  <button className="btn btn-primary" onClick={handleShowMore}>
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={`${style.box2}`}>
        <div className="text-center m-3">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="btn btn-success w-100 mt-3">Explore More</button>
        </div>

        <div className="position-relative m-3">
          <img src={pic4} alt="pic4" className="img-fluid" />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white bg-dark bg-opacity-50 p-3 rounded">
            <p>01 ____ Bedroom</p>
            <h2 className="warning">Inner Peace</h2>
          </div>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide m-3">
          <div className="carousel-indicators">
            {[0, 1, 2].map((index) => (
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
                key={index}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {[pic5, pic4, pic3].map((pic, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={pic}
                  className="d-block w-100"
                  alt={`pic${index + 5}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">
          Share your setup with{" "}
          <span className="fw-bold">#FuniroFurniture</span>
        </h2>
        {[pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13].map(
          (pic, index) => (
            <img
              src={pic}
              alt={`pic${index + 6}`}
              className="img-fluid"
              key={index}
            />
          )
        )}
      </div>
    </>
  );
}
