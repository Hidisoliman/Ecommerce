import React from "react";
import GroupCon from "../assets/GroupCon.png";
export default function Contact() {
  return (
    <div className="fs-5">
      <img className="img-fluid " src={GroupCon} alt="GroupCon" />
      <div className="container my-5">
        <div className="text-center">
          <h2>Contact</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="mb-4">
              <h4>Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="mb-4">
              <h4>Phone</h4>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
            <div className="mb-4">
              <h4>Working Time</h4>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          <div className="col-md-8">
            <h4>Get In Touch With Us</h4>
            <p>
              For more information about our products and services, please feel
              free to drop us an email. Our staff always be there to help you
              out. Do not hesitate!
            </p>
            <form className="fs-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Abc"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Abc@def.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="This is optional"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Hi I'd like to ask about..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
