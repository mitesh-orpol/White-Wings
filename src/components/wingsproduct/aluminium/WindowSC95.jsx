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
          <h1 className="">SC95NI </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/aluminium/slidingalu"> Sliding Window & Doors</Link> <i class="fa-solid fa-angle-right"></i> <Link>SC95NI</Link>
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
                    <h1 className="roboto">SC95NI</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The SC95 is a 95 mm, non-thermally broken sliding system for windows and doors, also is a superior, high-performance sliding solution with aesthetics and design appeal. Interlock standard 85 mm, slimer option interlock 55mm & 38mm also available.</p>
                    
                    
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../../images/aliminiumdetails/sc95.jpg" alt="" />
                </div>
            </div>



            <div className="system_img">
              <div className="container">
                <img className="img-fluid" src="../../images/aliminiumdetails/4-sc95.png" alt="" />
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
                        <li className="roboto">The retention brushes are in high-density propylene with central water stripping.</li>
                        <li className="roboto">Die-cast metal roller with reinforced polyamide wheels and ball bearings.</li>
                        <li className="roboto">Maximum load : 180 kg/sash</li>
                        <li className="roboto">Glass thickness: Std 85mm: 6mm to 24 mm, Slimer 38mm option - 13.52mm & 24mm, 26mm </li>
                        <li className="roboto">Double Glazing Unit (DGU) </li>
                        <li className="roboto">Compatible with 45DS casement windows </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">A wide range of solutions are available</li>
                        <li className="roboto">All finishes are available. Customized finishes on request suited for high resistance to aggressive environments.</li>
                        <li className="roboto">windows, balcony-doors</li>
                        <li className="roboto">2-3-4-6 sashes movable on two or three tracks</li>
                        <li className="roboto">Sliding and Fixed Combination</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Suitable for the residential sector for balcony doors of villas or apartments.</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>SC95</th>
                                </tr>
                                </thead>
                                
                                <tbody> 
                                <tr>
                                    <th>PERFORMANCES</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Uf value W/m²K :</td>
                                    <td>7</td>
                                </tr>                               
                                <tr>
                                    <th>SIZE LIMITS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max glass thickness (mm) :</td>
                                    <td>26</td>
                                </tr>
                                <tr>
                                    <td>Standard sash width : </td>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <td>Standard sash height :</td>
                                    <td>3000</td>
                                </tr>
                                <tr>
                                    <td>Maximum sash load (kg) :</td>
                                    <td>up to 180 kg</td>
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
                <Link to="/contact"  onClick={scrollToTop} className="roboto">
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
