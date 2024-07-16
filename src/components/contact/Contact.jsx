import React from "react";
import Navbar from "../navbar/Navbar";
import "./contact.css";
import Footer from "../footer/Footer";
import Whatsapp from "../whatsapp/Whatsapp";
import emailjs from "@emailjs/browser";

function Contact() {
  function handleEmail(e) {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_SUBSCRIBE_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(() => {
        form.reset();
        alert("Form submitted sucessfully");
      })
      .catch((error) => {
        form.reset();
        alert("Failed to Submitted Form");
      });
  }
  function handleFormEmail(e) {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(() => {
        form.reset();
        alert("Form submitted sucessfully");
      })
      .catch((error) => {
        form.reset();
        alert("Failed to Submitted Form");
      });
  }
  return (
    <>
      <div className="contact-page">
        <Navbar />
        <div className="container">
          <h1 className="playfair">Contact Us</h1>
        </div>
      </div>
      {/* contact deatils seaction start */}
      <div className="contact-main">
        <div className="container">
          <h5 className="roboto">CONTACT US</h5>
          <div class="custom-hr">
            <hr />
          </div>
          <h1 className="roboto">Get in Touch</h1>
          <div className="add-de">
            <div className="row">
              <div className="col-lg-4">
                <div className="c-box">
                  <div className="loca">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="our-add">
                    <h6 className="roboto">Our Office Address</h6>
                    <p className="roboto">
                      48, Ram Nagar Society Laxmikant-Ashram Road, Katargam,
                      Surat 395004 (Guj) India.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="c-box">
                  <div className="icon">
                    <i class="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="our-add">
                    <h6 className="roboto">Our Phone</h6>
                    {/* <p className="roboto">Office Telephone: 0261 897 456</p> */}
                    <p className="roboto">Mobile: 
                      <a href="tel:+91 98790 52588">+91 98790 52588</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="c-box">
                  <div className="icon">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div className="our-add">
                    <h6 className="roboto">Our Email</h6>
                    <p className="roboto">
                      Main Email: <a href="mailto:whitewings25839@gmail.com" className="text-decoration-none">whitewings25839@gmail.com</a> 
                    </p>
                    {/* <p className="roboto">
                      Inquires: <a href="">www.bguard.in</a> </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact deatils seaction end */}

      {/* map sraction strat */}
      <div className="contact-map">
        <div className="contact-get">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.4665998134883!2d72.83330076339284!3d21.234497353982515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ec8e28f2fdd%3A0x4fbb2b82babea932!2sLaxmikant%20Ashram%20Rd%2C%20Rashi%20Circle%2C%20Bhulabhai%20Desai%20Park%2C%20Hari%20Darshan%20Society%2C%20Katargam%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1717388566675!5m2!1sen!2sin"
            width="100%"
            height={500}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="container">
            <div className="box">
              <div className="write">
                <h5 className="roboto">GET IN TOUCH</h5>
                <div class="custom-hr">
                  <hr />
                </div>
                <h3 className="roboto">Write Us a Message</h3>
                <p className="roboto">
                  White wings is India's largest manufacture & supplier of
                  energy efficient uPVC Windows & uPVC Doors. We source the
                  finest grade of raw material from European Fortune 500
                  companies.{" "}
                </p>
                <div className="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </div>
              <div className="book">
                <h6 className="roboto">
                  Book an Appointment with us, just leave the message with full
                  details at front desk.
                </h6>
                <div class="custom-hr">
                  <hr />
                </div>
                <form className="contact__form" onSubmit={handleFormEmail}>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-4">
                        <input
                          type="name"
                          name="user_name"
                          class="form-control roboto"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="First Name*"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-4">
                        <input
                          type="name"
                          name="user_number"
                          class="form-control roboto"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Phone Number*"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-4">
                        <input
                          type="name"
                          name="user_subject"
                          class="form-control roboto"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Subject*"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-4">
                        <input
                          type="name"
                          id="email"
                          name="user_email"
                          class="form-control roboto email"
                          aria-describedby="emailHelp"
                          placeholder="Email Address*"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <textarea
                      class="form-control roboto message"
                      type="name"
                      name="user_message"
                      id="message"
                      cols="100%"
                      rows="3"
                      placeholder="message*"
                    ></textarea>
                  </div>
                  <button class="roboto">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* map sraction end */}

      {/* news latter section start */}
      <div className="news-lat">
        <div className="container">
          <div className="latter">
            <h5 className="roboto">NEWSLETTER</h5>
            <div class="custom-hr">
              <hr />
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <h4 className="roboto">
                  Sign Up for Newsletter & get Latest News & Updates
                </h4>
              </div>
              <div className="col-lg-6">
                <div class="mb-4">
                  <form className="contact__form" onSubmit={handleEmail}>
                    <input
                      type="name"
                      class="form-control roboto email"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Email Address*"
                      required="required"
                    />
                    <button className="roboto">SUBSCRIBE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news latter section end */}

      <Whatsapp />
      <Footer />
    </>
  );
}

export default Contact;
