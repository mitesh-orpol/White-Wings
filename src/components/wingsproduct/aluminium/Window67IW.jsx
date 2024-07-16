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
          <h1 className="">67IW-IWL-ID</h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/aluminium/casementalu">Casement Windows & Doors </Link> <i class="fa-solid fa-angle-right"></i> <Link>67IW-IWL-ID  </Link>
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
                    <h1 className="roboto">67IW-IWL-ID</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">A complete and versatile 67mm, thermally broken series suitable for all construction and satisfying different styles of modern aesthetics.</p>
                    <p  className="roboto">This series is used for applications where high thermal and acoustic performances are required. It is also especially designed to ensure security against intrusion. This system is recommended for the restructuring and replacement of old wooden and pvc windows.</p>
                    
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../../images/aliminiumdetails/67iw.jpg" alt="" />
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
                        <li className="roboto">Flat, rounded and chamfered lines. </li>
                        <li className="roboto">Seal system with double gasket.</li>
                        <li className="roboto">Sealing system with central gasket to achieve high acoustic and thermal insulation. </li>
                        <li className="roboto">Burglary resistant class RC2 (WK2)  </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Burglary resistant class RC2 (WK2)</li>
                        <li className="roboto">All surface finishes available</li>
                        <li className="roboto">Customized high-resistant finishes for aggressive environments upon request.</li>
                        <li className="roboto">Windows with 1, 2, or more inward opening sashes</li>
                        <li className="roboto">Tilt & turn</li>
                        <li className="roboto">Pivot</li>
                        <li className="roboto">Outward openings</li>
                        <li className="roboto">Compatible with 67ID doors</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Versatile and complete system suitable for all construction types. Ideal for residential and commercial applications incl. houses, apartments, villas, public buildings, hospitals, schools and industrial buildings.</li>
                        <li className="roboto">New/refurbishment.</li>

                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>67IW</th>
                                    <th>67ID </th>
                                </tr>
                                </thead>
                                
                                <tbody>
                                <tr>
                                    <th>PERFORMANCES</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Uw value W/m²K (Double glazing) :</td>
                                    <td>1,4</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Uw value W/m²K (Triple glazing) :</td>
                                    <td>1,1</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Uf value W/m²K :</td>
                                    <td>2,4 (no cover PVC + 0,2)</td>
                                    <td>2,6</td>
                                </tr>
                                <tr>
                                    <td>AWW Classification :</td>
                                    <td>4 / E1200 / C5 (2 sashes turn/turn and tilt W2000 x H1800)</td>
                                    <td>3 / 2B / C5</td>
                                </tr>
                                <tr>
                                    <td>Acoustic performance (dB) :</td>
                                    <td>2,4 (no cover PVC + 0,2)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>SIZE LIMITS</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max glass thickness (mm):	</td>
                                    <td>60</td>
                                    <td>50/60</td>
                                </tr>
                                <tr>
                                    <td>Max sash width (mm) :</td>
                                    <td>1400 (normal casement) <br /> 1500 (turn and tilt)</td>
                                    <td>1250</td>
                                </tr>
                                <tr>
                                    <td>Max sash height (mm) :</td>
                                    <td>1400 (normal casement) <br /> 1500 (turn and tilt)</td>
                                    <td>2450</td>
                                </tr>
                                <tr>
                                    <td>Maximum sash load (kg) :</td>
                                    <td>100 kg (normal casement) <br />
                                    130 kg (turn and tilt)</td>
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
                                    <td>Outward opening :</td>
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
                                    <td>Dual color option </td>
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
