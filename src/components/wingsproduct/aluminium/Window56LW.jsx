import React from "react";
import Navbar from "../../navbar/Navbar";
import "./productdetails.css";
import "./window.css"
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Whatsapp from "../../whatsapp/Whatsapp";

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
          <h1 className="">56IW-IWL-ID </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/aluminium/casementalu">Casement Windows & Doors </Link> <i class="fa-solid fa-angle-right"></i> <Link>56IW-IWL-ID</Link>
          </div>
        </div>
      </div>

      <div className="window-cata">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="roboto">CATEGORY</h2>
                    <h6 className="roboto">Casement Windows</h6>
                    <div className="custom-hr">
                        <hr />
                    </div>
                    <h1 className="roboto">56IW-IWL-ID</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The 56IW Casement Window series & 56ID Door series, characterized by a section of 56mm, is used in applications where affordable thermal break solutions are required.</p>
                    <p  className="roboto">This versatile, good-performing system allows for the realization of various construction types and design aesthetics that make this series suitable for a wide range of clientele.</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../../images/aliminiumdetails/56lw.jpg" alt="" />
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
                        <li className="roboto">Flat and rounded lines.</li>
                        <li className="roboto">Sealing system with central gasket.</li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Available in dual color</li>
                        <li className="roboto">Customized high resistant finishes for aggressive environments upon request.</li>
                        <li className="roboto">Windows with 1, 2 or more inward opening sashes</li>
                        <li className="roboto">Tilt & turn</li>
                        <li className="roboto">Pivot</li>
                        <li className="roboto">Outward openings</li>
                        <li className="roboto">Compatible with 56ID doors   </li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Residential sector for the construction of balcony doors for villas, apartments and towers.</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                  <tr>
                                      <th></th>
                                      <th>56IW</th>
                                      <th>56ID</th>
                                  </tr>
                                </thead>
                                
                                <tbody>
                                  <tr>
                                      <th>PERFORMANCES</th>
                                      <th></th>
                                      <th></th>
                                  </tr>
                                  <tr>
                                      <td>Uw value W/m²K (Double glazing) :	</td>
                                      <td>1,7</td>
                                      <td>1,7</td>
                                  </tr>
                                  <tr>
                                      <td>Uw value W/m²K (Triple glazing) :	</td>
                                      <td>1,2	</td>
                                      <td>1,2	</td>
                                  </tr>
                                  <tr>
                                      <td>Uf value W/m²K :	</td>
                                      <td>3,5</td>
                                      <td>3,5</td>
                                  </tr>
                                  <tr>
                                      <td>AWW Classification :	</td>
                                      <td>4 / 8A / A4	</td>
                                      <td>4 / 8A / A4	</td>
                                  </tr>
                                  <tr>
                                      <td>Acoustic performance (dB) :	</td>
                                      <td>46 dB (glass 66.2a/20/44.1a)	</td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <th>SIZE LIMITS </th>
                                      <th></th>
                                      <th></th>
                                  </tr>
                                  <tr>
                                      <td>Max glass thickness (mm) :</td>
                                      <td>20mm to 36mm</td>
                                      <td>20mm to 36mm</td>
                                  </tr>
                                  <tr>
                                      <td>Max sash width (mm) :</td>
                                      <td>1400 (normal casement) / 1500 (turn and tilt)</td>
                                      <td>1250</td>
                                  </tr>
                                  <tr>
                                      <td>Max sash height (mm) :</td>
                                      <td>2400</td>
                                      <td>2350</td>
                                  </tr>
                                  <tr>
                                      <td>Maximum sash load (kg) :</td>
                                      <td>100 (normal casement) / 130 (turn and tilt)</td>
                                      <td>160</td>
                                  </tr>
                                  
                                  <tr>
                                      <th>SOLUTIONS</th>
                                      <th></th>
                                      <th></th>
                                  </tr>
                                  <tr>
                                      <td>Inward opening :</td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                  </tr>
                                  <tr>
                                      <td>Outward opening :	</td>
                                      <td></td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                  </tr>
                                  <tr>
                                      <td>Top hung :</td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>Bottom hung :</td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>Tilt & turn :</td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>Tilt & slide :</td>
                                      <td>X (IWL SERIES)</td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>Horizontal pivot :</td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>Vertical pivot :</td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                      <td></td>
                                  </tr>

                                  <tr>
                                      <th>FEATURES</th>
                                      <th></th>
                                      <th></th>
                                  </tr>
                                  <tr>
                                      <td>Multi-point locking :</td>
                                      <td></td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                  </tr>
                                  <tr>
                                      <td>Dual color option :</td>
                                      <td><i class="fa-solid fa-check"></i></td>
                                      <td></td>
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
                <Link to="/contact" onClick={scrollToTop} className="roboto">
                  Contact Us
                </Link>
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
