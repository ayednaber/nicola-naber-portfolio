import React from "react";
import "./Footer.scss";

const socials = ["instagram", "twitter", "linkedin"];

const Footer = () => (
  <footer>
    <div className="section">
      <p className="title">Social media</p>
      <div className="row">
        {socials.map((social, index) => (
          <div className="row" key={index}>
            <p className="link" onClick={() => social === "instagram" ? window.location.href = 'https://www.instagram.com/nicolanaber/' : '' }>{social}</p>
            {index !== socials.length - 1 && <div className="separator" />}
          </div>
        ))}
      </div>
    </div>
    <div className="section">
      <p className="title">Email</p>
      <p className="link mail" onClick={() => window.location.href = 'mailto:nabernicola04@gmail.com'}>nabernicola04@gmail.com</p>
    </div>
    <div className="section">
      <p className="title">Phone</p>
      <p className="link" onClick={() => window.location.href = 'tel:+962796724238'}>+962 7 9672 4238</p>
      {/* <p className="link mail">jesse@bloom.com</p> */}
    </div>
  </footer>
);

export default Footer;
