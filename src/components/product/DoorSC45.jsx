import React from "react";
import Navbar from "../navbar/Navbar";
import "./productdetails.css";
import "./window.css"
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import Whatsapp from "../whatsapp/Whatsapp";

function ProductDetail() {
  


  return (
    <>
      <div className="product-details-page">
        <Navbar />
        <div className="container">
          <h1 className="">SC45 </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/slidingDoor"> Sliding Door </Link> <i class="fa-solid fa-angle-right"></i> <Link>SC45</Link>
          </div>
        </div>
      </div>

      <div className="window-cata">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="roboto">CATEGORY</h2>
                    <h6 className="roboto"> Fold and Slide Door</h6>
                    <div className="custom-hr">
                        <hr />
                    </div>
                    <h1 className="roboto">SC45</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The SC45 is a non-insulated sliding system for large dimensions windows. It benefits from the most innovative aesthetics and technical concepts making it a unique solution in its segment: slim outside strong inside. </p>
                    <p className="roboto">It is high on aesthetics, smart in design and excellent on all performance parameters of a sliding window.</p>
                    
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../images/aliminiumdetails/sc45.jpg" alt="" />
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
                        <li className="roboto">Slim design with 33 mm visible width of the interlock </li>
                        <li className="roboto">For in single & double glazing 4,5,6 & 8 and 24 mm.</li>
                        <li className="roboto">45 degree joining in frame and 90 degree joining in sash</li>
                        <li className="roboto">Adjustable rollers able to carry up to 120kgs per sash </li>
                        <li className="roboto">Wider track and deeper gutter for water drainage and easy maintenance. </li>
                        <li className="roboto">Reinbfirced profiles for high inertia </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Built-in mosquito frame option</li>
                        <li className="roboto">Vertical Shutter frame in 2 design (reinforced or simple)</li>
                        <li className="roboto">Accessories for lock with innovative design are available </li>
                        <li className="roboto">From 1 up to 4 multiple point locking points devices</li>
                        <li className="roboto">2, 3, 4 or 6 sashes windows and patio- doors</li>
                        <li className="roboto">2, 3, 4 tracks</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Residential / New Construction & Renovation. Tropical and hot climates.</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>SC45</th>
                                </tr>
                                </thead>
                                
                                <tbody>                                
                                <tr>
                                    <th>SIZE LIMITS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max glass thickness (mm) :</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>Standard sash width : </td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>Standard sash height :</td>
                                    <td>2400</td>
                                </tr>
                                <tr>
                                    <td>Maximum sash load (kg) :</td>
                                    <td>up to 120 kg</td>
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
