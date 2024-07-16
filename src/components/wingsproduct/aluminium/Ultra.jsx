import React from "react";
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
  // const [activeIndex, setActiveIndex] = useState(null);

  // const faqs = [
  //   {
  //     question: "What maintenance needed in aluminium sliding windows?",
  //     answer:
  //       "Aluminium sliding windows by Fenesta are  low-maintenance in nature and cleaning the windows from time to time is enough to keep them looking as good as new for years to come. You can use a soft cloth and a solution of water and mild soap to clean the glass, the frame and the tracks of the windows. Doing this periodically ensures smooth operation of the windows.",
  //   },
  //   {
  //     question: "Does aluminium sliding windows require regular maintenance?",
  //     answer:
  //       "Aluminium sliding windows are effortless to clean, translating to easy maintenance. All one needs to do is clean the surface with a wet cloth and mild soap to maintain its sheen and shine in the long run. Further, it's lightweight construction leads to smooth operation that helps avoid aggressive wear and tear and leads to enhanced durability.",
  //   },
  //   {
  //     question: "Which one is better? A uPVC or aluminium sliding windows?",
  //     answer:
  //       "Both Aluminium and uPVC sliding windows have their respective benefits depending on the usage. You can get in touch with out representative or visit one of our Fenesta showrooms or Signature Studios to learn about the features and benefits of both Aluminium and uPVC sliding windows and choose the one that best suits your requirements.",
  //   },
  //   {
  //     question: "What is the cost of aluminium sliding windows?",
  //     answer:
  //       "Aluminium sliding windows by Fenesta are offered in vast range of designs and colours and are engineered with precision for efficiency, longevity and easy maintenance. This makes our aluminium sliding windows a complete value for money product. You can send in an online query to get in touch with our representatives and learn about the product price based on your specific needs.",
  //   },
  // ];
  // const toggleFAQ = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };
  return (
    <>
      <div className="product-details-page">
        <Navbar />
        <div className="container">
          <h1 className="playfair">Ultra Slimline Doors </h1>
        </div>
      </div>

     {/* product details section start */}
     <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">Ultra Slimline Doors</h2>
          <p className="roboto">
          White Wings Ultra Slim Aluminium doors are robust and can be fitted with high-security locking mechanisms for peace of mind. Typically, aluminium doors are robust and can be fitted with high-security locking mechanisms for peace of mind. The outer frame can seamlessly integrate with the surrounding walls, ceiling, and floor, creating a smooth and barrier-free transition between indoor and outdoor spaces.{" "}
          </p>
          <div className="twinsh">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-details-img">
                <img src="../images/doordetails/ultra.png" alt="" />
                  {/* <img
                    src="../images/doordetails/Aluminium Fold and Sliding door.png"
                    alt=""
                  /> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="twinsh-txet">
                  <h3 className="roboto">Manual Locking:</h3>
                  <p className="roboto">
                  The multipoint locking is concealed inside the handle, double or multi lock Profile of the sliding Leaf.
                  </p>
                  <h4 className="roboto">Roller Carriage:</h4>
                  <p className="roboto">
                  This innovative design boasts high-quality stainless steel rollers that guarantee excellent load-stability and effortless operation for sliding leafs weighing up to 800 kg in daily use.
                  </p>
                  <h4 className="roboto">Stainless Steel Rail:</h4>
                  <p className="roboto">
                  The recessed stainless steel sliding rail integrated into the lower frame profile ensures smooth and noiseless operation when opening and closing the transparent components.
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
                <img src="../images/productdetails/sliding2.png" alt="" />
            </div> */}


            <div className="system_img">
              <div className="container">
                <h3> 2-track opening methods</h3>
                <img className="img-fluid" src="../images/aliminiumdetails/2-track.png" alt="" />
              </div>
            </div>
            <div className="system_img">
              <div className="container">
                <h3> 3-track opening methods</h3>
                <img className="img-fluid" src="../images/aliminiumdetails/3-track.png" alt="" />
              </div>
            </div>
            <div className="system_img">
              <div className="container">
                <h3> 4-track opening methods</h3>
                <img className="img-fluid" src="../images/aliminiumdetails/4-track.png" alt="" />
              </div>
            </div>
            <div className="system_img">
              <div className="container">
                <h3> Corner Free</h3>
                <img className="img-fluid" src="../images/aliminiumdetails/5-corner.png" alt="" />
              </div>
            </div>



        {/*   
        <div className="catagroy_window">
            <h2 className="roboto">Category of Fold and Slide Doors</h2>
            <div className="row">
              <div className="col-lg-3">
                <Link to="/door45v" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alustil1.png" alt="" />
                    </div>
                    <h3 className="roboto">45V</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The 45V is a non-insulated folding door system which provides an elegant and innovative application choice for balcony-doors, eliminating </p>
                    <Link to="/door45v" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/doorbsf70" onClick={scrollToTop}>
                  <div className="box">
                    <div className="box-img">
                      <img className="img-fluid" src="../images/aliminiumdetails/alustil2.png" alt="" />
                    </div>
                    <h3 className="roboto">BSF70NI</h3>
                    <hr />
                    <div className="box-tet">
                      <p className="roboto">The BSF70NI is a versatile and flexible, non-insulated folding door system, available in a wide range of configurations to create the look you desire.</p>
                    
                    <Link to="/doorbsf70" onClick={scrollToTop}>READ MORE...</Link>
                    </div>
                  </div>
                </Link>
              </div>
              
            </div>
           
          </div> */}





            
          <div className="img-gallery">
            <h3 className="roboto">Image Gallery</h3>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img
                    src="../images/doordetails/ultra slim1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/ultra slim2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/ultra slim3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/ultra slim4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/ultra slim1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/ultra slim2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/ultra slim3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/doordetails/ultra slim4.png"
                    alt=""
                  />
                </div>
                
              </Slider>
            </div>
          </div>
          {/* <div className="faq-sec">
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
          </div> */}
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
