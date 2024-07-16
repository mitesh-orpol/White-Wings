import React, { useRef, useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./style.css";
import "./media.css";
import Footer from "../footer/Footer";
import ScrollReveal from "scrollreveal";
import Testimonial from "../slider/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { Link } from "react-router-dom";
import Whatsapp from "../whatsapp/Whatsapp";

function Home() {
  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 800,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // mouse hover to image 3d
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(500px) scale(1) rotateX(0) rotateY(0)",
  });

  const elementRef = useRef(null);

  function handleMove(e) {
    const el = elementRef.current;
    const height = el.clientHeight;
    const width = el.clientWidth;

    const xVal = e.nativeEvent.layerX;
    const yVal = e.nativeEvent.layerY;
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
    const string =
      "perspective(500px) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";
    setTiltStyle({ transform: string });
  }

  function handleMouseOut() {
    setTiltStyle({
      transform: "perspective(500px) scale(1) rotateX(0) rotateY(0)",
    });
  }

  function handleMouseDown() {
    setTiltStyle({
      transform: "perspective(500px) scale(0.9) rotateX(0) rotateY(0)",
    });
  }

  function handleMouseUp() {
    setTiltStyle({
      transform: "perspective(500px) scale(1.1) rotateX(0) rotateY(0)",
    });
  }

  // useEffect(() => {
  //     $('.js-slick-carousel').slick({
  //       vertical: true,
  //       dots: true,
  //       autoplay: true,
  //       appendDots: $('.js-slick-carousel'),
  //       customPaging: function(slider) {
  //         return '<button class="u-slick__pagination u-slick__pagination--block u-slick__pagination-centered--y u-slick__pagination--white mr-5"></button>';
  //       },
  //     });
  //   }, []);

  // video play auto

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);
  const handleVideoEnd2 = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };
  const handleVideoEnd = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  //   scroll text
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 1000,
      distance: "30px",
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
      cleanup: true,
    });

    sr.reveal(".home .home-slider .bg1 h1", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".home .home-slider .sli-1 h1", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".welcome h4", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".welcome .owe .box", {
      origin: "left",
      distance: "30px",
    });
    sr.reveal(".h-about-text h5", {
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".h-about-text h2", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".window-wood .box", {
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".our-window h5 ", {
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".our-window h1", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".our-window .box h3", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".more-home h3", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".client h5", {
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".client h1", {
      origin: "top",
      distance: "30px",
    });

    return () => {
      sr.destroy();
    };
  }, []);

  // faq
  // const [activeIndex, setActiveIndex] = useState(null);

  // const faqs = [
  //   {
  //     question: "How is the Work Culture at Ruchi Textiles?",
  //     answer:
  //       "We're in this business Since 1987 and we provide the best service. It can be very well produced using Yarn.",
  //   },
  //   {
  //     question: "How is the Work Culture at Ruchi Textiles?",
  //     answer:
  //       "We're in this business Since 1987 and we provide the best service. It can be very well produced using Yarn.",
  //   },
  //   {
  //     question: "How do you Achieve excellence at every step?",
  //     answer:
  //       "We're in this business Since 1987 and we provide the best service. It can be very well produced using Yarn.",
  //   },
  // ];

  // const toggleFAQ = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  return (
    <div className="home">
      <Navbar />
      <div className="home-slider">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            {/* <div className="carousel-item active bg1">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-5">
                                <div className="bg_a">
                                <a className="poppins">WINDOW AND DOOR SERVICE COMPANY</a>
                                </div>
                                <h1 className="playfair">The Futurist Windows & Doors</h1>
                                <p className="poppins">India's Largest Manufacturer of Weather Resistant and Energy Efficient uPVC Windows & uPVC Doors designed for harsh Indian climate.</p>
                                <div className="home_get">
                                <Link to="/contact" className="poppins">GET A QUOTE <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="s_bg1">
                                    <img className="" src="../images/home/home-slider1.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item bg2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="bg_a">
                                    <a className="poppins">WINDOW AND DOOR SERVICE COMPANY</a>
                                    </div>
                                    <h1 className="playfair">The Futurist Windows & Doors</h1>
                                    <p className="poppins">India's Largest Manufacturer of Weather Resistant and Energy Efficient uPVC Windows & uPVC Doors designed for harsh Indian climate.</p>
                                    <div className="home_get">
                                    <Link to="/contact" className="poppins">GET A QUOTE <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="s_bg2">
                                        <img className="" src="../images/home/home-slider2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item bg3">
                        <h1 className='roboto'>White Wings uPVC Windows & Doors With 15 Years Warranty</h1>
                        <p className='roboto'>Give Your House New Look with <span>WHITE WINGS</span>  Eco- Friendly Windows and Doors</p>

                    </div> */}

            <div class="carousel-item active">
              <img
                src="./images/home/windowpanal10-2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="./images/home/windowpanal12-2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="./images/home/windowpanal9.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="./images/home/windowpanal13-2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>

            {/* <div class="carousel-item active sli-1">
                <div className="container">
                    <h1 className='playfair'>
                        The Futurist Windows & Doors
                    </h1>
                    <p className="poppins">India’s Largest Manufacturer of Weather Resistant and Energy Efficient uPVC <br /> Windows & uPVC Doors designed for harsh Indian climate.</p>
                </div>
            </div> */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <div className="home-slider">
        <div className="js-slick-carousel u-slick"
      data-vertical="true"
      data-pagi-classes="position-absolute u-slick__pagination u-slick__pagination--block u-slick__pagination-centered--y u-slick__pagination--white mr-5">
      <div className="js-slide bg-img-hero-center bg1" >
      <div className="container">
                        <div className="row">
                        <div className="col-lg-5">
                            <div className="bg_a">
                            <a className="poppins">WINDOW AND DOOR SERVICE COMPANY</a>
                            </div>
                            <h1 className="playfair">The Futurist Windows & Doors</h1>
                            <p className="poppins">India's Largest Manufacturer of Weather Resistant and Energy Efficient uPVC Windows & uPVC Doors designed for harsh Indian climate.</p>
                            <div className="home_get">
                            <a href="#" className="poppins">GET A QUOTE <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="s_bg1">
                                <img className="" src="../images/home/home-slider1.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
      </div>
      <div className="js-slide bg-img-hero-center bg2" >
      <div className="container">
                        <div className="row">
                        <div className="col-lg-5">
                            <div className="bg_a">
                            <a className="poppins">WINDOW AND DOOR SERVICE COMPANY</a>
                            </div>
                            <h1 className="playfair">The Futurist Windows & Doors</h1>
                            <p className="poppins">India's Largest Manufacturer of Weather Resistant and Energy Efficient uPVC Windows & uPVC Doors designed for harsh Indian climate.</p>
                            <div className="home_get">
                            <a href="#" className="poppins">GET A QUOTE <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="s_bg2">
                                <img className="" src="../images/home/home-slider2.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                
      </div>
    </div>
        </div> */}

      {/* welcome seaction start */}
      <div className="welcome">
        <div className="container">
          <h5 className="roboto">WELCOME TO WHITE WINGS</h5>
          <div className="custom-hr">
            <hr />
          </div>
          <h1 className="roboto">Wide Range of Windows & Doors</h1>
          <p className="roboto">
            White Wings offers vast range of windows & doors designs for the
            home and office that are sure to add grace to your space. We have an
            exotic range of high-quality uPVC and aluminium windows & doors .
          </p>
          <div className="owe">
            <div className="row">
              <div className="col-lg-3 mb-4">
                <div className="box">
                  <img src="./images/home/wel-1.png" alt="" />
                  <h6 className="roboto">Own Production</h6>
                  <p className="roboto">
                    The glass is cut by machines to fit the desired size. The
                    glass is cleaned with a high-pressure cleaner.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="box">
                  <img src="./images/home/wel-2.png" alt="" />
                  <h6 className="roboto">Free Measurement</h6>
                  <p className="roboto">
                    Measure your door from inside of the room, recording all
                    your measurements in centimetres.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="box">
                  <img src="./images/home/wel-3.png" alt="" />
                  <h6 className="roboto">Quick Installation</h6>
                  <p className="roboto">
                    The installation time depends on the size of the crew and
                    the difficulty of the job.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="box">
                  <img src="./images/home/wel-4.png" alt="" />
                  <h6 className="roboto">Low Maintenance</h6>
                  <p className="roboto">
                    Window manufacturers suchs as Long Life Windows and Doors
                    create the fiberglass frames.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
                <div className="col-lg-6">
                    <div className="main-div">
                    <div className="inner-div">
                        <p className="para-div roboto">WELCOME TO WHITE WINGS</p>
                        <h4 className='roboto'>We Have 25 Years Of Experience in Window & Door Service</h4>
                        <p className='roboto'>
                        White wings is India's largest manufacturer & supplier of energy
                        efficient uPVC Windows & uPVC Doors. We source the finest grade of
                        raw material from European Fortune 500 companies. The optimized
                        production process outputs 100% lead-free & durable uPVC profiles
                        for Indian climate.
                        </p>
                    </div>
                    <div className="main-img">
                        <div>
                        <img src="../images/home/years 1.png" className="img-container" alt="Years of Experience" />
                        </div>
                        <div className="first-container">
                        <h5 className='roboto'>10 Years Of Warranty</h5>
                        <p className='roboto'>
                            Double glazed Prominance Windows are more effective in reducing
                            the noise that can enter your home. This is especially helpful
                            for those who live near airports, have neighbors with noisy
                            pets.
                        </p>
                        </div>
                    </div>
                    <div className="main-img-sec">
                        <div>
                        <img src="../images/home/tools 1.png" className="sec-container" alt="Tools" />
                        </div>
                        <div className="desc-bottom">
                        <h5 className='roboto'>Quick Installation</h5>
                        <p className='roboto'>
                            Double glazed Prominance Windows are more effective in reducing
                            the noise that can enter your home. This is especially helpful
                            for those who live near airports, have neighbors with noisy
                            pets.
                        </p>
                        </div>
                    </div>
                    <button className='roboto'>MORE ABOUT US</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sec-div">
                    <img src="../images/home/Group 8436.png" alt="Group" />
                    </div>
                </div>
                </div> */}
        </div>
      </div>
      {/* welcome seaction end */}

      {/* own seaction start */}
      {/* <div className="first-row">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 coloum-all">
                <div className="first-sec">
                    <div className="first-img">
                    <img src="../images/home/o-1.png" className="first-icon" alt="Own Production" />
                    </div>
                    <div className="first-container">
                    <h5>Own Production</h5>
                    <p>
                        Double glazed Prominance Windows are more effective in reducing
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 coloum-all">
                <div className="first-sec">
                    <div className="first-img">
                    <img src="../images/home/o-2.png" className="first-icon" alt="Free Measurement" />
                    </div>
                    <div className="first-container">
                    <h5>Free Measurement</h5>
                    <p>
                        Double glazed Prominance Windows are more effective in reducing
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 coloum-all">
                <div className="first-sec">
                    <div className="first-img">
                    <img src="../images/home/o-3.png" className="first-icon" alt="Quick Installation" />
                    </div>
                    <div className="first-container">
                    <h5>Quick Installation</h5>
                    <p>
                        Double glazed Prominance Windows are more effective in reducing
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div> */}
      {/* own seaction end */}

      {/* modern seaction start  */}
      {/* <div className="main-div-sec">
            <div className="container-fluid align-fluid">
            <div className="heading-tag">
                <h5>
                    We produce modern Plastic, Wooden and Aluminum Windows according to individual wishes and sizes, which satisfy any wishes of our Clients
                </h5>
            </div>
            <div className="row sec-row">
                <div className="col-lg-2 col-all-style">
                    <div className="first-wind">
                        <div>
                            <img src="../images/home/w-1.png" alt="Casement Window" />
                        </div>
                        <div>
                            <p>Casement Window</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-all-style">
                    <div className="first-wind">
                        <div>
                            <img src="../images/home/w-2.png" alt="Sliding Door" />
                        </div>
                        <div>
                            <p>Sliding Door</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-all-style">
                    <div className="first-wind">
                        <div>
                            <img src="../images/home/w-3.png" alt="Twin Sash Window" />
                        </div>
                        <div>
                            <p>Twin Sash Window</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-all-style">
                    <div className="first-wind">
                        <div>
                            <img src="../images/home/w-4.png" alt="Tilt and Turn Window" />
                        </div>
                        <div>
                            <p>Tilt and Turn Window</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-all-style">
                    <div className="first-wind">
                        <div>
                            <img src="../images/home/w-5.png" alt="Tilt and Turn Window" />
                        </div>
                        <div>
                            <p>Tilt and Turn Window</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-all-style">
                    <div className="first-wind">
                        <div>
                            <img src="../images/home/w-6.png" alt="Sliding Door" />
                        </div>
                        <div>
                            <p>Sliding Door</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div> */}
      {/* modern seaction end  */}

      {/* home about seaction start */}
      <div className="home-about">
        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="ab-img-h">
                <video
                  ref={videoRef}
                  src="./images/home/video.mp4"
                  muted
                  autoPlay
                  onEnded={handleVideoEnd2}
                  style={{ width: "100%", height: "auto" }}
                ></video>
                {/* <video src="../images/home/about-h (4).png" alt="" /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h-about-text">
                <h5 className="roboto">ABOUT US</h5>
                <div class="custom-hr">
                  <hr />
                </div>
                <h2 className="roboto">
                  Trendy <span>Doors</span> and <span>Windows</span> for Every
                  Stay
                </h2>
                <p className="roboto">
                  White wings is India's largest manufacturer & supplier of
                  energy efficient uPVC Windows & uPVC Doors. We source the
                  finest grade of raw materials
                </p>
                <div className="years">
                  <div className="y-img">
                    <img src="./images/home/years 1.png" alt="" />
                  </div>
                  <div className="y-text">
                    <h4 className="roboto">15 Years Of Warranty</h4>
                    <h6 className="roboto">
                      An example of a common window warranty might include
                      20-year glass coverage, 10-year frame coverage.{" "}
                    </h6>
                  </div>
                </div>
                <div className="years">
                  <div className="t-img">
                    <img src="./images/home/tools 1.png" alt="" />
                  </div>
                  <div className="t-text">
                    <h4 className="roboto">Quick Installation</h4>
                    <h6 className="roboto">
                      A two-person crew can replace a small to average size
                      window with a new insert replacement window in about an
                      hour, so figure about eight windows a day.{" "}
                    </h6>
                  </div>
                </div>

                {/* <div className="faq">
                      <div className="wrapper">
                          {faqs.map((faq, index) => (
                          <div className="cont-faq" key={index}>
                              <div
                              className={`question roboto ${activeIndex === index ? 'active' : ''}`}
                              onClick={() => toggleFAQ(index)}
                              >
                              {faq.question}
                              </div>
                              <div className="answercont" style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
                              <div className="answer roboto">
                                  {faq.answer}
                              </div>
                              </div>
                          </div>
                          ))}
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
          {/* <div className="window-wood">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="box">
                                <div className="box-text">
                                    <div className="txet">
                                        <h4 className='roboto'>Plastic <span>Windows</span></h4>
                                        <p className='roboto'>Double glazed Prominence Windows are more effective in reducing the noise</p>
                                        <a href="" className='roboto'>READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <div className="box-img">
                                        <img src="../images/home/wood-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <div className="box-text">
                                    <div className="txet">
                                        <h4 className='roboto'>Wooden <span>Windows</span></h4>
                                        <p className='roboto'>Double glazed Prominence Windows are more effective in reducing the noise</p>
                                        <a href="" className='roboto'>READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <div className="box-img">
                                        <img src="../images/home/wood-2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <div className="box-text">
                                    <div className="txet">
                                        <h4 className='roboto'>Alluminium <span>Windows</span></h4>
                                        <p className='roboto'>Double glazed Prominence Windows are more effective in reducing the noise</p>
                                        <a href="" className='roboto'>READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <div className="box-img">
                                        <img src="../images/home/wood-3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
      </div>
      {/* home about seaction end */}

      {/* modern seaction start  */}
      <section>
        <div className="modern-se">
          <div className="container-fluid">
            <h4 className="roboto">
              We produce modern Upvc and Aluminum Windows according to
              individual wishes and sizes, which satisfies the wishes of our
              Clients
            </h4>
            <div className="container">
              <div className="pr-windo">
                <div className="row">
                <div className="col-lg-4">
                    <div className="wi-pr">
                      <img src="./images/home/w-6.png" alt="" />
                    </div>
                    <p className="roboto">Sliding  Window & Door</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="wi-pr">
                      <img src="./images/home/w-3.png" alt="" />
                    </div>
                    <p className="roboto">Casement Window & Doors</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="wi-pr">
                      <img src="./images/home/w-7.png" alt="" />
                    </div>
                    <p className="roboto">Fold and Slide Door</p>
                  </div>
                  {/* <div className="col-lg-2">
                    <div className="wi-pr">
                      <img src="./images/home/w-3.png" alt="" />
                    </div>
                    <p className="roboto">Twin Sash Window</p>
                  </div>
                  <div className="col-lg-2">
                    <div className="wi-pr">
                      <img src="./images/home/w-4.png" alt="" />
                    </div>
                    <p className="roboto">Tilt and Turn Window</p>
                  </div>
                  <div className="col-lg-2">
                    <div className="wi-pr">
                      <img src="./images/home/w-5.png" alt="" />
                    </div>
                    <p className="roboto">Lift and Slide Door</p>
                  </div> */}
                  
                </div>
              </div>
            </div>
            {/* <div className="much">
                        <a href="/product" className="roboto">and much more...</a>
                    </div> */}
          </div>
        </div>
      </section>
      {/*  modern seaction end */}

      {/* window wood section strat */}
      {/* <div className="window-wood">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <div className="box-text">
                                <div className="txet">
                                    <h4 className='roboto'>Plastic <span>Windows</span></h4>
                                    <p className='roboto'>Double glazed Prominence Windows are more effective in reducing the noise</p>
                                   
                                </div>
                                <div className="box-img">
                                    <img src="../images/home/wood-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <div className="box-text">
                                <div className="txet">
                                    <h4 className='roboto'>Wooden <span>Windows</span></h4>
                                    <p className='roboto'>Double glazed Prominence Windows are more effective in reducing the noise</p>
                                    
                                </div>
                                <div className="box-img">
                                    <img src="../images/home/wood-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <div className="box-text">
                                <div className="txet">
                                    <h4 className='roboto'>Alluminium <span>Windows</span></h4>
                                    <p className='roboto'>Double glazed Prominence Windows are more effective in reducing the noise</p>
                                    
                                </div>
                                <div className="box-img">
                                    <img src="../images/home/wood-3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      {/* window wood seaction end */}

      {/* our windows seaction start */}
      <div className="our-window">
        <div className="container">
          <h5 className="roboto">OUR WINDOWS </h5>
          <div class="custom-hr">
            <hr />
          </div>
          <h1 className="roboto">Popular Products</h1>
          <p className="roboto">
            It takes all-round expertise in extrusion, design, planning,
            fabrication, delivery and installation to produce a world-class
            window. These are wide-ranging skills and they reside only with
            White Wings.
          </p>

          <div className="window_product">
            <div className="row">
              <div className="col-lg-4">
                <Link to="/aluminium" onClick={scrollToTop}>
                  <div class="card">
                      <div className="windo-sli">
                        <img src="./images/home/pn1-2.png" class="card-img-top" alt="" />
                      </div>
                    <div class="card-body">
                      <div className="">
                        <h6 className="roboto">
                          <img src="./images/gif/w5.gif" alt="" /> Casement Window & Doors
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link>                  
              </div>
              <div className="col-lg-4">
                <Link to="/aluminium" onClick={scrollToTop}>
                  <div class="card">
                      <div className="windo-sli">
                        <img src="./images/home/pn3-2.png" class="card-img-top" alt="" />
                      </div>
                    <div class="card-body">
                      <div className="">
                        <h6 className="roboto">
                          <img src="./images/gif/w1.gif" alt="" /> Sliding Window & Doors
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link> 
                {/* <Link to="/aluminium" onClick={scrollToTop}>
                  <div className="wi-pr-img">
                    <div className="windo-sli">
                      <img src="./images/home/pn3.png" alt="" />
                    </div>
                    <div className="case">
                      <h6 className="roboto">
                        <img src="./images/gif/w1.gif" alt="" /> Sliding Window & Doors
                      </h6>
                    </div>
                  </div>
                </Link> */}
              </div>
              <div className="col-lg-4">
                <Link to="/aluminium" onClick={scrollToTop}>
                  <div class="card">
                      <div className="windo-sli">
                        <img src="./images/home/pn6-2.png" class="card-img-top" alt="" />
                      </div>
                    <div class="card-body">
                      <div className="">
                        <h6 className="roboto">
                          <img src="./images/gif/d3.gif" alt="" /> Fold and Sliding Window
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link>
              {/* <Link to="/aluminium" onClick={scrollToTop}>
                  <div className="wi-pr-img">
                    <div className="windo-sli">
                      <img src="./images/home/pn6.png" alt="" />
                    </div>
                    <div className="case">
                      <h6 className="roboto">
                        <img src="./images/gif/d3.gif" alt="" />Fold and Sliding Window
                      </h6>
                    </div>
                  </div>
                </Link> */}
              </div>
            </div>
            {/* <div className="">
              <Slider {...settings}>
                <Link to="/product" onClick={scrollToTop}>
                  <div className="wi-pr-img">
                    <div className="windo-sli">
                      <img src="./images/home/pn1.png" alt="" />
                    </div>
                    <div className="case">
                      <h6 className="roboto">
                        <img src="./images/gif/w5.gif" alt="" /> Casement Window
                      </h6>
                    </div>
                  </div>
                </Link>
                <Link to="/product" onClick={scrollToTop}>
                  <div className="wi-pr-img">
                    <div className="windo-sli">
                      <img src="./images/home/pn2.png" alt="" />
                    </div>
                    <div className="case">
                      <h6 className="roboto">
                        <img src="./images/gif/w5.gif" alt="" /> Twinsash Window
                      </h6>
                    </div>
                  </div>
                </Link>
                <Link to="/product" onClick={scrollToTop}>
                  <div className="wi-pr-img">
                    <div className="windo-sli">
                      <img src="./images/home/pn3.png" alt="" />
                    </div>
                    <div className="case">
                      <h6 className="roboto">
                        <img src="./images/gif/w1.gif" alt="" /> Sliding Window
                      </h6>
                    </div>
                  </div>
                </Link>
                <Link to="/product" onClick={scrollToTop}>
                  <div className="wi-pr-img">
                    <div className="windo-sli">
                      <img src="./images/home/pn4.png" alt="" />
                    </div>
                    <div className="case">
                      <h6 className="roboto">
                        <img src="./images/gif/w3.gif" alt="" /> Tilt and Slide
                        Window
                      </h6>
                    </div>
                  </div>
                </Link>
                <Link to="/product" onClick={scrollToTop}>
                  <div className="wi-pr-img">
                    <div className="windo-sli">
                      <img src="./images/home/pn5.png" alt="" />
                    </div>
                    <div className="case">
                      <h6 className="roboto">
                        <img src="./images/product/sm1.png" alt="" /> Vertical
                        Sliding Window
                      </h6>
                    </div>
                  </div>
                </Link>
              </Slider>
            </div> */}
            {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        
                        320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        },
                        
                        480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        },
                        
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        },
                        1024:{
                            slidesPerView: 3,
                            spaceBetween: 30,  
                        }
                    }}
                    >
                    <SwiperSlide>
                        <div className="wi-pr-img">
                            <img src="./images/home/pn1.png" alt="" />
                            <div className="case">
                            <h6 className='roboto'><img src="./images/gif/w4.gif" alt="" /> Casement Window</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wi-pr-img">
                            <img src="./images/home/pn2.png" alt="" />
                        </div>
                        <div className="case">
                        <h6 className='roboto'><img src="./images/gif/w5.gif" alt="" /> Twinsash Window</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wi-pr-img">
                        <img src="./images/home/pn3.png" alt="" />
                        </div>
                        <div className="case">
                        <h6 className='roboto'><img src="./images/gif/w1.gif" alt="" /> Sliding Window</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wi-pr-img">
                        <img src="./images/home/pn4.png" alt="" />
                        </div>
                        <div className="case">
                        <h6 className='roboto'><img src="./images/gif/w3.gif" alt="" /> Tilt and Slide Window</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wi-pr-img">
                        <img src="./images/home/pn5.png" alt="" />
                        </div>
                        <div className="case">
                        <h6 className='roboto'><img src="./images/gif/w3.gif" alt="" /> Tilt and Slide Window</h6>
                        </div>
                    </SwiperSlide>
                </Swiper> */}
            {/* <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="wi-pr-img">
                                <img src="./images/home/pn1.png" alt="" />
                            </div>
                            <div className="case">
                                <h6 className='roboto'><img src="./images/gif/w4.gif" alt="" /> Casement Window</h6>
                                <a href="/product" className='roboto'> <img src="./images/gif/w4.gif" alt="" /> Casement Window</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="wi-pr-img">
                                <img src="./images/home/pn2.png" alt="" />
                            </div>
                            <div className="case">
                                <a href="/product" className='roboto'> <img src="./images/gif/w5.gif" alt="" /> Twinsash Window</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="wi-pr-img">
                                <img src="./images/home/pn3.png" alt="" />
                            </div>
                            <div className="case">
                                <a href="/product" className='roboto'> <img src="./images/gif/w1.gif" alt="" /> Sliding Window</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="wi-pr-img">
                                <img src="./images/home/pn4.png" alt="" />
                            </div>
                            <div className="case">
                                <a href="/product" className='roboto'> <img src="./images/gif/w3.gif" alt="" /> Tilt and Slide Window</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="wi-pr-img">
                                <img src="./images/home/pn5.png" alt="" />
                            </div>
                            <div className="case">
                                <a href="/product" className='roboto'> <img src="./images/gif/w3.gif" alt="" /> Tilt and Slide Window</a>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
      {/* our windows seaction end */}

      {/* make seaction start */}
      <div className="make">
        <div className="container">
          {/* <h1 className='roboto'>Make Your Home <span>POLLUTION FREE</span> with <span>uPVC</span> Window and Door System</h1> */}
          <div className="make-img">
            <img src="../images/home/make4-2.png" alt="" /> 
          </div>
        </div>
      </div>
      {/* make seaction end */}

      {/* more seaction start */}
      <div className="more-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="roboto">More Than Windows</h3>
              <h1 className="roboto">Various</h1>
              <h1 className="roboto">Color Palette</h1>
              <p className="roboto">
                Curabitur accumsan iaculis neque, sit amet scelerisque eros.
                Phasellus hendrerit neque a augue scelerisque, eu mollis mauris
                bibendum. Etiam vitae metus id eros facilisis.
              </p>
            </div>
            <div className="col-lg-4">
              <div
                ref={elementRef}
                className="tilt-element , more-img-home"
                onMouseMove={handleMove}
                onMouseOut={handleMouseOut}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                style={tiltStyle}
              >
                <img className="main" src="../images/home/more.png" alt="" />
              </div>
              {/* <div className="more-img-home">
                            <img src="../images/home/more.png" alt="" />
                        </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="box">
                <div className="round">
                  <img src="../images/home/white.png" alt="" />
                </div>
                <h5 className="roboto">White</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <div className="round">
                  <img src="../images/home/sliver.png" alt="" />
                </div>
                <h5 className="roboto">Metal</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <div className="round">
                  <img src="../images/home/grey.png" alt="" />
                </div>
                <h5 className="roboto">Grey</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <div className="round">
                  <img src="../images/home/black.png" alt="" />
                </div>
                <h5 className="roboto">Dark</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <div className="round">
                  <img src="../images/home/aspan.png" alt="" />
                </div>
                <h5 className="roboto">Aspen</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <div className="round">
                  <img src="../images/home/birch.png" alt="" />
                </div>
                <h5 className="roboto">Birch</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* more seaction end */}

      {/* home video seaction start */}
      <div className="home-video">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <video
                ref={videoRef}
                src="./images/home/hvideo.mp4"
                muted
                autoPlay
                onEnded={handleVideoEnd}
                // style={{ width: '100%', height: 'auto' }}
              ></video>
            </div>
            <div className="col-lg-6">
              <h1 className="roboto">
                There Multiple Options to Choose From for the{" "}
                <span>Doors and Windows</span>
              </h1>
              <p className="roboto">
                Double glazed Prominance Windows are more effective in reducing
                the noise that can enter your home. Double glazed Prominance
                Windows re more effective in reducing the noise that can enter
                your home.
              </p>
              <div className="box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="coun">
                      <h2 className="roboto">153+</h2>
                      <h6 className="roboto">HAPPY CLIENTS</h6>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="coun">
                      <h2 className="roboto">50+</h2>
                      <h6 className="roboto">TECHNICIANS</h6>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="coun">
                      <h2 className="roboto">100+</h2>
                      <h6 className="roboto">EQUIPMENTS</h6>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="coun">
                      <h2 className="roboto">22+</h2>
                      <h6 className="roboto">DELIVERY STATES</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home video seaction end */}

      {/* blog seaction start */}
      {/* <div className="home-blog">
        <div className="container">
          <div className="main">
            <h5 className="roboto">Get Informed</h5>
            <h3 className="roboto">Blogs & Articles</h3>
            <div class="custom-hr">
              <hr />
            </div>
          </div>
          <div className="blog-seac">
            <div className="row">
              <div className="col-lg-4 mb-3">
                <div class="card">
                  <img
                    src="./images/home/b1.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 className="roboto">
                      The Integration of Technology in Trendy Sliding Door
                      Systems
                    </h5>
                    <p className="roboto">9 April, 2024</p>
                    <hr />
                    <h6 className="roboto">
                      Whether it is for the patio or the balcony, the sliding
                      door design has always been a popular choice.{" "}
                    </h6>
                    <div className="more">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div class="card">
                  <img
                    src="./images/home/b2.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 className="roboto">
                      Common Mistakes to Avoid When Buying Glass Doors and
                      Windows
                    </h5>
                    <p className="roboto">16 March, 2024</p>
                    <hr />
                    <h6 className="roboto">
                      Glass doors and windows define the aesthetic appeal,
                      functionality, and ambiance of a house.{" "}
                    </h6>
                    <div className="more">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div class="card">
                  <img
                    src="./images/home/b3.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 className="roboto">
                      How to Increase Security for Glass Windows in a Home?
                    </h5>
                    <p className="roboto">28 December, 2023</p>
                    <hr />
                    <h6 className="roboto">
                      It is vital to have ample protection against any kind of
                      intrusion in your home.{" "}
                    </h6>
                    <div className="more">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}
      {/* blog seaction end */}

      {/* client seaction start */}
      <div className="client">
        <div className="container">
          <div className="main">
            <h5 className="roboto">CLIENT TESTIMONIALS</h5>
            <div class="custom-hr">
              <hr />
            </div>
            <h1 className="roboto">
              What <span>People</span> say About Us
            </h1>
            <Testimonial />
          </div>
        </div>
      </div>
      {/* client seaction end */}

      {/* client seaction end */}

      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Home;
