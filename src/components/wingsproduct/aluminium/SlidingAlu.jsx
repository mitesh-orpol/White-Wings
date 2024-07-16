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
      question: "What maintenance needed in aluminium sliding windows?",
      answer:
        "Aluminium sliding windows by Fenesta are  low-maintenance in nature and cleaning the windows from time to time is enough to keep them looking as good as new for years to come. You can use a soft cloth and a solution of water and mild soap to clean the glass, the frame and the tracks of the windows. Doing this periodically ensures smooth operation of the windows.",
    },
    {
      question: "Does aluminium sliding windows require regular maintenance?",
      answer:
        "Aluminium sliding windows are effortless to clean, translating to easy maintenance. All one needs to do is clean the surface with a wet cloth and mild soap to maintain its sheen and shine in the long run. Further, it's lightweight construction leads to smooth operation that helps avoid aggressive wear and tear and leads to enhanced durability.",
    },
    {
      question: "Which one is better? A uPVC or aluminium sliding windows?",
      answer:
        "Both Aluminium and uPVC sliding windows have their respective benefits depending on the usage. You can get in touch with out representative or visit one of our Fenesta showrooms or Signature Studios to learn about the features and benefits of both Aluminium and uPVC sliding windows and choose the one that best suits your requirements.",
    },
    {
      question: "What is the cost of aluminium sliding windows?",
      answer:
        "Aluminium sliding windows by Fenesta are offered in vast range of designs and colours and are engineered with precision for efficiency, longevity and easy maintenance. This makes our aluminium sliding windows a complete value for money product. You can send in an online query to get in touch with our representatives and learn about the product price based on your specific needs.",
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
          <h1 className="playfair">Aluminum Sliding Window & Doors </h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">Aluminum Sliding Windows & Doors</h2>
          <p className="roboto">
            Sliding windows comprises of two or more than two horizontal sashes
            that are fitted with rollers at the base for smooth sideward track
            movement. Easy to operate, these windows offer panoramic views and a
            great amount of ventilation. The contemporary sliding window design
            has always been a popular choice for house and office windows. These
            windows add finesse to any room and can elevate the style quotient
            of any space without compromising on the fenestration requirements.{" "}
          </p>
          <div className="row">
            <div className="col-lg-7">
              <div className="main-details-img">
                <img src="../images/productdetails/sliding1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="main-details-img">
                <img src="../images/aliminiumdetails/sliding.png" alt="" />
              </div>
            </div>
          </div>
          {/* <div className="features">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w1.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Made from UV resistant UPVC to withstand India's extreme climate</h6>
                            </div>
                        </div>
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w2.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Superior Insulation from outside heat as uPVC is a poor conductor of Heat</h6>
                            </div>
                        </div>
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w3.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Very Low thermal expansion/contraction, retains shape, sheen and color for years</h6>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w5.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Made from UV resistant UPVC to withstand India's extreme climate</h6>
                            </div>
                        </div>
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w3.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Superior Insulation from outside heat as uPVC is a poor conductor of Heat</h6>
                            </div>
                        </div>
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w1.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Very Low thermal expansion/contraction, retains shape, sheen and color for years</h6>
                            </div>
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
                <img src="../images/productdetails/sliding2.png" alt="" />
            </div> */}





          <div className="catagroy_window">
            <h2 className="roboto">Category of Sliding Windows & Door</h2>
            <div className="row">
              <div className="col-lg-3">
                <Link to="/aluminium/slidingalu/windowSC40" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/aluslid1.png" alt="" />
                    </div>
                    <h3 className="roboto">SC40</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The system is a slim, yet solid and durable high quality sliding window system, which guarantees strength and durability in use. </p>
                    <Link to="/aluminium/slidingalu/windowSC40" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/slidingalu/windowSC45" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/aluslid2.png" alt="" />
                    </div>
                    <h3 className="roboto">SC45</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The SC45 is a non-insulated sliding system for large dimensions windows. It benefits from the most innovative aesthetics making it a unique solution</p>
                    
                    <Link to="/aluminium/slidingalu/windowSC45" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/slidingalu/windowSC95" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/aluslid3.png" alt="" />
                    </div>
                    <h3 className="roboto">SC95NI</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The SC95 is a 95 mm, non-thermally broken sliding system for windows and doors, also is a superior, high-performance  </p>
                    
                    <Link to="/aluminium/slidingalu/windowSC95" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/slidingalu/windowSC95TT" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/aluslid4.png" alt="" />
                    </div>
                    <h3 className="roboto">SC95TT</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The SC95TT is a 95 mm, thermally broken sliding system for windows and doors also is a superior, high-performance sliding solution </p>
                    
                    <Link to="/aluminium/slidingalu/windowSC95TT" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <Link to="/aluminium/slidingalu/windowS115" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/aluslid5.png" alt="" />
                    </div>
                    <h3 className="roboto">S115NI</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">A laminated double-glazing unit in S115NI  brings high acoustic insulation levels, combined with a variety of configurations, which will meet any architectural need.</p>
                    <Link to="/aluminium/slidingalu/windowS115" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/slidingalu/windowSC140" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/aluslid6.png" alt="" />
                    </div>
                    <h3 className="roboto">SC140TT</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The SC140TT is a 140 mm thermally broken sliding system for windows and doors, also suitable for the realization of lift and slide solutions. the construction of high-quality frames.</p>
                    <Link to="/aluminium/slidingalu/windowSC140" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/slidingalu/windowSC140NI" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/aluslid7.png" alt="" />
                    </div>
                    <h3 className="roboto">SC140NI</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The SC14 is a 140 mm non-thermally broken sliding system for windows and doors, also suitable for the realization of lift and slide solutions. </p>
                    <Link to="/aluminium/slidingalu/windowSC140NI" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/slidingalu/windowS146LM" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/aluslid8.png" alt="" />
                    </div>
                    <h3 className="roboto">INFINEO - S146LM</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">INFINEO frameless sliding door provides a wide panoramic view with natural light and maximum comfort. Featuring a fully concealed outer frame, ultra-slim 21mm interlock</p>
                    <Link to="/aluminium/slidingalu/windowS146LM" onClick={scrollToTop}>READ MORE...</Link>
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
                    src="../images/aliminiumdetails/Aluminium sliding window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium sliding window5.png"
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
                <Link to="/contact" className="roboto">
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
