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
          <h1 className="">SC140TT </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/slidingDoor"> Sliding Door </Link> <i class="fa-solid fa-angle-right"></i> <Link>SC140TT</Link>
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
                    <h1 className="roboto">SC140TT</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The SC140TT is a 140 mm thermally broken sliding system for windows and doors, also suitable for the realization of lift and slide solutions.</p>
                    <p  className="roboto">The series is designed for the construction of high-quality frames.</p>
                    <p  className="roboto">The lift and slide mechanism, designed to facilitate the movement of heavy frames up to 400 kg, makes this system very practical and functional.</p>
                    
                    
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../images/aliminiumdetails/sc140.jpg" alt="" />
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
                        <li className="roboto">Maximum load : 300 kg/sash (up to 400 kg/sash with additional trolley)</li>
                        <li className="roboto">Glass thickness : 10 mm to 40 mm(Double or Triple) </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">A wide range of solution is available</li>
                        <li className="roboto">Low threshold option for unimpeded access through the door</li>
                        <li className="roboto">Dual color available.</li>
                        <li className="roboto">All finishes available. Customized finishes on request suited for high resistance to agressive environments.</li>
                        <li className="roboto">Windows, balcony-doors</li>
                        <li className="roboto">2-3-4-6 sashes movable on two or three tracks</li>
                        <li className="roboto">Sliding or lift & slide</li>
                        <li className="roboto">Sliding and Fixed Combination</li>
                        <li className="roboto">Fixed + sliding sash window</li>
                        <li className="roboto">Motorized (optional)</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Residential sector for the construction of balcony doors for villas, apartments and towers.</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>SC140TT</th>
                                    </tr>
                                </thead>
                                
                                <tbody>                             
                                    <tr>
                                        <th>PERFORMANCES</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td>Uw value W/m²K (Double glazing) :</td>
                                        <td>1,7</td>
                                    </tr>
                                    <tr>
                                        <td>Uw value W/m²K (Triple glazing) : </td>
                                        <td>1,2</td>
                                    </tr> 
                                    <tr>
                                        <td>Uf value W/m²K : </td>
                                        <td>3,5</td>
                                    </tr>  
                                    <tr>
                                        <td>AWW Classification : </td>
                                        <td>4 / 8A / A4</td>
                                    </tr>  
                                    <tr>
                                        <th>SIZE LIMITS</th>
                                        <th></th>
                                    </tr>  
                                    <tr>
                                        <td>Max glass thickness (mm) : </td>
                                        <td>40</td>
                                    </tr> 
                                    <tr>
                                        <td>Standard sash width : </td>
                                        <td>2500</td>
                                    </tr> 
                                    <tr>
                                        <td>Standard sash height :</td>
                                        <td>2800</td>
                                    </tr> 
                                    <tr>
                                        <td>Maximum sash load (kg) : </td>
                                        <td>up to 400 kg</td>
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
