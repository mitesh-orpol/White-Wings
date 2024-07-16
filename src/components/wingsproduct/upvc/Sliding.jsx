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
      question: "How to make uPVC sliding windows easier to slide?",
      answer:
        "Clean the track for any debris or dirt. Lubricate the rollers and the tracks for smooth movement. Check for any broken part and raise the service request.",
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
          <h1 className="playfair">UPVC Sliding Window & Doors </h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">UPVC Sliding Windows  & Doors  </h2>
          <p className="roboto">
            Sliding windows & Doors comprises of two or more than two horizontal sashes
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
                <img src="../images/productdetails/slidingpvc-1.png" alt="" />
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
          <div className="full-details">
            <img src="../images/productdetails/sliding2.png" alt="" />
          </div>





          <div className="investa">
            <h2 className="roboto">Inventa Series uPVC Sliding Windows & Doors </h2>
            <div className="row mt-5">
              <div className="col-lg-4">
                <img className="img-fluid" src="../images/productdetails/upvccasment.png" alt="" />
              </div>
              <div className="col-lg-8">
                <p className="roboto">Inventa Sliding uPVC Windows features are designed with maximum space for reinforcement so as to allow big size window to be made with ease. The carefully treated aesthetics gives the shine over double bevel with message of strength. It is designed with minimum air leakage to prevent dust , noise and thermal leakage.</p>
                <h4 className="roboto">Advantages:</h4>
                <li className="roboto">Aesthetics are judiciously designed to ensure strength and shine over double bevel.</li>
                <li className="roboto">Designed with minimum air leakage to prevent dust, noise and thermal leakage.</li>
                <li className="roboto">Allows more light and better view with minimum vertical separator.</li>
                <li className="roboto">Strength of window is further enhanced with wind resistance booster bars.</li>
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
                    <td>900</td>
                    <td>450</td>
                    <td>2400</td>
                    <td>2400</td>
                  </tr>
                  <tr>
                    <td>Sash size</td>
                    <td>450</td>
                    <td>450</td>
                    <td>1200</td>
                    <td>2400</td>
                  </tr>
                </tbody>
              </table>
              <p className="roboto">All dimensions are in mm</p>
            </div>
          </div>

          <div className="investa">
            <h2 className="roboto">Optima Series uPVC Sliding Windows  & Doors </h2>
            <div className="row mt-5">
              <div className="col-lg-4">
                <img className="img-fluid" src="../images/productdetails/upvccasment.png" alt="" />
              </div>
              <div className="col-lg-8">
                <p className="roboto">Optima Sliding uPVC Windows are designed to balance feature , design possibility and to accommodate upto medium size windows. It is designed for many properties , due to space constraint , offers medium size windows. It offers advantages of design simplicity in choice and handling. Optima sliders functionally comply to wind load requirements desired for medium size windows.</p>
                <h4 className="roboto">Advantages:</h4>
                <li className="roboto">These are designed to balance feature & simplicity.</li>
                <li className="roboto">Uniform aesthetics across Prominance systems allows integration of inventa and optima system with ease.</li>
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
                    <td>900</td>
                    <td>450</td>
                    <td>1500</td>
                    <td>1500</td>
                  </tr>
                  <tr>
                    <td>Sash size</td>
                    <td>450</td>
                    <td>450</td>
                    <td>750</td>
                    <td>1500</td>
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
                    src="../images/productdetails/UPVC sliding window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window5.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/productdetails/UPVC sliding window5.png"
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
