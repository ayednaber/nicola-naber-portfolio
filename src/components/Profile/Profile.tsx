import React from "react";
import "./Profile.scss";
import {FaPhoneAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

const Profile = () => (
  <div className="profile" id="profile">
    <div className="left-container">
      <p className="label">About me</p>
    </div>
    <div className="right-container">
      <p className="label-1">
      Hello, I am an aspiring model at the dawn of my career, full of energy and commitment to the fashion industry. My modeling journey started with a genuine passion for aesthetics and art, which I aim to reflect in every project I engage in.
      </p>
      <p className="label-1">
      Though a newcomer, I am not afraid to step out of my comfort zone and am always eager to learn and adapt to new trends and styles. My goal is to deliver a fresh perspective and authenticity to every assignment, aiming to leave a unique imprint in the modeling field.
      </p>
    </div>
    <div className="contact-buttons">
      <button className="contact-button" onClick={() => window.location.href = 'tel:+962796724238'}>
        <FaPhoneAlt />
        <p className="contact-text">+962 7 9672 4238</p>
      </button>
      <button className="contact-button" onClick={() => window.location.href = 'mailto:nabernicola04@gmail.com'}>
        <AiOutlineMail />
        <p className="contact-text">nabernicola04@gmail.com</p>
      </button>
    </div>
  </div>
);

export default Profile;
