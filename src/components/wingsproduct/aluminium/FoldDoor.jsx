import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./productdetails.css";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Whatsapp from "../../whatsapp/Whatsapp";

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
    speed: 1000,
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
      question: "What is a slide and fold door?",
      answer:
        "Slide and fold doors, often known as bi-fold sliding doors is a folding & sliding glass doors that can be a key architectural element that distinguishes your home. Choosing to install Fenesta uPVC sliding & folding doors will be a great addition to your house since they will help create a contemporary atmosphere for you to relax, play, and work in. They are, without a doubt, one of the most effective and beautiful ways to open up your home without sacrificing on the open space inside.",
    },
    {
      question: "Till what point uPVC slide and fold doors can open",
      answer:
        "Fenesta uPVC bi-fold sliding doors come with a variety of customization options. These doors can be opened to any width within the set frame. When compared to other door types, their ability to be opened out of or into a room and folded to the side provides a great deal of versatility. Furthermore, Fenesta uPVC slide and fold doors are a perfect fit because they are made precisely with the calculated measurements of your fixtures in mind.",
    },
    {
      question: "How much do uPVC slide and fold doors cost?",
      answer:
        "The cost of the multi-slide doors will be well worth the investment when you consider the several benefits they provide. Fenesta ensures you get aesthetically superior products along with precise installation, whether it is the sliding & folding wardrobe doors, a bi-fold sliding barn door, a 3-fold sliding door, or even an uPVC bi-fold or tri-fold folding & sliding patio door.",
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
          <h1 className="playfair">Aluminium Fold and Slide Door </h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">Aluminium Fold and Slide Door </h2>
          <p className="roboto">
            Folding & sliding doors or bi-fold sliding doors can be just the
            architectural feature that makes your home stand out. Choosing to
            install uPVC sliding & folding doors by Fenesta will prove to be a
            brilliant addition for your home as they will help create a stunning
            and contemporary environment for you to rest, play, and work in.{" "}
          </p>
          <div className="twinsh">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-details-img">
                <img src="../images/doordetails/cement3.png" alt="" />
                  {/* <img
                    src="../images/doordetails/Aluminium Fold and Sliding door.png"
                    alt=""
                  /> */}
                </div>
              </div>
              <div className="col-lg-6">
              <div className="main-details-img">
                <img
                    src="../images/doordetails/Aluminium Fold and Sliding door.png"
                    alt=""
                  />
              </div>
                {/* <div className="twinsh-txet">
                  <h3 className="roboto">Versatility:</h3>
                  <p className="roboto">
                    Fold and Slide Door offer versatility in ventilation. You
                    can open either the top or bottom sash, or both
                    simultaneously, allowing you to control the airflow and
                    maintain desired indoor comfort levels.
                  </p>
                  <h4 className="roboto">Easy Maintenance:</h4>
                  <p className="roboto">
                    Easy Maintenance: Since both sashes are operable, cleaning
                    and maintenance are relatively easy.
                  </p>
                  <h4 className="roboto">Historical Charm:</h4>
                  <p className="roboto">
                    Fold and Slide Door have been a popular architectural
                    feature for centuries and are commonly associated with
                    historical buildings.
                  </p>
                </div> */}
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
                <img src="../images/productdetails/sliding2.png" alt="" />
            </div> */}






        <div className="catagroy_window">
            <h2 className="roboto">Category of Fold and Slide Doors</h2>
            <div className="row">
              <div className="col-lg-3">
                <Link to="/aluminium/foldDoor/door45v" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alustil1.png" alt="" />
                    </div>
                    <h3 className="roboto">45V</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The 45V is a non-insulated folding door system which provides an elegant and innovative application choice for balcony-doors, eliminating </p>
                    <Link to="/aluminium/foldDoor/door45v" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/foldDoor/doorbsf70" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alustil2.png" alt="" />
                    </div>
                    <h3 className="roboto">BSF70NI</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The BSF70NI is a versatile and flexible, non-insulated folding door system, available in a wide range of configurations to create the look you desire.</p>
                    
                    <Link to="/aluminium/foldDoor/doorbsf70" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              
            </div>
           
          </div>





            
          <div className="img-gallery">
            <h3 className="roboto">Image Gallery</h3>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/Aluminium Fold and Sliding door5.png"
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
