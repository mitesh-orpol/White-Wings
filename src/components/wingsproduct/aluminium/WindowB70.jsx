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
          <h1 className="">B70 </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/aluminium/casementalu">Casement Windows & Doors </Link> <i class="fa-solid fa-angle-right"></i> <Link>B70</Link>
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
                    <h1 className="roboto">B70</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The uninsulated B70 series is designed for applications requiring armoured system with nice aesthetic.</p>
                    <p  className="roboto">This system is bullet proof certified and anti burglar to ensure high level of safety, thus suitable for all environment where passive safety is required such as courts and jewelers.</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../../images/aliminiumdetails/b70.jpg" alt="" />
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
                        <li className="roboto">Flat lines </li>
                        <li className="roboto">Seal system with double jamb or central gasket.</li>
                        <li className="roboto">Burglary resistant </li>
                        <li className="roboto">Bullet proof certified according to the legislation in place : FB6 NS - FB4 - (antiexplosion test 10000 Pa) </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Use of steel reinforcements optional.</li>
                        <li className="roboto">Available in all surface finishes</li>
                        <li className="roboto">Customized finishes on request for high resistant, aggressive environments.</li>
                        <li className="roboto">Windows and doors with 1 or 2 sashes</li>
                        <li className="roboto">Tilt & turn</li>
                        <li className="roboto">Fanlight</li>
                        <li className="roboto">Bottom hung</li>
                        <li className="roboto">Inward opening</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Suited for shopping centers, industrial buildings, banks, courts, banks and jewelry stores.</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>WINDOW</th>
                                </tr>
                                </thead>
                                
                                <tbody>
                                <tr>
                                    <th>PERFORMANCES</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Uw value W/m²K (Double glazing) :</td>
                                    <td>3,3</td>
                                </tr>
                                <tr>
                                    <td>Uw value W/m²K (Triple glazing):</td>
                                    <td>2,9</td>
                                </tr>
                                <tr>
                                    <td>Uf value W/m²K :</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>AWW Classification :</td>
                                    <td>4 / E1200 / C5</td>
                                </tr>
                                <tr>
                                    <th>SIZE LIMITS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max glass thickness (mm) :	</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Max sash width (mm) :</td>
                                    <td>1200 (Normal casement) / 1000 (turn and tilt)</td>
                                </tr>
                                <tr>
                                    <td>Max sash height (mm) :</td>
                                    <td>2400 ( Normal casement) / 2200 (turn and tilt)</td>
                                </tr>
                                <tr>
                                    <td>Maximum sash load (kg) </td>
                                    <td>150</td>
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
                                    <td>Bottom hung :</td>
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
                                    <td>Bullet proof :</td>
                                    <td>FB6 NS - FB4 - (antiexplosion test 10000 Pa)</td>
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
