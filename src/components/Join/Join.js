import React from "react";
import "./Join.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y69198j', 'template_0v2oyxc', form.current, 'tTfaZFoVVoeOvzb-X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your E-mail address" onSubmit={sendEmail}
          />
          <button className="btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
