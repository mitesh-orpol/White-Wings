import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./productdetails.css";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Whatsapp from "../../whatsapp/Whatsapp";

function UpvcFoldSliderDoor() {
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
          <h1 className="playfair">UPVC Fold and Slide Door</h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">UPVC Fold and Slide Door</h2>
          <p className="roboto">
          UPVC Fold and Slide Door, also known as a French casement door, is a type of
            door that is hinged on the side and opens outward or inward, similar
            to a casement window. These doors are popular for their elegant
            design, ease of operation, and ability to provide unobstructed views
            and ample ventilation.{" "}
          </p>
          <div className="row">
            <div className="col-lg-7">
              <div className="main-details-img">
                <img src="../images/doordetails/cement3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="main-details-img">
                <img src="../images/UPVCDoor/UPVC Fold and Slide door.png" alt="" />
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






          <div className="investa">
            <h2 className="roboto">Inventa Series uPVC Fold and Slide Doors</h2>
            <div className="row mt-5">
              <div className="col-lg-4">
                <img className="img-fluid" src="../images/productdetails/upvccasment.png" alt="" />
              </div>
              <div className="col-lg-8">
                <p className="roboto">Inventa Sliding uPVC Doors are ideal for architecture which promotes more light and open space. Our 3 track 3 shutter or 3 track 6 shutters gives ample choice for architects. It can be used as large balcony door and Floor to ceiling windows. Designed with maximum space for reinforcement supporting large sized windows/doors.</p>
                <h4 className="roboto">Advantages:</h4>
                <li className="roboto">Aesthetics are judiciously designed to ensure strength and shine over double bevel.</li>
                <li className="roboto">Designed with minimum air leakage to prevent dust, noise and thermal leakage</li>
                <li className="roboto">Allows more light and better view with minimum vertical separator.</li>
                <li className="roboto">Strength of window is further enhanced with wind resistance booster bars to allow bigger size window to be made.</li>
              </div>
            </div>
            <div className="table_show">
              <table class="table table-hover" border="1" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th rowspan="2"></th>
                    <th colspan="2">Minimum</th>
                    <th colspan="2">Maximum</th>
                  </tr>
                  <tr>
                    <th>Width</th>
                    <th>Height</th>
                    <th>Width</th>
                    <th>Height</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Window Size</td>
                    <td>600</td>
                    <td>1950</td>
                    <td>5200</td>
                    <td>2400</td>
                  </tr>
                  <tr>
                    <td>Sash size</td>
                    <td>600</td>
                    <td>1950</td>
                    <td>1000</td>
                    <td>2400</td>
                  </tr>
                </tbody>
              </table>
              <p className="roboto">All dimensions are in mm</p>
            </div>
          </div>






          <div className="img-gallery">
            <h3 className="roboto">Image Gallery</h3>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/UPVCDoor/UPVC Fold and Slide door5.png"
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

export default UpvcFoldSliderDoor;
