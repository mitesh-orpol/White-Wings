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
          <h1 className="">B60 </h1>
          <div className="show_page">
            <Link>Products</Link> <i class="fa-solid fa-angle-right"></i> <Link to="/aluminium/casementalu">Casement Windows & Doors </Link> <i class="fa-solid fa-angle-right"></i> <Link>B60</Link>
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
                    <h1 className="roboto">B60</h1>
                    <h3 className="roboto">Description:</h3>
                    <p  className="roboto">The B60 is a non-insulated series suitable for the production of large windows and doors, with and without armor</p>
                    <p  className="roboto">It provides an aesthetically pleasing appearance due to the coplanarity of the internal and external profiles.</p>
                    <p  className="roboto">The system includes special accessories for use in burglar-proof doors with external openings to ensure maximum safety and reinforced adjusting block for fixing the frame to the perimeter wall.</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src="../../images/aliminiumdetails/b60.jpg" alt="" />
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
                        <li className="roboto">Flat lines for greater aesthetic </li>
                        <li className="roboto">Seal system with double gasket.</li>
                        <li className="roboto">Anti burglar RC2 to ensure high level of safety </li>
                        <li className="roboto">4mm thick steel armor plates to strengthen the structure  </li>

                        <h5 className="roboto">Options</h5>
                        <li className="roboto">Use of steel reinforcements optional.</li>
                        <li className="roboto">Available in all surface finishes</li>
                        <li className="roboto">Customized finishes on request for high resistant, aggressive environments.</li>
                        <li className="roboto">Windows and doors with 1 or 2 sashes</li>
                        <li className="roboto">Fanlight</li>
                        <li className="roboto">Bottom hung</li>
                        <li className="roboto">Inward opening</li>

                        <h5 className="roboto">Application Type</h5>
                        <li className="roboto">Designed for shopping centers, industrial buildings and partitions.</li>
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
                                    <td>3,6</td>
                                </tr>
                                <tr>
                                    <td>Uw value W/m²K (Triple glazing) :</td>
                                    <td>3,3</td>
                                </tr>
                                <tr>
                                    <td>Uf value W/m²K :</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>AWW Classification :</td>
                                    <td>4 / 5A / C5</td>
                                </tr>
                                <tr>
                                    <th>SIZE LIMITS</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Max glass thickness (mm) :	</td>
                                    <td>48</td>
                                </tr>
                                <tr>
                                    <td>Max sash width (mm) :</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>Max sash height (mm) :</td>
                                    <td>2400</td>
                                </tr>
                                <tr>
                                    <td>Maximum sash load (kg) :</td>
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
