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
          <h1 className="">45V </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/aluminium/foldDoor"> Fold and Slide Door </Link> <i class="fa-solid fa-angle-right"></i> <Link>45V</Link>
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
                    <h1 className="roboto">45V</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The 45V is a non-insulated folding door system which provides an elegant and innovative application choice for balcony-doors, eliminating the separation between the internal and external environment, and offering a wide opening.</p>
                    <p  className="roboto">The 45V folding door/window system is perfectly suitable for all types of construction. It gives the possibilities to protect and allows all commercial, public and domestic premises to offer large openings, where light and openness can literally change everything!</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../../images/aliminiumdetails/45v.jpg" alt="" />
                </div>
            </div>




            <div className="system_img">
              <div className="container">
                <img className="img-fluid" src="../../images/aliminiumdetails/fold-45v.png" alt="" />
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
                        <li className="roboto">System adapted for large dimensions up to 2400 mm high and 750 mm wide per sash </li>
                        <li className="roboto">In the folded position, the folding door offers a minimum passage of up to 95% of total opening width.</li>
                        <li className="roboto">Glass infill from 4 to 24 mm. Single or double glazing. </li>
                        <li className="roboto">Max weight: Up to 70 kg per sash. </li>
                        <li className="roboto">High level of performance (weather tightness) and finger protection obtained by the double gasket barrier (central and peripheral) </li>
                        <li className="roboto">Smooth operation, design and ergonomy facilitate the opening and closing of the panels. </li>
                        <li className="roboto">Opening frames are guided by a roller rail at the top. Bottom rail can be embedded. </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Option of integrating with White Wings 45P louver system for amazing folding combination with solar control.</li>
                        <li className="roboto">Several possible combinations of elements and opening sashes.</li>
                        <li className="roboto">Open in </li>
                        <li className="roboto">Low threshold (for disabled people),</li>
                        <li className="roboto">Hanging truck (top side)</li>
                        <li className="roboto">Even and odd sashes</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Suitable for all types of construction for commercial, public and domestic premises.</li>
                    </div>
                    <div className="col-lg-6">
                        <div className="table_show">
                            <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>45V</th>
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
                                    <td>Max glass thickness (mm) :	</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>Max sash width (mm) :</td>
                                    <td>750</td>
                                </tr>
                                <tr>
                                    <td>Max sash height (mm) :</td>
                                    <td>2400</td>
                                </tr>
                                <tr>
                                    <td>Maximum sash load (kg) </td>
                                    <td>70</td>
                                </tr>
                                
                                <tr>
                                    <th>SOLUTIONS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Inward opening :</td>
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
