import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/coleyrockin" target="blank">

            <FaGithub />

          </a>
          <a href="https://www.linkedin.com" target="blank">

            <FaLinkedin />

          </a>
          <a href="https://www.instagram.com" target="blank">

            <FaInstagram />

          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;