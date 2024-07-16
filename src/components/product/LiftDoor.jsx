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
      question: "What is lift and slide door?",
      answer:
        "Lift and slide doors operate on the principle of the lift mechanism. They have larger panels and increased thermal performance and provide easy accessibility for everyone. The choice of many homeowners, Fenesta's uPVC lift and slide doors are ergonomically designed with high functionality and offer exceptional benefits. Additionally, these doors enhance the aesthetic appeal of the home interiors effortlessly.",
    },
    {
      question: "What is the cost of a uPVC lift and slide door?",
      answer:
        "The cost of a lift and slide door depends on various factors. What kind of glass you chose (double glazed or triple glazed), the material of construction (frames), the type of handles, if you choose any mesh or grill, etc. Adding to this, the dimension of the door also plays an important role in determining the cost of a lift and slide door. Fenesta offers the best rates amongst all; get in touch with us to know more.",
    },
    {
      question: "How does a lift and slide door work?",
      answer:
        "The functioning of lift and slide doors depends on the working principle of the lift mechanism. The doors are directly fitted to the track and the handle needs to be turned to 180-degree to lift the door upon its rollers. Fenesta offers the best lift and slide doors as they are designed to offer an effortless mechanism to push or pull the door. Due to the operation of the doors, you have the flexibility of locking the door effectively in an open position, allowing for ample ventilation in a secured manner.",
    },
    {
      question: "Are lift and slide doors worth it?",
      answer:
        "Doors are much more than just the way to go out and come inside the house. A good and highly functional door can effortlessly increase the aesthetic value of your home interiors, giving your guests a welcoming vibe, offerring better and securing ventilation, and much more. Lift and slide doors are some of the best examples of the same.",
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
          <h1 className="playfair"> Aluminium Lift and Slide Door </h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto"> Aluminium Lift and Slide Door </h2>
          <p className="roboto">
            Doors can be much more than mere entry and exit points to your
            house. A testament to that fact can be found in the designs of our
            lift and slide doors. The lift and slide doors by Fenesta provide
            homes with easier accessibility for all people and offer a much
            sleeker appearance, which in turn enhances the aesthetic appeal and
            beauty of the façade of your home.{" "}
          </p>
          <div className="twinsh">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-details-img">
                  <img src="../images/doordetails/Aluminium Lift and Sliding door.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="twinsh-txet">
                  <h3 className="roboto">Versatility:</h3>
                  <p className="roboto">
                    Lift and slide Door offer versatility in ventilation. You
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
                    Lift and slide Door have been a popular architectural
                    feature for centuries and are commonly associated with
                    historical buildings.
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
          {/* <div className="full-details">
                <img src="../images/doordetails/main.png" alt="" />
            </div> */}
          <div className="img-gallery">
            <h3 className="roboto">Image Gallery</h3>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door1.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door2.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door3.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door4.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door5.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door1.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door2.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door3.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door4.png" alt="" />
                </div>
                <div>
                  <img src="../images/doordetails/Aluminium Lift and Sliding door5.png" alt="" />
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
