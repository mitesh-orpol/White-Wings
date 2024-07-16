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
    // speed: 2000,
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
      question: "What is aluminum casement window?",
      answer: `A aluminium casement window is one which is mounted into a frame. The window can open inwards or outwards on a cracker or hinge. Most casement windows are outward opening but you can have a casement window to open inwards if you desire.`,
    },
    {
      question: "What is a casement window used for?",
      answer:
        "If you are looking for a window that offers ventilation, a casement window is a good choice. Casement windows are commonly used in places where maximum ventilation is desired, such as a kitchen or a bathroom. They can also be found over an obstruction like a kitchen sink to make opening and closing easier.",
    },
    {
      question: "Can casement windows be broken into?",
      answer: `To break in through a casement window, a thief would have to actually break the glass. And of course you can prevent that from occurring by choosing tempered or laminated glass for your replacement windows, which a burglar would have to hit repeatedly, making a lot of noise, to break.
                `,
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
          <h1 className="playfair">Aluminium Casement Window & Doors</h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">Aluminium Casement Windows & Doors</h2>
          <p className="roboto">
            Casement windows have gained significant popularity in both private
            residences and commercial establishments due to their exceptional
            design and functionality. These windows feature a unique design
            where the window pane is affixed to the frame using side hinges. One
            of the standout advantages of casement windows is their ability to
            open inwards or outwards, allowing for optimal airflow and
            ventilation in any room. Additionally, they are available in single
            or double pane options and provide remarkable energy efficiency.{" "}
          </p>
          <div className="row">
            <div className="col-lg-7">
              <div className="main-details-img">
                <img src="../images/productdetails/main1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="main-details-img">
                <img src="../images/aliminiumdetails/casement.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* <div className="features">
                <div className="row">
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
                                <img src="../images/gif/w2.gif" alt="" />
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
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w3.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Integrated insect screen solution to keep out mosquitoes and flies</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w2.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Made from UV resistant UPVC to withstand India's extreme climate</h6>
                            </div>
                        </div>
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w1.gif" alt="" />
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
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w5.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Integrated insect screen solution to keep out mosquitoes and flies</h6>
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
                <img src="../images/productdetails/casement.png" alt="" />
            </div> */}





          <div className="catagroy_window">
            <h2 className="roboto">Category of Casement Windows & Doors</h2>
            <div className="row">
              <div className="col-lg-3">
                <Link to="/aluminium/casementalu/40n" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alucase1.png" alt="" />
                    </div>
                    <h3 className="roboto">40N</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">A casement window system of 40mm wide module with a range of economical and high performance products for glazing system choice of 4 - 26mm </p>
                    <Link to="/aluminium/casementalu/40n" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/casementalu/45ds" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img  className="img-fluid" src="../images/aliminiumdetails/alucase2.png" alt="" />
                    </div>
                    <h3 className="roboto">45DS</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The 45DS is a 45 mm, non-insulated door system that offers optimized design, yet affordable solution for all construction types requiring good weather performances</p>
                    
                    <Link to="/aluminium/casementalu/45ds" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>                
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/casementalu/56lw" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alucase3.png" alt="" />
                    </div>
                    <h3 className="roboto">56IW-IWL-ID</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The 56IW Casement Window series & 56ID Door series, characterized by a section of 56mm, is used in applications where affordable thermal break solutions are required.</p>
                    
                    <Link to="/aluminium/casementalu/56lw" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/casementalu/b60" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alucase4.png" alt="" />
                    </div>
                    <h3 className="roboto">B60</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The B60 is a non-insulated series suitable for the production of large windows and doors, with and without armor.It provides an aesthetically pleasing appearance</p>
                    
                    <Link to="/aluminium/casementalu/b60" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <Link to="/aluminium/casementalu/67iw" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alucase5.png" alt="" />
                    </div>
                    <h3 className="roboto">67IW-IWL-ID</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">A complete and versatile 67mm, thermally broken series suitable for all construction and satisfying different styles of modern aesthetics.</p>
                    <Link to="/aluminium/casementalu/67iw" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/aluminium/casementalu/b70" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alucase6.png" alt="" />
                    </div>
                    <h3 className="roboto">B70</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">This system is bullet proof certified and anti burglar to ensure high level of safety, thus suitable for all environment such as courts and jewelers.</p>
                    <Link to="/aluminium/casementalu/b70" onClick={scrollToTop}>READ MORE...</Link>
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
                    src="../images/aliminiumdetails/Aluminium casement window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium casement window5.png"
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
