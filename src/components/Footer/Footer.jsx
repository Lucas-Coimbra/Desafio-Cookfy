import React from "react";
import "./Footer.css";

import logo from "../../assets/logo-cookfy.svg";
import FacebookIcon from "../../assets/fb.svg?react";
import InstagramIcon from "../../assets/ig.svg?react";
import TwitterIcon from "../../assets/twitter.svg?react";
import LinkedinIcon from "../../assets/linkedin.svg?react";
import PinterestIcon from "../../assets/pinterest.svg?react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <img src={logo} alt="Cookfy" className="footer__logo" />
          <span className="footer__copy">© 2020 Cookfy.</span>
        </div>

        <div className="footer__right" aria-label="Redes sociais">
          <button className="footer__social-button" aria-label="Facebook">
            <FacebookIcon className="footer__social-icon" />
          </button>

          <button className="footer__social-button" aria-label="Instagram">
            <InstagramIcon className="footer__social-icon" />
          </button>

          <button className="footer__social-button" aria-label="Twitter">
            <TwitterIcon className="footer__social-icon" />
          </button>

          <button className="footer__social-button" aria-label="LinkedIn">
            <LinkedinIcon className="footer__social-icon" />
          </button>

          <button className="footer__social-button" aria-label="Pinterest">
            <PinterestIcon className="footer__social-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
