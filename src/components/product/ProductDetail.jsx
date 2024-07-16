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
      question: "What is a casement window?",
      answer: ` Casement windows are attached to the frame from two sides. These windows can be opened both vertically and horizontally. Casement windows are one of the best choices for the home as they allow maximum flow of air. `,
    },
    {
      question: "What are the advantages of casement windows?",
      answer:
        "Casement windows allow maximum airflow keeping the home interiors fresh and pleasant. These windows look very premium and add Aesthetic appeal to your space. These windows are easy to maintain. In Fenesta, Casement windows comes in both uPVC and Aluminium.",
    },
    {
      question:
        "Which is better? A Casement or a double hung window?",
      answer: `Though both double-hung windows and casement windows are the best in their way, the pick here would be casement windows. There are a few reasons why casement windows are a more ideal option. Starting with the design, casement windows are aesthetically designed and easy to operate. They provide excellent ventilation, energy efficiency, sound insulation, and protection against rainwater seepage, to name a few other reasons. Adding to this, casement windows are available in single and double-pane options, making them a sturdier choice for home windows. However, with advancements, you can also find double-hung casement windows for the home that offer even better benefits and features.
                `,
    },
    {
      question: "Are casement windows durable?",
      answer:
        "One of the biggest advantages of casement windows is that they are extremely durable and robust. The installation of casement windows is done in such a way that homeowners don’t have to worry about gaps between the wall and window frame; this makes the windows much stronger that further increases their lifespan. Adding to this, the casement windows are designed with double or triple glazed glasses and the robust installation helps in offering protection against the storm, keeping the windows durable for years to come.",
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
          <h1 className="playfair">UPVC Casement Windows</h1>
        </div>
      </div>

      {/* product details section start */}
      <div className="cash-me-windo">
        <div className="container">
          <h2 className="roboto">UPVC Casement Windows</h2>
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
                <img src="../images/productdetails/casement.jpg" alt="" />
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
                    <img src="../images/gif/w1.gif" alt="" />
                  </div>
                  <div className="wi-te">
                    <h6 className="roboto">
                      {" "}
                      Very Low thermal expansion/contraction, retains shape,
                      sheen and color for years
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
                      Integrated insect screen solution to keep out mosquitoes
                      and flies
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="wi-text">
                  <div className="wi-img">
                    <img src="../images/gif/w2.gif" alt="" />
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
                    <img src="../images/gif/w1.gif" alt="" />
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
                <div className="wi-text">
                  <div className="wi-img">
                    <img src="../images/gif/w5.gif" alt="" />
                  </div>
                  <div className="wi-te">
                    <h6 className="roboto">
                      {" "}
                      Integrated insect screen solution to keep out mosquitoes
                      and flies
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="full-details">
            <img src="../images/productdetails/casement.png" alt="" />
          </div>






          <div className="investa">
            <h2 className="roboto">Inventa Series uPVC Casement Windows</h2>
            <div className="row mt-5">
              <div className="col-lg-4">
                <img className="img-fluid" src="../images/productdetails/upvccasment.png" alt="" />
              </div>
              <div className="col-lg-8">
                <p className="roboto">Inventa Casement uPVC Windows are designed for more strength and better performance with twin gasket sealing. It is very useful when both thermal and acoustic performance is of prime consideration. The gasket sealing coupled with multi point lock ensures tight closure with no gaps for proper sealing, thermal and acoustic performance.</p>
                <h4 className="roboto">Advantages:</h4>
                <li className="roboto">Applicable for hall and bed rooms facing busy and noisy streets</li>
                <li className="roboto">Significant for thermal and acoustic performance</li>
                <li className="roboto">Supports large sized fixed glass enabling better view and light</li>
                <li className="roboto">Stronger system developed by White Wings against wind load</li>
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
                    <td>1350</td>
                    <td>900</td>
                    <td>4100</td>
                    <td>2400</td>
                  </tr>
                  <tr>
                    <td>Sash size</td>
                    <td>450</td>
                    <td>450</td>
                    <td>850</td>
                    <td>1800</td>
                  </tr>
                </tbody>
              </table>
              <p className="roboto">All dimensions are in mm</p>
            </div>
          </div>
          <div className="investa">
            <h2 className="roboto">Optima Series uPVC Casement Windows</h2>
            <div className="row mt-5">
              <div className="col-lg-4">
                <img className="img-fluid" src="../images/productdetails/upvccasment.png" alt="" />
              </div>
              <div className="col-lg-8">
                <p className="roboto">Optima Casement uPVC Windows are designed for small to medium openings . It provides good thermal and acoustic efficiency with optimal sight lines and design possibilities for this category of openings. Optima Casement uPVC Windows can find its place in medium high rises with small to medium openings. </p>
                <h4 className="roboto">Advantages:</h4>
                <li className="roboto">Provides good thermal and acoustic efficiency with optimal sight lines and design possibilities for small/medium openings.</li>
                <li className="roboto">100% opening possibility allowing maximum influx of fresh air and light.</li>
                <li className="roboto">Unparalleled strength and performance</li>
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
                    <td>800</td>
                    <td>400</td>
                    <td>1400</td>
                    <td>1300</td>
                  </tr>
                  <tr>
                    <td>Sash size</td>
                    <td>400</td>
                    <td>400</td>
                    <td>700</td>
                    <td>1300</td>
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
                  <img src="../images/productdetails/caseu-1.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-2.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-3.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-4.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-5.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-1.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-2.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-3.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-4.jpg" alt="" />
                </div>
                <div>
                  <img src="../images/productdetails/caseu-5.jpg" alt="" />
                </div>
              </Slider>
            </div>

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
                            slidesPerView: 4,
                            spaceBetween: 30,  
                        }
                    }}
                    >
                    <SwiperSlide>
                        <img src="../images/productdetails/gallery1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../images/productdetails/gallery2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../images/productdetails/gallery3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../images/productdetails/gallery4.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../images/productdetails/gallery1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../images/productdetails/gallery2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../images/productdetails/gallery3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../images/productdetails/gallery4.png" alt="" />
                    </SwiperSlide>
                </Swiper> */}
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

      {/* <div className="p-detail">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div class="lt">
                        <div class="box">
                            <h3 className='roboto'>PRODUCT CATEGORIES</h3>
                            <ul class="nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active casement-tab roboto" id="casement-tab" data-bs-toggle="tab"
                                        data-bs-target="#casement" type="button" role="tab" aria-controls="casement"
                                        aria-selected="true">Casement Doors & Windows <i class="fa-solid fa-angle-right"></i></button>
                                </li>                                
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link sliding-tab roboto" id="sliding-tab" data-bs-toggle="tab"
                                        data-bs-target="#sliding" type="button" role="tab" aria-controls="sliding"
                                        aria-selected="false">Sliding Doors and Windows  <i class="fa-solid fa-angle-right"></i></button>
                                </li>                                   
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link twin-tab roboto" id="twin-tab" data-bs-toggle="tab"
                                        data-bs-target="#twin" type="button" role="tab" aria-controls="twin"
                                        aria-selected="false">Twin Sash Windows <i class="fa-solid fa-angle-right"></i></button>
                                </li>                                
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link vertical-tab roboto" id="vertical-tab" data-bs-toggle="tab"
                                        data-bs-target="#vertical" type="button" role="tab" aria-controls="vertical"
                                        aria-selected="false">Vertical Sliding Windows <i class="fa-solid fa-angle-right"></i></button>
                                </li>                                
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link tilt-tab roboto" id="tilt-tab" data-bs-toggle="tab"
                                        data-bs-target="#tilt" type="button" role="tab" aria-controls="tilt"
                                        aria-selected="false">Tilt and Turn Window <i class="fa-solid fa-angle-right"></i></button>
                                </li>                                    
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link fold-tab roboto" id="fold-tab" data-bs-toggle="tab"
                                        data-bs-target="#fold" type="button" role="tab" aria-controls="fold"
                                        aria-selected="false">Fold and Slide Doors <i class="fa-solid fa-angle-right"></i></button>
                                </li>                                    
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link lift-tab roboto" id="lift-tab" data-bs-toggle="tab"
                                        data-bs-target="#lift" type="button" role="tab" aria-controls="lift"
                                        aria-selected="false">Lift and Slide Doors <i class="fa-solid fa-angle-right"></i></button>
                                </li>                                
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link slide-tab roboto" id="slide-tab" data-bs-toggle="tab"
                                        data-bs-target="#slide" type="button" role="tab" aria-controls="slide"
                                        aria-selected="false">Tilt and Slide Door <i class="fa-solid fa-angle-right"></i></button>
                                </li>                                                                                 
                            </ul>
                        </div>
                        <div className="box2">
                            <div className="info">
                                <a className='roboto'>For More Information</a>
                            </div>
                            <h6 className='roboto'>Follow Us On:</h6>
                            <div className="icon">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="main-detail">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="casement" role="tabpanel" aria-labelledby="casement-tab" tabindex="0">
                                <div className="pd">
                                    <a href="/product" className='roboto'>Products  <i class="fa-solid fa-angle-right"></i> </a>
                                    <a href="" className='roboto'> Casement Windows  <i class="fa-solid fa-angle-right"></i></a>
                                    <a href="" className='roboto'> 67IW-IWL-ID  </a>
                                </div>
                                <h3 className='roboto'>CATEGORY</h3>
                                <h4 className='roboto'>Casement Windows</h4>
                                <div className="custom-hr">
                                    <hr />
                                </div>
                                <h1 className='roboto'>67IW-IWL-ID</h1>
                                <div className="product-desc">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="de-img">
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade show active" id="gray" role="tabpanel" aria-labelledby="gray-tab" tabindex="0">
                                                        <img src="../images/productdetails/p-1.png" alt="gray" />
                                                    </div>  
                                                    <div class="tab-pane fade" id="black" role="tabpanel" aria-labelledby="black-tab" tabindex="0">
                                                        <img src="../images/productdetails/p-4.png" alt="Black" />
                                                    </div> 
                                                    <div class="tab-pane fade" id="silver" role="tabpanel" aria-labelledby="silver-tab" tabindex="0">
                                                        <img src="../images/productdetails/p-3.png" alt="Silver" />
                                                    </div>   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className='roboto'>Description</h2>
                                            <p className='roboto'>A complete and versatile 67mm, thermally broken series suitable for all construction and satisfying different styles of modern aesthetics</p>
                                            <p className='roboto'>This series is used for applications where high thermal and acoustic performances are required. It is also especially designed to ensure security against intrusion. </p>
                                            <h5 className='roboto'>Colors</h5>
                                            <ul class="nav-tabs" id="myTab" role="tablist">
                                                <div className="colo">
                                                    <li class="nav-item" role="presentation">
                                                        <button   button class="nav-link active gray-tab roboto" id="gray-tab" data-bs-toggle="tab"
                                                        data-bs-target="#gray" type="button" role="tab" aria-controls="gray"
                                                        aria-selected="true"><div className="gray"></div></button>
                                                    </li> 
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link black-tab roboto" id="black-tab" data-bs-toggle="tab"
                                                            data-bs-target="#black" type="button" role="tab" aria-controls="black"
                                                            aria-selected="false"><div className="black"></div></button>
                                                    </li> 
                                                    <li class="nav-item" role="presentation">
                                                        <button   button class="nav-link silver-tab roboto" id="silver-tab" data-bs-toggle="tab"
                                                        data-bs-target="#silver" type="button" role="tab" aria-controls="silver"
                                                        aria-selected="true"><div className="silver"></div></button>
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="over">
                                        <h3 className='roboto'>Overview</h3>
                                        <div className="custom-hr">
                                            <hr />
                                        </div>
                                        <hr />
                                        <div className="featu">
                                            <h5 className='roboto'>Design Features</h5>
                                            <div className="custom-hr">
                                                <hr />
                                            </div>
                                            <ul>
                                                <li className='roboto'>Flat, rounded and chamfered lines</li>
                                                <li className='roboto'>Sealing system with central gasket to achieve high acoustic and thermal insulation.</li>
                                                <li className='roboto'>Burglary resistant class RC2 (WK2)</li>
                                            </ul>
                                        </div>
                                        <div className="featu opt">
                                            <h5 className='roboto'>Options</h5>
                                            <div className="custom-hr">
                                                <hr />
                                            </div>
                                            <ul>
                                                <li className='roboto'>Available in dual color</li>
                                                <li className='roboto'>All surface finishes available</li>
                                                <li className='roboto'>Customized high-resistant finishes for aggressive environments upon request.</li>
                                                <li className="roboto">Windows with 1, 2, or more inward opening sashes</li>
                                                <li className="roboto">Tilt & turn</li>
                                                <li className="roboto">Pivot</li>
                                                <li className="roboto">Outward openings</li>
                                                <li className="roboto">Compatible with 67ID door</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="desi-fea">
                                        <h3 className='roboto'>Design Features</h3>
                                        <div className="vactor">
                                            <div className="v-img">
                                                <img src="../images/productdetails/Vector.png" alt="" />
                                            </div>
                                            <div className="v-text">
                                                <p className='roboto'>
                                                    Versatile and complete system suitable for all construction types. Ideal for residential and commercial applications incl. houses, apartments, villas, public buildings, hospitals, schools and industrial buildings
                                                </p>
                                            </div>
                                        </div>
                                        <div className="vactor">
                                            <div className="v-img">
                                                <img src="../images/productdetails/Vector.png" alt="" />
                                            </div>
                                            <div className="v-text">
                                                <p className='roboto'>
                                                New/refurbishment.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="sliding" role="tabpanel" aria-labelledby="sliding-tab" tabindex="0">
                                <div className="pd">
                                    <a href="/product" className='roboto'>Products  <i class="fa-solid fa-angle-right"></i> </a>
                                    <a href="" className='roboto'> Casement Windows  <i class="fa-solid fa-angle-right"></i></a>
                                    <a href="" className='roboto'> 67IW-IWL-ID  </a>
                                </div>
                                <h3 className='roboto'>CATEGORY</h3>
                                <h4 className='roboto'>Casement Windows</h4>
                                <div className="custom-hr">
                                    <hr />
                                </div>
                                <h1 className='roboto'>67IW-IWL-ID</h1>
                                <div className="product-desc">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="de-img">
                                                <div class="tab-pane fade show active" id="casement" role="tabpanel" aria-labelledby="casement-tab" tabindex="0">
                                                    <img src="../images/productdetails/p-1.png" alt="" />
                                                </div>  
                                                <div class="tab-pane fade" id="black" role="tabpanel" aria-labelledby="black-tab" tabindex="0">
                                                    <img src="../images/productdetails/p-2.png" alt="" />
                                                </div> 
                                                <div class="tab-pane fade " id="silver" role="tabpanel" aria-labelledby="silver-tab" tabindex="0">
                                                    <img src="../images/productdetails/p-3.png" alt="" />
                                                </div>   
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className='roboto'>Description</h2>
                                            <p className='roboto'>A complete and versatile 67mm, thermally broken series suitable for all construction and satisfying different styles of modern aesthetics</p>
                                            <p className='roboto'>This series is used for applications where high thermal and acoustic performances are required. It is also especially designed to ensure security against intrusion. </p>
                                            <h5 className='roboto'>Colors</h5>
                                            <div className="colo">
                                                <li class="nav-item" role="presentation">
                                                    <button   button class="nav-link active gray-tab roboto" id="gray-tab" data-bs-toggle="tab"
                                                    data-bs-target="#gray" type="button" role="tab" aria-controls="gray"
                                                    aria-selected="true"><div className="gray"></div></button>
                                                </li> 
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link black-tab roboto" id="black-tab" data-bs-toggle="tab"
                                                        data-bs-target="#black" type="button" role="tab" aria-controls="black"
                                                        aria-selected="false"><div className="black"></div></button>
                                                </li> 
                                                <li class="nav-item" role="presentation">
                                                    <button   button class="nav-link silver-tab roboto" id="silver-tab" data-bs-toggle="tab"
                                                    data-bs-target="#silver" type="button" role="tab" aria-controls="silver"
                                                    aria-selected="true"><div className="silver"></div></button>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="detail-related">
        <div className="container">
            <h1 className='roboto'>Related Products</h1>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="box">
                        <img src="../images/productdetails/p-2.png" alt="" />
                    </div>
                    <h4 className='roboto'>67IW-IWL-ID</h4>
                    <a href="" className='roboto'><i class="fa-solid fa-chevron-right"></i> LEARN MORE</a>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="box">
                        <img src="../images/productdetails/p-4.png" alt="" />
                    </div>
                    <h4 className='roboto'>67IW-IWL-ID</h4>
                    <a href="" className='roboto'><i class="fa-solid fa-chevron-right"></i> LEARN MORE</a>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="box">
                        <img src="../images/productdetails/p-3.png" alt="" />
                    </div>
                    <h4 className='roboto'>67IW-IWL-ID</h4>
                    <a href="" className='roboto'><i class="fa-solid fa-chevron-right"></i> LEARN MORE</a>
                </div>
            </div>
        </div>
    </div> */}

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
