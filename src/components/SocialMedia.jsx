import React from "react";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className="container mx-auto text-center flex gap-5 justify-center items-center mt-5 -mb-6 text-white ">
        <a href="https://instagram.com/itz_me_kitkat_boy?igshid=ZGUzMzM3NWJiOQ==">
          <div className="fa-instagram icons text-2xl hover:text-orange-400 transition-all duration-300">
            <FaInstagram />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/surya-a-b48330260">
          <div className="fa-linkedin icons text-2xl hover:text-orange-400 transition-all duration-300">
            <FaLinkedin />
          </div>
        </a>
        <a href="https://github.com/suriyamarley">
          <div className="fa-github icons text-2xl hover:text-orange-400 transition-all duration-300">
            <FaGithub />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
