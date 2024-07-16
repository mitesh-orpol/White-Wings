import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./productdetails.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Whatsapp from "../whatsapp/Whatsapp";

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
    speed: 2000,
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
      question: "What is Aluminium casement door?",
      answer:
        "Aluminium casement doors can be designed with an inward or outward opening as required with a low threshold door base, which is both wheelchair and pushchair friendly. An aluminium French door configuration is the perfect option for larger openings or for modern Juliet balconies to upper floors.",
    },
    {
      question: "How long does a uPVC casement door last?",
      answer:
        "The uPVC casement door is minimal maintenance in nature; it has a long lifespan depending on the care taken. As a result, Fenesta's uPVC fittings have become the standard for doors and windows in both homes and offices.",
    },
    {
      question: "Does uPVC casement door expand and contract?",
      answer:
        "No, it does not expand or contract since White Wings provides the highest quality UPVC casement doors, whether they are in rooms with views of gardens and terraces or serve as the main entry. These are new-generation uPVC casement doors that are adjoined by numerous sashes in an innovative mechanism, courtesy of our highly skilled team of fenestration experts.",
    },
    {
      question: "What is the maintenance cost of uPVC casement doors?",
      answer:
        "Maintenance of uPVC casement doors is minimal. Our uPVC casement doors come in a range of colour options and are built with only the best materials.",
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
          <h1 className="playfair">Aluminium Casement Door</h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">Aluminium Casement Door</h2>
          <p className="roboto">
            A casement door, also known as a French casement door, is a type of
            door that is hinged on the side and opens outward or inward, similar
            to a casement window. These doors are popular for their elegant
            design, ease of operation, and ability to provide unobstructed views
            and ample ventilation.{" "}
          </p>
          <div className="row">
            <div className="col-lg-7">
              <div className="main-details-img">
                <img src="../images/doordetails/cement2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="main-details-img">
                <img
                  src="../images/doordetails/Aluminium casement door.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <div className="features">
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
          </div> */}
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
                <img src="../images/doordetails/main.png" alt="" />
            </div> */}



          <div className="catagroy_window">
            <h2 className="roboto">Category of Casement Doors</h2>
            <div className="row">
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/alucase1.png" alt="" />
                  </div>
                  <h3 className="roboto">40N</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">A casement window system of 40mm wide module with a range of economical and high performance products for glazing system choice of 4 - 26mm </p>
                   <Link to="/door40N" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img  className="img-fluid" src="../images/aliminiumdetails/alucase2.png" alt="" />
                  </div>
                  <h3 className="roboto">45DS</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The 45DS is a 45 mm, non-insulated door system that offers optimized design, yet affordable solution for all construction types requiring good weather performances</p>
                   
                   <Link to="/door45ds" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/alucase3.png" alt="" />
                  </div>
                  <h3 className="roboto">56IW-IWL-ID</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The 56IW Casement Window series & 56ID Door series, characterized by a section of 56mm, is used in applications where affordable thermal break solutions are required.</p>
                   
                   <Link to="/door56iw" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/alucase4.png" alt="" />
                  </div>
                  <h3 className="roboto">B60</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">The B60 is a non-insulated series suitable for the production of large windows and doors, with and without armor.It provides an aesthetically pleasing appearance</p>
                  
                   <Link to="/doorb60" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/alucase5.png" alt="" />
                  </div>
                  <h3 className="roboto">67IW-IWL-ID</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">A complete and versatile 67mm, thermally broken series suitable for all construction and satisfying different styles of modern aesthetics.</p>
                   <Link to="/door67iw" onClick={scrollToTop}>READ MORE...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box">
                  <div className="box-img">
                    <img className="img-fluid" src="../images/aliminiumdetails/alucase6.png" alt="" />
                  </div>
                  <h3 className="roboto">B70</h3>
                  <hr />
                  <div className="box-tet">
                    <p className="roboto">This system is bullet proof certified and anti burglar to ensure high level of safety, thus suitable for all environment such as courts and jewelers.</p>
                   <Link to="/doorb70" onClick={scrollToTop}>READ MORE...</Link>
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
                    src="../images/doordetails/Aluminium casement door1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium casement door5.png"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
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
