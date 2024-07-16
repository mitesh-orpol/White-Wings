import React from "react";
import "./footer.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function Footer() {
  function handleEmail(e) {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_SUBSCRIBE_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(() => {
        form.reset();
        alert("Form submitted sucessfully");
      })
      .catch((error) => {
        form.reset();
        alert("Failed to Submitted Form");
      });
  }
  // Function to scroll to top immediately
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img src="../../images/home/f-logo.png" alt="" />
            <p className="roboto">
              White wings is India's largest manufacturer & supplier of energy
              efficient uPVC Windows & uPVC Doors.{" "}
            </p>
            <div className="footer-form contact__form">
              <form
                action=""
                method="POST"
                id="footer_email"
                onSubmit={handleEmail}
              >
                <div className="input-group mb-3">
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    aria-describedby="email"
                    name="email"
                    required
                  />
                  <button className="btn" type="submit" id="email">
                    <i class="fa-solid fa-envelope"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3">
            <h4 className="roboto">Quick Links</h4>
            <ul>
              <li className="roboto">
                <Link to="/" onClick={scrollToTop}>
                  <i class="fa-solid fa-angle-right"></i> Home
                </Link>
              </li>
              <li className="roboto" onClick={scrollToTop}>
                <Link to="/about">
                  <i class="fa-solid fa-angle-right"></i> About Us
                </Link>
              </li>
              <li className="roboto" onClick={scrollToTop}>
                <Link to="/aluminium">
                  <i class="fa-solid fa-angle-right"></i>Products
                </Link>
              </li>
              {/* <li className="roboto" onClick={scrollToTop}>
                <Link to="/blog">
                  <i class="fa-solid fa-angle-right"></i> Blog
                </Link>
              </li> */}
              <li className="roboto" onClick={scrollToTop}>
                <Link to="/contact">
                  <i class="fa-solid fa-angle-right"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4 className="roboto">Quick Links</h4>
            <ul>
              <li className="roboto">
                <Link to="/UPVC"  onClick={scrollToTop}>
                  <i class="fa-solid fa-angle-right"></i> UPVC Windows
                </Link>
              </li>
              <li className="roboto"  onClick={scrollToTop}>
                <Link to="/aluminium">
                  <i class="fa-solid fa-angle-right"></i> Aluminium Windows
                </Link>
              </li>
              <li className="roboto" onClick={scrollToTop}>
                <Link to="/UPVC">
                  <i class="fa-solid fa-angle-right"></i> UPVC Doors
                </Link>
              </li>
              <li className="roboto" onClick={scrollToTop}>
                <Link to="/aluminium">
                  <i class="fa-solid fa-angle-right"></i> Aluminium Doors
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4 className="roboto">Contact Info</h4>
            <div className="f-add">
              <div className="loc">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="add">
                <p className="roboto">
                  White wings is India's largest manufacturer & supplier {" "}
                </p>
              </div>
            </div>
            <hr />
            <div className="f-add">
              <div className="loc">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="add">
                <a href="tel:+91 9879052588" className="roboto">
                  +91 9879052588{" "}
                </a>
                {/* <p className='roboto'>+91 67878 67867 </p> */}
              </div>
            </div>
            <hr />
            <div className="f-add">
              <div className="loc">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="add">
                <a href="mailto:whitewings25839@gmail.com" className="roboto">
                whitewings25839@gmail.com
                </a>
                {/* <p className='roboto'>info@whitewings.com </p> */}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-icon">
          <div className="icon">
            <Link to="https://www.facebook.com/" target="blank">
              <img src="../images/home/f-face.png" alt="" />
            </Link>
            <Link to="">
              <img src="../images/home/f-insta.png" alt="" />
            </Link>
            <Link to="">
              <img src="../images/home/f-in.png" alt="" />
            </Link>
          </div>
          <div className="bottom-footer-text">
            <p>Copyright © 2024 <b>White Wings</b> All rights reserved.</p>
            <p className="text-center mt-2"> Design & Developed by: ORPOL Infotech</p>
          </div>
          <div className="bot"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
