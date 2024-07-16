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
      question: "Are uPVC Twinsash windows cheaper?",
      answer: `uPVC Twinsash windows come with a huge number of benefits vis-a-vis the cost you pay. They are highly durable, sturdy, and offer exemplary sound- and heat-insulation, among other benefits, which makes them worth the price. The actual cost of uPVC Twinsash windows, however, will vary depending on a number of factors. The design you choose, size of the aperture at the site, the glass option chosen, accessories opted for, etc. are some of the factors that will impact the price of your uPVC Twinsash windows.
                `,
    },
    {
      question: "How secure are uPVC Twinsash windows?",
      answer:
        "With double or toughened glass, uPVC Twinsash windows by Fenesta are equipped with multiple lock points to fortify the level of security. Fenesta offers complete flexibility in all uPVC Twinsash windows which can easily integrate any grill design to further improve security. The grill will be installed on the sill of uPVC Twinsash windows using an innovative grill adaptor. The grill can be removed or retrofitted with ease whenever you want to access the window to clean or service.",
    },
    {
      question: "Can I opt to customize uPVC Twinsash windows design?",
      answer: `Yes you can. Fenesta offers a range of styles and designs in uPVC Twinsash windows for you to choose from. Every window is custom manufactured to particular specifications, which allows for a lot of flexibility in customising the design of your uPVC Twinsash windows. You can choose from a number of colours, finishes, and glass options to design your uPVC Twinsash windows. Additionally, you can also select handles, grills, or mesh style, based on your home or office’s existing architecture.
                `,
    },
    {
      question: "What kind of maintenance do uPVC Twinsash windows require?",
      answer:
        "uPVC windows require very little maintenance. All you need to do is clean then once in a while, which you can do with a mild soap and water solution and a soft cloth.",
    },
    {
      question: "Will the color of uPVC windows fade?",
      answer:
        "The colours offered in uPVC windows by Fenesta do not fade or flake, remaining as good as new for years. Fenesta uses a unique uPVC blend which is manufactured using the highest grade of titanium di-oxide, which forms a key ingredient that is required to maintain the color of the window frames, even when exposed to harsh UV rays and adverse weather conditions.",
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
          <h1 className="playfair">UPVC Twinsash Window </h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">UPVC Twinsash Windows </h2>
          <p className="roboto">
            Twin sash windows, also known as double-hung windows, are a type of
            window design commonly found in residential and commercial
            buildings. They consist of two sashes (movable panels), one on top
            and one on bottom, that slide vertically within the window frame.
            This design allows for both sashes to be opened independently,
            providing flexibility in ventilation and maintenance. This design
            allows for both sashes to be opened independently, providing
            flexibility in ventilation and maintenance{" "}
          </p>
          <div className="twinsh">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-details-img">
                  <img src="../images/productdetails/twinshUPVC.png" alt="" />
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
                                <img src="../images/gif/w1.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Made from UV resistant UPVC to withstand India's extreme climate</h6>
                            </div>
                        </div>
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w5.gif" alt="" />
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
                                <img src="../images/gif/w3.gif" alt="" />
                            </div>
                            <div className="wi-te">
                                <h6 className='roboto'> Made from UV resistant UPVC to withstand India's extreme climate</h6>
                            </div>
                        </div>
                        <div className="wi-text">
                            <div className="wi-img">
                                <img src="../images/gif/w5.gif" alt="" />
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
                    src="../images/productdetails/UPVC twinsash window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC twinsash window5.png"
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
