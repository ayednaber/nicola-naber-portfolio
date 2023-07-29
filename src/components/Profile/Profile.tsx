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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
        inventore eaque unde ad, neque sapiente magnam praesentium dolorum
        impedit in corrupti molestias, suscipit placeat fuga quis illum
        recusandae laboriosam et.
      </p>
      <p className="label-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
        praesentium dolores voluptatem quia exercitationem est quasi dolor
        libero in? Sequi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Nostrum, illo.
      </p>
    </div>
    <div className="contact-buttons">
      <button className="contact-button" onClick={() => window.location.href = 'tel:+962796724238'}>
        <FaPhoneAlt />
        <p style={{marginLeft: 10}}>+962 7 9672 4238</p>
      </button>
      <button className="contact-button" onClick={() => window.location.href = 'mailto:nabernicola04@gmail.com'}>
        <AiOutlineMail />
        <p style={{marginLeft: 10}}>nabernicola04@gmail.com</p>
      </button>
    </div>
  </div>
);

export default Profile;
