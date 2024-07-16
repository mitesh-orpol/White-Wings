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
      question: "How do vertical windows work?",
      answer: `Whether you refer to them as sash windows, box sash windows or sliding sash windows, there is only one way to operate them. Sash windows are comprised of a window with one or two sashes which can be opened vertically by pushing and sliding the lower sash upwards.
                `,
    },
    {
      question: "What are vertical opening windows called?",
      answer:
        "Hung windows are operable windows that slide open and closed vertically along the sides of the window frame (called the jambs). Like sliding windows, hung styles are very popular due to their simplicity, ease of use, and cost-effectiveness. They also come in two styles — Single Hung and Double Hung Windows",
    },

    {
      question: "What are the advantages of aluminium window frames?",
      answer:
        "Aluminium profiles are also characterised by the greatest stability among the materials used for windows. They are lightweight and durable, making them the best choice for the installation of large and heavy glazing. A typical frame can hold burglar-proof glass packages weighing as much as 50-60 kg/m2!",
    },
    {
      question: "Which glass is best for aluminium window?",
      answer:
        "Laminated Glass in aluminium window,Due to its excellent sturdiness and other functional qualities, laminated glass is currently becoming more popular. As the name suggests, a layer of polyvinyl butyral (PVB) film is sandwiched between the two sheets of glass to form a connection.",
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
          <h1 className="playfair">Aluminium Vertical Sliding Window </h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">Aluminium Vertical Sliding Windows </h2>
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
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window.png"
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
          {/* <div className="features">
            <div className="row">
              <div className="col-lg-6">
                <div className="wi-text">
                  <div className="wi-img">
                    <img src="../images/gif/w1.gif" alt="" />
                  </div>
                  <div className="wi-te">
                    <h6 className="roboto">
                      {" "}
                      Made from UV resistant UPVC to withstand India's extreme
                      climate
                    </h6>
                  </div>
                </div>
                <div className="wi-text">
                  <div className="wi-img">
                    <img src="../images/gif/w2.gif" alt="" />
                  </div>
                  <div className="wi-te">
                    <h6 className="roboto">
                      {" "}
                      Superior Insulation from outside heat as uPVC is a poor
                      conductor of Heat
                    </h6>
                  </div>
                </div>
                <div className="wi-text">
                  <div className="wi-img">
                    <img src="../images/gif/w3.gif" alt="" />
                  </div>
                  <div className="wi-te">
                    <h6 className="roboto">
                      {" "}
                      Very Low thermal expansion/contraction, retains shape,
                      sheen and color for years
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="wi-text">
                  <div className="wi-img">
                    <img src="../images/gif/w5.gif" alt="" />
                  </div>
                  <div className="wi-te">
                    <h6 className="roboto">
                      {" "}
                      Made from UV resistant UPVC to withstand India's extreme
                      climate
                    </h6>
                  </div>
                </div>
                <div className="wi-text">
                  <div className="wi-img">
                    <img src="../images/gif/w3.gif" alt="" />
                  </div>
                  <div className="wi-te">
                    <h6 className="roboto">
                      {" "}
                      Superior Insulation from outside heat as uPVC is a poor
                      conductor of Heat
                    </h6>
                  </div>
                </div>
                <div className="wi-text">
                  <div className="wi-img">
                    <img src="../images/gif/w5.gif" alt="" />
                  </div>
                  <div className="wi-te">
                    <h6 className="roboto">
                      {" "}
                      Very Low thermal expansion/contraction, retains shape,
                      sheen and color for years
                    </h6>
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
          <div className="img-gallery">
            <h3 className="roboto">Image Gallery</h3>
            <div className="slider-container">
              <Slider {...settings}>
              <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/aliminiumdetails/Aluminium Vertical sliding window5.png"
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
