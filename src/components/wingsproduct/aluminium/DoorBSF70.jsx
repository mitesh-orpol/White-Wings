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
          <h1 className="">BSF70NI </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/aluminium/foldDoor"> Fold and Slide Door </Link> <i class="fa-solid fa-angle-right"></i> <Link>BSF70NI</Link>
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
                    <h1 className="roboto">BSF70NI</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The BSF70NI is a versatile and flexible, non-insulated folding door system, available in a wide range of configurations to create the look you desire.</p>
                    <p  className="roboto">Multiple doors can be combined with open-in or open-out options, in a variety of styles to create a wide expanse of opening. The narrow profile ensures that maximum glazing is achieved, flooding rooms with light</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../../images/aliminiumdetails/bsf70.jpg" alt="" />
                </div>
            </div>



            <div className="system_img">
              <div className="container">
                <img className="img-fluid" src="../../images/aliminiumdetails/fold-bsf70.png" alt="" />
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
                        <li className="roboto">Dimensions: up to 3000 mm high and 1200 mm wide per sash </li>
                        <li className="roboto">Glass infill: from 13.52 to 40 mm. Single or double glazing.</li>
                        <li className="roboto">Max weight: Up to 130 kg per sash. </li>
                        <li className="roboto">Chamfered and square bead options. </li>
                        <li className="roboto">Four stainless steel wheels for smooth and consistent operation. </li>
                        <li className="roboto">Unique, flush line pop-out handle for maximum door opening and square stacking panels. </li>
                        <li className="roboto">High-security hinges, locking mechanisms, and high-strength roller design provide security and reliability for high traffic applications. </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Square or softline frame profiles</li>
                        <li className="roboto">Doors and panels can be used in a variety of configurations, style and design.</li>
                        <li className="roboto">Full range of bespoke hardware available. </li>
                        <li className="roboto">Available in single or dual colour option and anodised finishes.</li>
                        <li className="roboto">Multi-point locking mechanism</li>
                        <li className="roboto">Low threshold option for unimpeded access through the door </li>
                        <li className="roboto">Open in & open out</li>
                        <li className="roboto">Up to 6 opening sashes</li>
                        <li className="roboto">High traffic door</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">High traffic applications</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>BSF70NI</th>
                                </tr>
                                </thead>
                                
                                <tbody>
                                <tr>
                                    <th>PERFORMANCES</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>AWW Classification :</td>
                                    <td>4 / 9A / AE2400</td>
                                </tr>
                                
                                <tr>
                                    <th>SIZE LIMITS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max sash width (mm) :	</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>Max sash height (mm) :</td>
                                    <td>2400</td>
                                </tr>
                                <tr>
                                    <td>Maximum sash load (kg) :</td>
                                    <td>130</td>
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
