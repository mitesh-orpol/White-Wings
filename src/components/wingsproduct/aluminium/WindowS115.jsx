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
          <h1 className="">S115NI </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/aluminium/slidingalu"> Sliding Window & Doors</Link> <i class="fa-solid fa-angle-right"></i> <Link>S115NI</Link>
          </div>
        </div>
      </div>

      <div className="window-cata">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="roboto">CATEGORY</h2>
                    <h6 className="roboto"> Sliding Window & Doors</h6>
                    <div className="custom-hr">
                        <hr />
                    </div>
                    <h1 className="roboto">S115NI</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">S115NI provides high security, improved energy efficiency, and wide panoramic views with natural daylight. A laminated double-glazing unit in S115NI  brings high acoustic insulation levels, combined with a variety of configurations, which will meet any architectural need. Based on the weight of the shutter, one or more opening panels with large dimensions can be achieved.</p>
                    
                    
                </div>
                <div className="col-lg-6">
                  <img className="img-fluid" src="../../images/aliminiumdetails/s115.png" alt="" />
                </div>
            </div>

            <div className="system_img">
              <div className="container">
                <img className="img-fluid" src="../../images/aliminiumdetails/3-s115.png" alt="" />
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
                        <li className="roboto">Suitable for larger glazing panels.</li>
                        <li className="roboto">Safety glass applications</li>
                        <li className="roboto">Maximum load : 200 kg/sash</li>
                        <li className="roboto">Glass thickness: 28mm - 36 mm</li>
                        <li className="roboto">Integrated Flyscreen option</li>


                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Options of 2 track 2 shutter & 2 track 4 shutters with fly mesh options & mid transoms in shutters</li>
                        <li className="roboto">Internal / External gasket for better Air & water tightness and easy installations</li>
                        <li className="roboto">Double roller for smooth movement & to carry shutter weight Maximum 200 Kg per shutter</li>
                        <li className="roboto">Glass range with thickness of 28, 30, 32 ,34 & 36mm can be accommodated</li>
                        <li className="roboto">All types of Handles & Locking options Like Cremone, Flush type and Single point , Multi-point locks</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Recommended for Residential / Commercial / Villa applications</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>S115NI</th>
                                    </tr>
                                </thead>
                                
                                <tbody>                             
                                    <tr>
                                        <th>SIZE LIMITS</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td>Max glass thickness (mm) :</td>
                                        <td>36 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum sash load (kg) : </td>
                                        <td>up to 200 kg</td>
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
