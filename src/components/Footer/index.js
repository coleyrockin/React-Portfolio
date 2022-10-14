import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-center">
      <footer>
        <ul className='flex text-lg'>
          <a href="https://github.com/coleyrockin" target="blank">

            <FaGithub />

          </a>
          <a href="https://www.linkedin.com/https://www.linkedin.com/in/boyd-roberts-b27585239/" target="blank">

            <FaLinkedin />

          </a>
          <a href="https://www.instagram.com/coleyrockin/" target="blank">

            <FaInstagram />

          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;