import React from "react";
import emailjs from "@emailjs/browser";

function Email() {
  function handleEmail(e) {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
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
    <div className="App">
      <h1 className="page__title">Contact Us</h1>
      <form className="contact__form" onSubmit={handleEmail}>
        <label htmlFor="emailFrom">Email:</label>
        <input
          type="text"
          name="email_from"
          id="emailFrom"
          className="email__from"
          placeholder="person@example.com"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          className="message__box"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Email;
