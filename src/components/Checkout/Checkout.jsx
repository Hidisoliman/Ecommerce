import React from "react";
import Group1 from "../assets/Group1.png";
export default function Checkout() {
  return (
    <>
      <div className="container my-3 fs-6 p-3 m-3 mt-3">
        <img src={Group1} alt="Group1" />
        <div className="row">
          <div className="col-md-6">
            <h4>Billing details</h4>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label>Company Name (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-3">
                <label>Country / Region</label>
                <select className="form-control">
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Street address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street address"
                />
              </div>
              <div className="mb-3">
                <label>Town / City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Town / City"
                />
              </div>
              <div className="mb-3">
                <label>Province</label>
                <select className="form-control">
                  <option>Western Province</option>
                </select>
              </div>
              <div className="mb-3">
                <label>ZIP code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ZIP code"
                />
              </div>
              <div className="mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-3">
                <label>Additional information</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Additional information"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 fs-6 p-3 ">
            <h4>Your order</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Asgaard Sofa</td>
                  <td>Rs. 250,000.00</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>Rs. 250,000.00</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>Rs. 250,000.00</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mb-3">
              <label>
                <input type="radio" name="paymentMethod" defaultChecked />{" "}
                Direct Bank Transfer
              </label>
              <p>Make your payment directly into our bank account.</p>
            </div>

            <div className="mb-3">
              <label>
                <input type="radio" name="paymentMethod" /> Cash On Delivery
              </label>
            </div>

            <button className="btn btn-primary btn-block">Place order</button>
          </div>
        </div>

        <div className="row text-center mt-5">
          <div className="col-md-3">
            <p>
              <strong>High Quality</strong>
              <br />
              Crafted from top materials
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <strong>Warranty Protection</strong>
              <br />
              Over 2 years
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <strong>Free Shipping</strong>
              <br />
              Order over 150$
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <strong>24 / 7 Support</strong>
              <br />
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
