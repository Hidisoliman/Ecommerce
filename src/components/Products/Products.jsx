import axios from "axios";
import React, { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  async function getProducts() {
    try {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      setProducts(data);
    } catch (err) {
      setError("error in loading");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <>
      <img src={Group2} alt="Group2" />
      <img src={Group3} alt="Group3" />
      {loading ? (
        <div className="text-center">
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            visible={true}
          />
          <p> Loaddddddding ...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <div className="container">
          <div className="row">
            {displayedProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <Link
                  to={`/productdetails/${product.id}`}
                  className="text-decoration-none"
                >
                  <div className="product card shadow-sm">
                    <img
                      src={product.images[0]}
                      alt={product.title}
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
                        <span className="text-warning">
                          <i className="fa fa-star">{product.ratingsAverage}</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      )}
      <div className="shop container-fluid py-4">
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <i className="fa-solid fa-trophy mb-2"></i>
            <h5>Quality </h5>
            <p className="text-muted"> High Quality</p>
          </div>
          <div className="col-md-3 mb-3">
            <i className="fas fa-shield-alt mb-2"></i>
            <h5>Protect </h5>
            <p className="text-muted">More 2 Years</p>
          </div>
          <div className="col-md-3 mb-3">
            <i className="fas fa-shipping-fast mb-2"></i>
            <h5> Free Shiping</h5>
            <p className="text-muted"> More Order Than 150$</p>
          </div>
          <div className="col-md-3 mb-3">
            <i className="fas fa-headset mb-2"></i>
            <h5>Support 24 / 7</h5>
            <p className="text-muted">Suport </p>
          </div>
        </div>
      </div>
    </>
  );
}
