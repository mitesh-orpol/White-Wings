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
          <h1 className="">SC40 </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/slidingDoor"> Sliding Door </Link> <i class="fa-solid fa-angle-right"></i> <Link>SC40</Link>
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
                    <h1 className="roboto">SC40</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The SC40 is a non-insulated sliding system for residential application with single glazing.</p>
                    <p  className="roboto">The system is a slim, yet solid and durable high quality sliding window system, which guarantees strength and durability in use. Tested for 25000 cycles of operation (equivalent to more than 15 years of regular use), the SC40 provides an envying 80 to 120 Kg of sash weight with single glazed system choice of 4 - 8 mm for mass housing requirement.</p>
                    <p className="roboto">he SC40 gives comprehensive performance along with reinforced security and wider vision with great overall aesthetics.</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../images/aliminiumdetails/sc40.png" alt="" />
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
                        <li className="roboto">Sleek design with 24 mm visible width in the center, yet very strong in 2 or 3 track option. </li>
                        <li className="roboto">45 degree joint in frame and 90 degree joining for shutters.</li>
                        <li className="roboto">Additional option of door bottom kick plate.</li>
                        <li className="roboto">Central mullion choices in rectangular and aerodynamic shapes </li>
                        <li className="roboto">Rails in anodized aluminum or stainless steel. </li>
                        <li className="roboto">Available in single glazing in 4, 5, 6 & 8 mm. </li>
                        <li className="roboto">tested for 25000 cycles of operation (equivalent to more than 15 years of regular use) </li>
                        <li className="roboto">Compatible with 40N casement series. </li>


                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Tubular frame with simple version, architrave option and built-in mosquito frame option.</li>
                        <li className="roboto">Option to fix the mosquito frame later with 2 simple profiles.</li>
                        <li className="roboto">High-quality White Wings branded fittings and accessories. </li>
                        <li className="roboto">Windows, balcony-doors</li>
                        <li className="roboto">2-3-4-6 sashes movable on two or three tracks</li>
                        <li className="roboto">Choice of integrated mosquito screen.</li>
                        <li className="roboto">fixed or casement integration options.</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Ideal for residential application in tropical and hot climates. New and Renovation.</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>SC40</th>
                                </tr>
                                </thead>
                                
                                <tbody>                                
                                <tr>
                                    <th>SIZE LIMITS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max glass thickness (mm) :</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>Standard sash width </td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Standard sash height :</td>
                                    <td>2000</td>
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
