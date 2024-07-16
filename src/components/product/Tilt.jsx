import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./productdetails.css";
import Footer from "../footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Whatsapp from "../whatsapp/Whatsapp";

function ProductDetail() {
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
      question: "Are tilt and turn windows expensive?",
      answer:
        "Tilt and turn windows are said to be one of the most versatile windows. They are a premium category of windows that offer a plethora of benefits to homeowners. Installed to offer insulation and ample sunlight, the tilt and turn windows are stylish and give your home interiors a contemporary look. Adding to this, the windows provide protection against rain, offers draft-free ventilation, and much more. The windows are termite and corrosion resistant, making them an ideal choice for home windows. Though the price might be a little on the higher side, tilt and turn windows are a one-time investment that is extremely durable and stands strong for years.",
    },
    {
      question: "How do tilt and turn windows work?",
      answer:
        "Tilt and turn windows work by either turning and opening in the conventional manner or tilting for controlled ventilation. They are available in a range of designs which you can further customize in terms of the handle, mesh, glass, and colour of the window based on the architectural style of your space. Their working is further complemented by high durability and the ability to provide rain protection.",
    },
    {
      question: "What is the cost of a tilt and turn window?",
      answer:
        "The actual cost of fitting the tilt and turn windows depend on several factors. These factors include the dimension, type of glazing, the frame material, type of mesh (if any), and so on. Adding to this, the rate of fenestration also depends on the colour and handles chosen by the homeowner/customer. At Fenesta, you can find uPVC tilt and turn windows in different colours, sizes, trims, etc., that you can select from. Our windows are made of high-quality materials and designed to offer excellent benefits with state-of-the-art features.",
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
          <h1 className="playfair">UPVC Tilt and Turn Window </h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">UPVC Tilt and Turn Windows </h2>
          <p className="roboto">
            Tilt and turn windows are renowned for their remarkable versatility.
            This type of window features a sash that can tilt and open at a
            specific angle from the top and also swing inward. With their
            state-of-the-art design, tilt and turn windows exude elegance and
            sophistication. Whether you opt for a large or small size, you can
            be assured of an aesthetically appealing window style.{" "}
          </p>
          <div className="twinsh">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-details-img">
                  <img
                    src="../images/productdetails/UPVC tilt and turn window.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="twinsh-txet">
                  <h3 className="roboto">Versatility:</h3>
                  <p className="roboto">
                    Twin sash windows offer versatility in ventilation. You can
                    open either the top or bottom sash, or both simultaneously,
                    allowing you to control the airflow and maintain desired
                    indoor comfort levels.
                  </p>
                  <h4 className="roboto">Easy Maintenance:</h4>
                  <p className="roboto">
                    Easy Maintenance: Since both sashes are operable, cleaning
                    and maintenance are relatively easy.
                  </p>
                  <h4 className="roboto">Historical Charm:</h4>
                  <p className="roboto">
                    Twin sash windows have been a popular architectural feature
                    for centuries and are commonly associated with historical
                    buildings.
                  </p>
                </div>
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
                                <img src="../images/gif/w3.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Superior Insulation from outside heat as uPVC is a poor conductor of Heat</h6>
                            </div>
                        </div>
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w2.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Very Low thermal expansion/contraction, retains shape, sheen and color for years</h6>
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
                        
                    </div>
                </div>
            </div> */}
          {/* <div className="full-details">
                <img src="../images/productdetails/sliding2.png" alt="" />
            </div> */}
          <div className="img-gallery">
            <h3 className="roboto">Image Gallery</h3>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC tilt and turn window5.png"
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
