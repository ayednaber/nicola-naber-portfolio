import React from "react";
import "./Footer.scss";

const socials = ["instagram", "facebook"];

const Footer = () => (
  <footer>
    <div className="section">
      <p className="title">Social media</p>
      <div className="row">
        {socials.map((social, index) => (
          <div className="row" key={index}>
            <p className="link" onClick={() => social === "instagram" ? window.open('https://www.instagram.com/nicolanaber/') : window.open('https://www.facebook.com/profile.php?id=100006120510287') }>{social}</p>
            {index !== socials.length - 1 && <div className="separator" />}
          </div>
        ))}
      </div>
    </div>
    <div className="section">
      <p className="title">Email</p>
      <p className="link mail" onClick={() => window.location.href = 'mailto:nabernicola00@gmail.com'}>nabernicola00@gmail.com</p>
    </div>
    {/* <div className="section">
      <p className="title">Phone</p>
      <p className="link" onClick={() => window.location.href = 'tel:+962796724238'}>+962 7 9672 4238</p>
    </div> */}
  </footer>
);

export default Footer;
