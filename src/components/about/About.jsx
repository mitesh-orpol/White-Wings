import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./about.css";
import Footer from "../footer/Footer";
import ScrollReveal from "scrollreveal";
import Whatsapp from "../whatsapp/Whatsapp";

function About() {
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

    sr.reveal(".about .about-text h5", {
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".about .about-text h2", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".our-door .cret h5", {
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".our-door .cret h2", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".why-people h5", {
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".why-people h1", {
      origin: "top",
      distance: "30px",
    });
    sr.reveal(".service-about h5 ", {
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".service-about h2", {
      origin: "top",
      distance: "30px",
    });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <>
      <div className="about-page">
        <Navbar />
        <div className="container">
          <h1 className="playfair">About Us</h1>
        </div>
      </div>
      {/* about seaction start */}
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-img">
                <img src="./images/about/Group 8439.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text">
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
                  finest grade of raw material from European Fortune 500
                  companies. The optimized production process outputs 100%
                  lead-free & durable uPVC profiles for Indian climate. The
                  optimized production process outputs 100% lead-free & durable
                  uPVC profiles for Indian climate.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <div className="right">
                        <div className="check">
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="text">
                          <h6 className="roboto">Casement Window</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <div className="right">
                        <div className="check">
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="text">
                          <h6 className="roboto">Aluminium Window</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <div className="right">
                        <div className="check">
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="text">
                          <h6 className="roboto">Twinsash Window</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <div className="right">
                        <div className="check">
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="text">
                          <h6 className="roboto">Tilt & Turn Window</h6>
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
      {/* about seaction end */}

      {/* our doors seaction start */}
      <div className="our-door">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cret">
                <h5 className="roboto">OUR DOORS AND WINDOWS PRODUCTION</h5>
                <div class="custom-hr">
                  <hr />
                </div>
                <h2 className="roboto">Creating Home Warm and Comfort</h2>
                <p className="roboto">
                  White wings offers vast range of windows & doors designs for
                  the home and office that are sure to add grace to your space.
                  We have an exotic range of high-quality uPVC and aluminium
                  windows & doors.
                </p>
                <div className="err">
                  <div className="row">
                    <div className="col-lg-6">
                      <h6 className="roboto">
                        <img src="./images/about/Vector.png" alt="" /> Quality
                        Products
                      </h6>
                    </div>
                    <div className="col-lg-6">
                      <h6 className="roboto">
                        <img src="./images/about/Vector.png" alt="" />{" "}
                        Reasonable Prices
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h6 className="roboto">
                        <img src="./images/about/Vector.png" alt="" /> Client
                        Centric
                      </h6>
                    </div>
                    <div className="col-lg-6">
                      <h6 className="roboto">
                        <img src="./images/about/Vector.png" alt="" /> Market
                        Presence
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="door-img">
                <img src="./images/about/Group 8440.png" alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="own">
                <div className="check">
                  <h6 className="roboto">
                    <i className="fa-solid fa-check"></i> Own Production
                  </h6>
                </div>
                <div className="check">
                  <h6 className="roboto">
                    <i className="fa-solid fa-check"></i> Free Measurement
                  </h6>
                </div>
                <div className="check">
                  <h6 className="roboto">
                    <i className="fa-solid fa-check"></i> Individual Approach
                  </h6>
                </div>
                <div className="check">
                  <h6 className="roboto">
                    <i className="fa-solid fa-check"></i> Highly Experienced
                  </h6>
                </div>
                <div className="check">
                  <h6 className="roboto">
                    <i className="fa-solid fa-check"></i> Quick Installation
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our doors seaction end */}

      {/* <section
  className="elementor-section elementor-top-section elementor-element elementor-element-885de01 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
  data-id="885de01"
  data-element_type="section"
  data-settings='{"background_background":"classic","wdt_bg_image":{"url":"","id":"","size":""},"wdt_bg_image_widescreen":{"url":"","id":"","size":""},"wdt_bg_image_laptop":{"url":"","id":"","size":""},"wdt_bg_image_tablet_extra":{"url":"","id":"","size":""},"wdt_bg_image_tablet":{"url":"","id":"","size":""},"wdt_bg_image_mobile_extra":{"url":"","id":"","size":""},"wdt_bg_image_mobile":{"url":"","id":"","size":""},"wdt_bg_position":"center center","wdt_animation_effect":"none"}'
>
  <div className="elementor-container elementor-column-gap-no">
    <div
      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-31f164d"
      data-id="31f164d"
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <section
          className="elementor-section elementor-inner-section elementor-element elementor-element-031e8e4 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="031e8e4"
          data-element_type="section"
          data-settings='{"wdt_bg_image":{"url":"","id":"","size":""},"wdt_bg_image_widescreen":{"url":"","id":"","size":""},"wdt_bg_image_laptop":{"url":"","id":"","size":""},"wdt_bg_image_tablet_extra":{"url":"","id":"","size":""},"wdt_bg_image_tablet":{"url":"","id":"","size":""},"wdt_bg_image_mobile_extra":{"url":"","id":"","size":""},"wdt_bg_image_mobile":{"url":"","id":"","size":""},"wdt_bg_position":"center center","wdt_animation_effect":"none"}'
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-dc9a0ef"
              data-id="dc9a0ef"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap"></div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ea72ad3"
              data-id="ea72ad3"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-ebc4b4b center elementor-widget elementor-widget-wdt-heading"
                  data-id="ebc4b4b"
                  data-element_type="widget"
                  data-settings='{"wdt_animation_effect":"none"}'
                  data-widget_type="wdt-heading.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="wdt-heading-holder"
                      id="wdt-heading-ebc4b4b"
                    >
                      <div className="wdt-heading-subtitle-wrapper wdt-heading-align-center">
                        <span className="wdt-heading-subtitle">
                          HIGH QUALITY
                        </span>
                      </div>
                      <h1 className="wdt-heading-title-wrapper wdt-heading-align-center wdt-heading-deco-wrapper">
                        <span className="wdt-heading-title">
                          PREMIUM PRODUCTS
                        </span>
                      </h1>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6d8b822"
              data-id="6d8b822"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap"></div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-inner-section elementor-element elementor-element-03133d0 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="03133d0"
          data-element_type="section"
          data-settings='{"wdt_bg_image":{"url":"","id":"","size":""},"wdt_bg_image_widescreen":{"url":"","id":"","size":""},"wdt_bg_image_laptop":{"url":"","id":"","size":""},"wdt_bg_image_tablet_extra":{"url":"","id":"","size":""},"wdt_bg_image_tablet":{"url":"","id":"","size":""},"wdt_bg_image_mobile_extra":{"url":"","id":"","size":""},"wdt_bg_image_mobile":{"url":"","id":"","size":""},"wdt_bg_position":"center center","wdt_animation_effect":"none"}'
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5b31e25"
              data-id="5b31e25"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-869bb76 wdt-custom-hover-image-box-style center elementor-widget elementor-widget-wdt-image-box"
                  data-id="869bb76"
                  data-element_type="widget"
                  data-settings='{"columns":"5","columns_tablet":"3","columns_laptop":2,"columns_tablet_extra":2,"columns_mobile_extra":1,"columns_mobile":1,"carousel_arrows_prev_arrow_vertical_top_indent":{"unit":"%","size":"","sizes":[]},"carousel_arrows_prev_arrow_vertical_top_indent_widescreen":{"unit":"px","size":"","sizes":[]},"carousel_arrows_prev_arrow_vertical_top_indent_laptop":{"unit":"px","size":"","sizes":[]},"carousel_arrows_prev_arrow_vertical_top_indent_tablet_extra":{"unit":"px","size":"","sizes":[]},"carousel_arrows_prev_arrow_vertical_top_indent_tablet":{"unit":"%","size":"","sizes":[]},"carousel_arrows_prev_arrow_vertical_top_indent_mobile_extra":{"unit":"px","size":"","sizes":[]},"carousel_arrows_prev_arrow_vertical_top_indent_mobile":{"unit":"%","size":"","sizes":[]},"carousel_arrows_prev_arrow_horizontal_left_indent":{"unit":"%","size":"","sizes":[]},"carousel_arrows_prev_arrow_horizontal_left_indent_widescreen":{"unit":"px","size":"","sizes":[]},"carousel_arrows_prev_arrow_horizontal_left_indent_laptop":{"unit":"px","size":"","sizes":[]},"carousel_arrows_prev_arrow_horizontal_left_indent_tablet_extra":{"unit":"px","size":"","sizes":[]},"carousel_arrows_prev_arrow_horizontal_left_indent_tablet":{"unit":"%","size":"","sizes":[]},"carousel_arrows_prev_arrow_horizontal_left_indent_mobile_extra":{"unit":"px","size":"","sizes":[]},"carousel_arrows_prev_arrow_horizontal_left_indent_mobile":{"unit":"%","size":"","sizes":[]},"carousel_arrows_next_arrow_vertical_top_indent":{"unit":"%","size":"","sizes":[]},"carousel_arrows_next_arrow_vertical_top_indent_widescreen":{"unit":"px","size":"","sizes":[]},"carousel_arrows_next_arrow_vertical_top_indent_laptop":{"unit":"px","size":"","sizes":[]},"carousel_arrows_next_arrow_vertical_top_indent_tablet_extra":{"unit":"px","size":"","sizes":[]},"carousel_arrows_next_arrow_vertical_top_indent_tablet":{"unit":"%","size":"","sizes":[]},"carousel_arrows_next_arrow_vertical_top_indent_mobile_extra":{"unit":"px","size":"","sizes":[]},"carousel_arrows_next_arrow_vertical_top_indent_mobile":{"unit":"%","size":"","sizes":[]},"carousel_arrows_next_arrow_horizontal_left_indent":{"unit":"%","size":"","sizes":[]},"carousel_arrows_next_arrow_horizontal_left_indent_widescreen":{"unit":"px","size":"","sizes":[]},"carousel_arrows_next_arrow_horizontal_left_indent_laptop":{"unit":"px","size":"","sizes":[]},"carousel_arrows_next_arrow_horizontal_left_indent_tablet_extra":{"unit":"px","size":"","sizes":[]},"carousel_arrows_next_arrow_horizontal_left_indent_tablet":{"unit":"%","size":"","sizes":[]},"carousel_arrows_next_arrow_horizontal_left_indent_mobile_extra":{"unit":"px","size":"","sizes":[]},"carousel_arrows_next_arrow_horizontal_left_indent_mobile":{"unit":"%","size":"","sizes":[]},"wdt_animation_effect":"none"}'
                  data-widget_type="wdt-image-box.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="wdt-image-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-with-description"
                      id="wdt-image-box-869bb76"
                      data-settings='{"enable_popup":""}'
                    >
                      <div className="wdt-column-wrapper wdt-column-gap-no">
                        <div className="wdt-column">
                          <div className="wdt-content-item">
                            <div className="wdt-content-media-group">
                              <div className="wdt-content-elements-group wdt-media-group wdt-media-image-cover">
                                <div className="wdt-content-image-wrapper">
                                  <div className="wdt-content-image">
                                    <a
                                      href="https://vindors.wpengine.com/services/wooden-doors/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={770}
                                        height={850}
                                        src="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-5.webp"
                                        className="attachment-full size-full wp-image-941"
                                        alt=""
                                        srcSet="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-5.webp 770w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-5-272x300.webp 272w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-5-768x848.webp 768w"
                                        sizes="(max-width: 770px) 100vw, 770px"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="wdt-media-image-cover-container">
                                  <div className="wdt-content-title">
                                    <h5>
                                      <a
                                        href="https://vindors.wpengine.com/services/wooden-doors/"
                                        target="_blank"
                                        rel="nofollow"
                                      >
                                        TIMBER DOORS
                                      </a>
                                    </h5>
                                  </div>
                                  <div className="wdt-content-description">
                                    Vivamus et odio lacus. ur bibendum justo
                                    soda les, lacinia augue id, aucue
                                    scelerisque elit.
                                  </div>
                                  <div className="wdt-content-button wdt-button-clone">
                                    <a
                                      href="https://vindors.wpengine.com/services/wooden-doors/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <div className="wdt-button-text">
                                        <span>Read more</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wdt-column">
                          <div className="wdt-content-item">
                            <div className="wdt-content-media-group">
                              <div className="wdt-content-elements-group wdt-media-group wdt-media-image-cover">
                                <div className="wdt-content-image-wrapper">
                                  <div className="wdt-content-image">
                                    <a
                                      href="https://vindors.wpengine.com/services/workspace-windows/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={770}
                                        height={850}
                                        src="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-4.webp"
                                        className="attachment-full size-full wp-image-942"
                                        alt=""
                                        srcSet="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-4.webp 770w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-4-272x300.webp 272w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-4-768x848.webp 768w"
                                        sizes="(max-width: 770px) 100vw, 770px"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="wdt-media-image-cover-container">
                                  <div className="wdt-content-title">
                                    <h5>
                                      <a
                                        href="https://vindors.wpengine.com/services/workspace-windows/"
                                        target="_blank"
                                        rel="nofollow"
                                      >
                                        DIGITAL DOORS
                                      </a>
                                    </h5>
                                  </div>
                                  <div className="wdt-content-description">
                                    lacinia augue id, aucue scelerisque elit
                                    vivamus et odio lacus. ur bibendum justo
                                    soda les.
                                  </div>
                                  <div className="wdt-content-button wdt-button-clone">
                                    <a
                                      href="https://vindors.wpengine.com/services/workspace-windows/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <div className="wdt-button-text">
                                        <span>Read more</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wdt-column">
                          <div className="wdt-content-item">
                            <div className="wdt-content-media-group">
                              <div className="wdt-content-elements-group wdt-media-group wdt-media-image-cover">
                                <div className="wdt-content-image-wrapper">
                                  <div className="wdt-content-image">
                                    <a
                                      href="https://vindors.wpengine.com/services/panaromic-windows/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={770}
                                        height={850}
                                        src="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-3.webp"
                                        className="attachment-full size-full wp-image-943"
                                        alt=""
                                        srcSet="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-3.webp 770w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-3-272x300.webp 272w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-3-768x848.webp 768w"
                                        sizes="(max-width: 770px) 100vw, 770px"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="wdt-media-image-cover-container">
                                  <div className="wdt-content-title">
                                    <h5>
                                      <a
                                        href="https://vindors.wpengine.com/services/panaromic-windows/"
                                        target="_blank"
                                        rel="nofollow"
                                      >
                                        CLEARSTORY WINDOWS
                                      </a>
                                    </h5>
                                  </div>
                                  <div className="wdt-content-description">
                                    At erat pellentesque adipiscing commodo elit
                                    at imperdiet. Bibendum neque egestas congue.
                                  </div>
                                  <div className="wdt-content-button wdt-button-clone">
                                    <a
                                      href="https://vindors.wpengine.com/services/panaromic-windows/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <div className="wdt-button-text">
                                        <span>Read more</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wdt-column">
                          <div className="wdt-content-item">
                            <div className="wdt-content-media-group">
                              <div className="wdt-content-elements-group wdt-media-group wdt-media-image-cover">
                                <div className="wdt-content-image-wrapper">
                                  <div className="wdt-content-image">
                                    <a
                                      href="https://vindors.wpengine.com/services/sliding-door-window/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={770}
                                        height={850}
                                        src="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-2.webp"
                                        className="attachment-full size-full wp-image-944"
                                        alt=""
                                        srcSet="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-2.webp 770w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-2-272x300.webp 272w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-2-768x848.webp 768w"
                                        sizes="(max-width: 770px) 100vw, 770px"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="wdt-media-image-cover-container">
                                  <div className="wdt-content-title">
                                    <h5>
                                      <a
                                        href="https://vindors.wpengine.com/services/sliding-door-window/"
                                        target="_blank"
                                        rel="nofollow"
                                      >
                                        STEEL DOORS
                                      </a>
                                    </h5>
                                  </div>
                                  <div className="wdt-content-description">
                                    Tortor dignissim convallis aenean et tortor
                                    at risus viverra adipiscing a erat nam at
                                    nulla facil.
                                  </div>
                                  <div className="wdt-content-button wdt-button-clone">
                                    <a
                                      href="https://vindors.wpengine.com/services/sliding-door-window/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <div className="wdt-button-text">
                                        <span>Read more</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wdt-column">
                          <div className="wdt-content-item">
                            <div className="wdt-content-media-group">
                              <div className="wdt-content-elements-group wdt-media-group wdt-media-image-cover">
                                <div className="wdt-content-image-wrapper">
                                  <div className="wdt-content-image">
                                    <a
                                      href="https://vindors.wpengine.com/services/garage-doors/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={770}
                                        height={850}
                                        src="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-1.webp"
                                        className="attachment-full size-full wp-image-945"
                                        alt=""
                                        srcSet="https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-1.webp 770w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-1-272x300.webp 272w, https://vindors.wpengine.com/wp-content/uploads/2023/05/home-image-one-1-768x848.webp 768w"
                                        sizes="(max-width: 770px) 100vw, 770px"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="wdt-media-image-cover-container">
                                  <div className="wdt-content-title">
                                    <h5>
                                      <a
                                        href="https://vindors.wpengine.com/services/garage-doors/"
                                        target="_blank"
                                        rel="nofollow"
                                      >
                                        HINGED DOORS
                                      </a>
                                    </h5>
                                  </div>
                                  <div className="wdt-content-description">
                                    Quis vel eros donec ac odio tempor orci
                                    dapibus ultrices. Tincidunt vitae semper
                                    quis lectus.{" "}
                                  </div>
                                  <div className="wdt-content-button wdt-button-clone">
                                    <a
                                      href="https://vindors.wpengine.com/services/garage-doors/"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <div className="wdt-button-text">
                                        <span>Read more</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
    </section> */}

      <div className="about-pr-img">
        <div className="container-fluid">
          <div className="gallery">
            <div className="img-container">
              <img src="./images/about/g-1.png" alt="window" />
              <div className="overlay">
                <h3 className="playfair">Casement Windows</h3>
                <p className="playfair">
                  {" "}
                  Casement windows are popular for their ability to provide
                  excellent ventilation when open, as they can direct breezes
                  into the building.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img src="./images/about/g-5.png" alt="window" />
              <div className="overlay">
                <h3 className="playfair">Sliding Windows</h3>
                <p className="playfair">
                  {" "}
                  Sliding windows, also known as slider windows or gliding
                  windows, are windows that open horizontally along a track.
                  They typically have two sashes.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img src="./images/about/g-6.png" alt="window" />
              <div className="overlay">
                <h3 className="playfair">Vertical Windows</h3>
                <p className="playfair">
                  vertical sliding windows are versatile, functional, and
                  suitable for various architectural styles and environments.
                  They provide a balance of ventilation.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img src="./images/about/g-7.png" alt="window" />
              <div className="overlay">
                <h3 className="playfair">Tilt and Turn Windows</h3>
                <p className="playfair">
                  {" "}
                  Tilt and turn windows are a type of window that can tilt open
                  at the top for ventilation or swing open inward from the side
                  for full access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="img-grid">
        <div class="gallery">
            <img src="./images/about/g-1.png" alt="window"/>
            <img src="./images/about/g-2.png" alt="window"/>
            <img src="./images/about/g-3.png" alt="window"/>
            <img src="./images/about/g-4.png" alt="window"/>
        </div>
    </div> */}

      {/* why people seaction start */}
      <div className="why-people">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5>WHY PEOPLE CHOOSE US</h5>
              <div className="custom-hr">
                <hr />
              </div>
              <h1 className="roboto">
                Dedicated to Providing Quality Services
              </h1>
              <p className="roboto">
                Empowered with knowledge of extreme weather conditions, White
                Wings has designed uPVC and System Aluminium Windows and Doors,
                Solid Panel Doors, and now Facades capable of withstanding
                extreme tropical conditions. 
              </p>
              <div className="expo">
                <a href="" className="roboto">
                  EXPLORE MORE
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-img ">
                <div className="image-wrapper shine">
                  <img src="./images/about/portfolio-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why people seaction end */}

      {/* happy client seaction start */}
      <div className="happy-client">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="nub">
                <h1 className="roboto">153+</h1>
                <h3 className="roboto">HAPPY CLIENTS</h3>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="nub">
                <h1 className="roboto">50+</h1>
                <h3 className="roboto">TECHNICIANS</h3>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="nub">
                <h1 className="roboto">100+</h1>
                <h3 className="roboto">EQUIPMENTS</h3>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="nub">
                <h1 className="roboto">22+</h1>
                <h3 className="roboto">DELIVERING STATES</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* happy client seaction end */}

      {/* about service section start */}
      <div className="service-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="roboto">OUR SERVICES</h5>
              <div class="custom-hr">
                <hr />
              </div>
              <h2 className="roboto">Explore our Services</h2>
              <p className="roboto">
                Book an Appointment with us, just leave the message with full
                details or for further inquiry drop us an email at front desk.
              </p>
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <input
                        type="name"
                        className="form-control roboto"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <input
                        type="name"
                        className="form-control roboto"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <input
                        type="name"
                        className="form-control roboto"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div class="mb-4">
                      <input
                        type="email"
                        className="form-control roboto"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control roboto"
                    name="name"
                    id=""
                    cols="100%"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="roboto">Send Message</button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="service-start-img">
                <h3>
                  Start Consultation if You Have Any Question About Our Service
                </h3>
                <div className="check-main">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="check">
                        <h6 className="roboto">
                          <i class="fa-solid fa-check"></i> Quick Installation
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="check">
                        <h6 className="roboto">
                          <i className="fa-solid fa-check"></i> 10 years Warranty
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="check">
                        <h6 className="roboto">
                          <i className="fa-solid fa-check"></i> Free Measurement
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="check">
                        <h6 className="roboto">
                          <i className="fa-solid fa-check"></i> Modern Design
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <i class="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="numbe">
                    <h5 className="roboto">Contact Us</h5>
                    <a href="tel:+91 98767 56756" className="roboto">
                      +91 98767 56756
                    </a>
                    {/* <p className='roboto'>+91 98767 56756</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about service section end */}
      <Whatsapp />
      <Footer />
    </>
  );
}

export default About;
