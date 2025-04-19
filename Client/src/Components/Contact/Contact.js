import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:kashifkzmi5@gmail.com">
          ketanpathade7@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/ketanpathade">
          User Name: ketanpathade
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/Ketan-cmd">
          ketan-cmd
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/_ketan_302_">
          @_ketan_302_
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+92--------87">
          +92 3236556561
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
