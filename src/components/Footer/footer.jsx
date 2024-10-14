import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div>
      <footer className="bg-light text-dark pt-5 pb-4">
        <div className="container text-md-start">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h5 className="fw-bold">Funiro.</h5>
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <Link to="#" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Shop
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  About
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Contact
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Help</h6>
              <p>
                <Link to="#" className="text-reset">
                  Payment Options
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Returns
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Privacy Policies
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Newsletter</h6>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                  />
                  <button className="btn btn-dark" type="submit">
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center p-4 mt-4 border-top">
          &copy; 2023 Funiro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
