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
          <h1 className="">45DS </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/casementDoor">Casement Door </Link> <i class="fa-solid fa-angle-right"></i> <Link>45DS</Link>
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
                    <h1 className="roboto">45DS</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The 45DS is a 45 mm, non-insulated door system that offers optimized design, yet affordable solution for all construction types requiring good weather performances.</p>
                    <p  className="roboto">ts simple appearance and clean lines suit the modern environment design requirements. Its wide choice of applications and technical solutions makes it ideal for all types of residential and commercial establishments. The 45 DS casement is the ideal system for exterior joinery in tropical and hot climates.</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../images/aliminiumdetails/45ds.jpg" alt="" />
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
                        <li className="roboto">double overlap</li>
                        <li className="roboto">frame/sash depth : 45 mm</li>
                        <li className="roboto">squared or rounded glass bead</li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">All surface finishes available</li>
                        <li className="roboto">casement, turn and tilt</li>
                        <li className="roboto">inward and outward opening</li>


                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Residential and commercial sector applications, like apartments, villas, hotels, stores, etc.</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>45DS</th>
                                </tr>
                                </thead>
                                
                                <tbody>
                                <tr>
                                    <th>PERFORMANCES</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Uf value W/m²K :	</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>AWW Classification :	</td>
                                    <td>3 / 4 / 3 </td>
                                </tr>
                                <tr>
                                    <th>SIZE LIMITS </th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max glass thickness (mm) :	</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>Maximum sash load (kg) :	</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <th>SOLUTIONS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Inward opening :</td>
                                    <td><i class="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Outward opening :</td>
                                    <td><i class="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Top hung :</td>
                                    <td><i class="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Tilt & turn :</td>
                                    <td><i class="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <th>FEATURES</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Multi-point locking :</td>
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
