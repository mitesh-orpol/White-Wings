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
          <h1 className="">INFINEO - S146LM </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/slidingDoor"> Sliding Door </Link> <i class="fa-solid fa-angle-right"></i> <Link>INFINEO - S146LM</Link>
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
                    <h1 className="roboto">INFINEO - S146LM</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">INFINEO frameless sliding door by White Wings provides a wide panoramic view with natural light and maximum comfort. Featuring a fully concealed outer frame, ultra-slim 21mm interlock, and market-leading performance, available in both thermally broken and non-thermal sections.</p>
                    <p  className="roboto">Along with an ultra-thin interlock for minimal sightlines, the rollers are seamlessly integrated inside the shutter to avoid the risk of dust accumulation, resulting in longer life and flawless transitions.</p>
                    
                    
                    
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../images/aliminiumdetails/s146LM.jpg" alt="" />
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
                        <li className="roboto">Inline sliding door </li>
                        <li className="roboto">Completely hidden outer frame </li>
                        <li className="roboto">Suitable for larger glazing panels. </li>
                        <li className="roboto">Sightlines (Interlock) : 21mm | 31mm </li>
                        <li className="roboto">Maximum load : 350kg | 450kg /sash </li>
                        <li className="roboto">Flush Threshold </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">One or more large opening panels</li>
                        <li className="roboto">U- gasket for better Air & water tightness and easy installations</li>
                        <li className="roboto">Stainless steel double-wheel rollers  are integrated inside the shutter to avoid the risk of dust accumulation, longer life and smooth transitions</li>
                        <li className="roboto">Glass range with thicknesses of up to 32mm can be accommodated</li>
                        <li className="roboto">Slim handle with Single point and Multi-point locks</li>


                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">New construction: Residential and commercial. </li>
                        <li className="roboto">Especially high-end villas, penthouses, and commercial buildings such as hotels.  </li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>INFINEO S146LM  </th>
                                    </tr>
                                </thead>
                                
                                <tbody>                             
                                    <tr>
                                        <th>PERFORMANCES</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td>Air permeability :	</td>
                                        <td>ASTM 600pa for NT & EN Class 4 (600 Pa) </td>
                                    </tr> 
                                    <tr>
                                        <td>Water resistance :	</td>
                                        <td>ASTM 450pa for NT & EN Class 9A (600 Pa)</td>
                                    </tr> 
                                    <tr>
                                        <td>Wind load (Pa) :</td>
                                        <td>ASTM 2000pa for NT & EN Class B5 (2000 Pa)</td>
                                    </tr> 
                                    <tr>
                                        <th>SIZE LIMITS</th>
                                        <th></th>
                                    </tr>  
                                    <tr>
                                        <td>Max glass thickness (mm) :</td>
                                        <td>32mm</td>
                                    </tr> 
                                    <tr>
                                        <td>Maximum sash load (kg) :</td>
                                        <td>350kg | 450kg</td>
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
