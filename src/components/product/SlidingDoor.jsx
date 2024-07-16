import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./productdetails.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Whatsapp from "../whatsapp/Whatsapp";
import DiffrentCategory from "./DiffrentCategory";

function ProductDetail() {
  
    // Function to scroll to top smoothly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // faq
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is uPVC sliding door?",
      answer:
        "uPVC sliding doors from White Wings are the best option if you want to install sliding doors in your home but have less space. It offers noiseless, effortless and unhindered operation of sliding system. They maintain the internal temperature of the home and offer effective sound insulation. These sliding doors are fusion welded and designed with silicone sealant and laminated glass which makes them low-maintenance in nature.",
    },
    {
      question: "How much does a uPVC sliding door cost?",
      answer:
        "uPVC sliding doors from White Wings do not require much maintenance. These type of doors are robust and sturdy and offer a long life. uPVC sliding doors cost depends on the type of doors you choose, such as bypass, pocket or sliding French doors, as well as on the mesh, handles and colours etc. Get an accurate price quote for the actual cost of uPVC sliding doors based on your specific needs.",
    },
    {
      question: "Are uPVC sliding doors good?",
      answer:
        "White Wings's range of uPVC sliding doors is robust and requires little maintenance. They offer improved quality, noise insulation, sturdy construction and are energy efficient which makes them extremely good for use.",
    },
    {
      question: "What is a standard size of uPVC sliding door?",
      answer:
        "One of the most popular designs in uPVC sliding door is the Pocket door design. These are designed to hide the profile in the wall cavity when fully opened, giving an unobstructed view of the exterior. The standard uPVC sliding door includes a single track or a 2-track sliding mechanism.",
    },
  ];
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="product-details-page">
        <Navbar />
        <div className="container">
          <h1 className="playfair">Aluminium Sliding Doors</h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">Aluminium Sliding Doors</h2>
          <p className="roboto">
            Sliding doors are equipped with two or more sashes that are placed
            on tracks that allow the doors to slide horizontally. The sliding
            mechanism can either go from left to right or vice-versa, depending
            upon the installation and when the doors are placed upon their
            tracks, the sliders can either be placed at the top of the door or
            at the bottom.{" "}
          </p>
          <div className="row">
            <div className="col-lg-6">
              <div className="main-details-img">
                <img src="../images/doordetails/slider2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-details-img">
                <img
                  src="../images/doordetails/Aluminium Sliding door.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="features">
            <div>
              <div className="wi-text">
                <div>
                  <img src="../images/product/1st.png" alt="" />
                </div>
                <div className="wi-te">
                  <h6 className="roboto">
                    {" "}
                    Our door and windows are energy efficient.
                  </h6>
                </div>
              </div>
              <div className="wi-text">
                <div>
                  <img src="../images/product/2nd.png" alt="" />
                </div>
                <div className="wi-te">
                  <h6 className="roboto">
                    {" "}
                    When the windows are closed it blocks out the outside
                    disturbances, creating a comfortable environment to
                    concentrate, enable a peaceful night's sleep.
                  </h6>
                </div>
              </div>
              <div className="wi-text">
                <div>
                  <img src="../images/product/3rd.png" alt="" />
                </div>
                <div className="wi-te">
                  <h6 className="roboto">
                    Rainwater can now no more destroy the windows and doors
                    because our doors and windows are rainwater insulated.{" "}
                  </h6>
                </div>
              </div>
              <div className="wi-text">
                <div>
                  <img src="../images/product/4th.png" alt="" />
                </div>
                <div className="wi-te">
                  <h6 className="roboto">
                    {" "}
                    Our doors and windows takes less maintenance. They will stay
                    as good as new and look aesthetically pleasing for years to
                    come.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="full-details">
                <img src="../images/productdetails/casement.png" alt="" />
            </div> */}






          <div className="catagroy_window">
            <h2 className="roboto">Category of Sliding Doors</h2>
            <div className="row">
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/aluslid1.png" alt="" />
                  </div>
                  <h3 className="roboto">SC40</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The system is a slim, yet solid and durable high quality sliding window system, which guarantees strength and durability in use. </p>
                   <Link to="/sc40" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/aluslid2.png" alt="" />
                  </div>
                  <h3 className="roboto">SC45</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The SC45 is a non-insulated sliding system for large dimensions windows. It benefits from the most innovative aesthetics making it a unique solution</p>
                   
                   <Link to="/sc45" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/aluslid3.png" alt="" />
                  </div>
                  <h3 className="roboto">SC95NI</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The SC95 is a 95 mm, non-thermally broken sliding system for windows and doors, also is a superior, high-performance  </p>
                   
                   <Link to="/sc95" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/aluslid4.png" alt="" />
                  </div>
                  <h3 className="roboto">SC95TT</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The SC95TT is a 95 mm, thermally broken sliding system for windows and doors also is a superior, high-performance sliding solution </p>
                  
                   <Link to="/sc95tt" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/aluslid5.png" alt="" />
                  </div>
                  <h3 className="roboto">S115NI</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">A laminated double-glazing unit in S115NI  brings high acoustic insulation levels, combined with a variety of configurations, which will meet any architectural need.</p>
                   <Link to="/s115" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/aluslid6.png" alt="" />
                  </div>
                  <h3 className="roboto">SC140TT</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The SC140TT is a 140 mm thermally broken sliding system for windows and doors, also suitable for the realization of lift and slide solutions. the construction of high-quality frames.</p>
                   <Link to="/sc140" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/aluslid7.png" alt="" />
                  </div>
                  <h3 className="roboto">SC140NI</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The SC14 is a 140 mm non-thermally broken sliding system for windows and doors, also suitable for the realization of lift and slide solutions. </p>
                   <Link to="/sc140ni" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/aluslid8.png" alt="" />
                  </div>
                  <h3 className="roboto">INFINEO - S146LM</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">INFINEO frameless sliding door provides a wide panoramic view with natural light and maximum comfort. Featuring a fully concealed outer frame, ultra-slim 21mm interlock</p>
                   <Link to="/s146lm" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>







          <div className="img-gallery">
            <h3 className="roboto">Image Gallery</h3>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Sliding door5.png"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>

          <DiffrentCategory />

          <div className="faq-sec">
            <h3 className="roboto">Frequently Asked Questions</h3>
            <div className="faq">
              <div className="wrapper">
                {faqs.map((faq, index) => (
                  <div className="cont-faq" key={index}>
                    <div
                      className={`question roboto ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                    </div>
                    <div
                      className="answercont"
                      style={{
                        maxHeight: activeIndex === index ? "200px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <div
                        className="answer roboto"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
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
                don’t provide a one-size-fits-all services, we work with our
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
