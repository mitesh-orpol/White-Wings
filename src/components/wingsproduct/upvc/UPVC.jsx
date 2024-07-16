import React from "react";
import Navbar from "../../navbar/Navbar";
import "./product.css";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Whatsapp from "../../whatsapp/Whatsapp";

function Product() {
  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="product-page">
        <Navbar />
        <div className="container">
          <h1 className="playfair">UPVC Windows & Doors</h1>
        </div>
      </div>

      <div className="main-product">
        <div className="container">
          <h1 className="roboto">UPVC Windows & Doors</h1>
          <p className="roboto">
          Being the best among uPVC Windows & Doors manufacturers in the country, White
            Wings brings to you an extensive range of gorgeous and exquisite
            window designs that will not only transform the façade of your space
            but also protect your home from harsh elements of the outside world.{" "}
          </p>
          <div className="small-image-pr">
            <div className="row">
              {/* <div className="col-lg-1"></div> */}
              <div className="col-lg-4">
                <div className="box">
                  <img src="./images/product/sm3.png" alt="" />
                </div>
                <h6 className="roboto">Sliding Window & Doors</h6>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <img src="./images/product/sm2.png" alt="" />
                </div>
                <h6 className="roboto">Casement Window & Doors</h6>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <img src="./images/product/sm6.png" alt="" />
                </div>
                <h6 className="roboto">Folding and Sliding Window & Doors </h6>
              </div>
              
              {/* <div className="col-lg-2">
                <div className="box">
                  <img src="./images/product/sm4.png" alt="" />
                </div>
                <h6 className="roboto">Vertical Sliding Window</h6>
              </div>
              <div className="col-lg-2">
                <div className="box">
                  <img src="./images/product/sm5.png" alt="" />
                </div>
                <h6 className="roboto">Tilt & Turn Window</h6>
              </div> */}
            </div>
          </div>

          <div className="all-product">
            <div className="row">
                <div className="col-lg-4 mb-5">
                <Link to="/UPVC/sliding" onClick={scrollToTop}>
                  <div class="card">
                    <div className="wind-imd">
                      <img
                        src="./images/product/w-11.png"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 className="roboto">
                        {" "}
                        <img src="./images/gif/w1.gif" alt="" /> Sliding Window & Doors{" "}
                      </h5>
                      <p>
                        The Elite Twin Sash window is meant to supply final
                        flexibility for fabricators and purchasers alike.
                      </p>
                      <div className="more">
                        <Link
                          to="/UPVC/sliding"
                          onClick={scrollToTop}
                          className="roboto"
                        >
                          Read More <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
                </div>
                <div className="col-lg-4 mb-5">
                    <Link to="/UPVC/casement" onClick={scrollToTop}>
                    <div class="card">
                        <div className="wind-imd">
                        <img
                            src="./images/product/w-14.png"
                            class="card-img-top"
                            alt="..."
                        />
                        </div>
                        <div class="card-body"> 
                        <h5 className="roboto">
                            {" "}
                            <img
                            className="icon"
                            src="./images/product/sm2.png"
                            alt=""
                            />{" "}
                            Casement Window  & Doors{" "}
                        </h5>
                        <p className="mt-4">
                            Casement windows are great for adding fresh air with
                            ease. They're hinged on the side and crank open outward
                            like a door.
                        </p>
                        <div className="more">
                            <Link
                            to="/UPVC/casement"
                            onClick={scrollToTop}
                            className="roboto"
                            >
                            Read More <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-5">
                    <Link to="/UPVC/folding" onClick={scrollToTop}>
                    <div class="card">
                        <div className="wind-imd">
                        <img
                            src="./images/door/UpvcDoor2.png"
                            class="card-img-top"
                            alt="..."
                        />
                        </div>
                        <div class="card-body">
                        <h5 className="roboto">
                            {" "}
                            <img src="./images/gif/d3.gif" alt="" />Folding and Sliding Doors{" "}
                        </h5>
                        <p>
                            Folding and Sliding Doors windows are easier to open and close, allowing
                            homeowners to bring in fresh air whenever needed.
                        </p>
                        <div className="more">
                            <Link
                            to="/UPVC/folding"
                            onClick={scrollToTop}
                            className="roboto"
                            >
                            Read More <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            
          </div>
          {/* <div className="related-product">
          <h2 className='roboto'>Related Projects</h2>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="related-bg">
                <img src="../images/product/r-1.png" alt="" />
                <div className="box">
                  <h5>New Light Luxury Apartment</h5>
                  <p>Mumbai, IN</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="related-bg">
                <img src="../images/product/r-2.png" alt="" />
                <div className="box">
                  <h5>New Light Luxury Apartment</h5>
                  <p>Mumbai, IN</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="related-bg">
                <img src="../images/product/r-3.png" alt="" />
                <div className="box">
                  <h5>New Light Luxury Apartment</h5>
                  <p>Mumbai, IN</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          <div className="bene">
            <h2 className="roboto">Features & Benefits</h2>
            <p className="roboto">
              Our high-performance windows add an architectural dimension to
              your home. White Wings Windows keep out street noise, dust,
              pollution, rain and gale forcewinds. At the same time, they are
              energy efficient, low maintenance, and long-lasting
            </p>
            <div className="row">
              <div className="col-lg-3 mb-4">
                <div className="box">
                  <img src="./images/product/i1.png" alt="" />
                  <h5 className="roboto">Weather Resistant</h5>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="box">
                  <img src="./images/product/i2.png" alt="" />
                  <h5 className="roboto">Noise Insulation</h5>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="box">
                  <img src="./images/product/i3.png" alt="" />
                  <h5 className="roboto">Rainwater Insulation</h5>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="box">
                  <img src="./images/product/i4.png" alt="" />
                  <h5 className="roboto">Low Maintenance</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* swich section start */}
      <div className="swich-door">
        <Link to="/aluminium" onClick={scrollToTop}>
          <div className="do">
            <img src="../images/gif/d2.gif" alt="" />
            <h5>
              Switch to <br /> Aluminium
            </h5>
          </div>
        </Link>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
}

export default Product;
