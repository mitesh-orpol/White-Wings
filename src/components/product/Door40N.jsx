import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./productdetails.css";
import "./window.css"
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import Whatsapp from "../whatsapp/Whatsapp";

function ProductDetail() {
  
    // Function to scroll to top smoothly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };




  return (
    <>
      <div className="product-details-page">
        <Navbar />
        <div className="container">
          <h1 className="">40N </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/casementDoor">Casement Door </Link> <i class="fa-solid fa-angle-right"></i> <Link>40N</Link>
          </div>
        </div>
      </div>

      <div className="window-cata">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="roboto">CATEGORY</h2>
                    <h6 className="roboto">Casement Door</h6>
                    <div className="custom-hr">
                        <hr />
                    </div>
                    <h1 className="roboto">40N</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">A casement window system of 40mm wide module with a range of economical and high performance products for glazing system choice of 4 - 26mm in order to give a combined optimum thermal, acoustic and security performance.</p>
                    <p  className="roboto">This system offers the right combination of safety and performance with innovative design and aesthetics appeal for modern construction.</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../images/aliminiumdetails/40n.png" alt="" />
                </div>
            </div>
            <div className="over_view">
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className="roboto">Overview</h4>
                        <div className="custom-hr">
                            <hr />
                        </div>
                        <hr />
                        <h5 className="roboto">Design Features</h5>
                        <li className="roboto">Both hinge and friction arm option with miter joint for sash and frame</li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Rectangular and round glazing bead choices</li>
                        <li className="roboto">Single glazed solution with pocket sash</li>
                        <li className="roboto">Single and double glazed solutions with glazing bead</li>
                        <li className="roboto">40N casement windows available in flush and double overlap option.</li>
                        <li className="roboto">Single / double sash windows</li>
                        <li className="roboto">Outward opening</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">For residential and commercial buildings and public places like hospitals, hotels, schools etc</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>40N</th>
                                </tr>
                                </thead>
                                
                                <tbody>
                                <tr>
                                    <th>SIZE LIMITS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max glass thickness (mm):</td>
                                    <td>26</td>
                                </tr>
                                <tr>
                                    <td>Max sash width (mm):</td>
                                    <td>700</td>
                                </tr>
                                <tr>
                                    <td>Max sash height (mm):</td>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <td>Max sash load (kg):</td>
                                    <td>32</td>
                                </tr>
                                <tr>
                                    <th>SOLUTIONS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Outward opening:</td>
                                    <td><i class="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <th>FEATURES</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Multi-point locking:</td>
                                    <td><i class="fa-solid fa-check"></i></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      

      {/* this seaction css product.css */}
      <div className="product-contct">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h5 className="roboto">
                Design with excellence thanks to our White Wings team of
                experts!
              </h5>
              <p className="roboto">
                We offer tailored solutions to suit all projects and budgets. We
                don't provide a one-size-fits-all services, we work with our
                customers to detail the specifications that their project really
                needs
              </p>
            </div>
            <div className="col-lg-3">
              <div className="von">
                <a href="/contact" className="roboto">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default ProductDetail;
