import React from "react";

import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { RiTiktokLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__web container">
        <div className="footer__icon">
          <FaInstagram />
        </div>
        <div className="footer__icon">
          <PiTelegramLogoBold />
        </div>
        <div className="footer__icon">
          <RiTiktokLine />
        </div>
        <div className="footer__icon">
          <SlLocationPin />
        </div>
      </div>
      <div className="footer__hr"></div>
      <div className="footer__content container">
        <h1>
          @www...*<span>eli</span>.burger...//KYRGYZSTAN\\
        </h1>
      </div>
    </div>
  );
}

export default Footer;
