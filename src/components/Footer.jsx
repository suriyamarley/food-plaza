import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-3 -mb-5">
      <div className="container mx-auto">
        <p className="text-white text-center text-sm md:text-base">
        By agree to our Terms of Service, Cookie Policy, Privacy Policy. All trademarks are properties of their respective owners. 2008-2023 &copy; Food Plaza™ Ltd. All rights reserved
        </p>
      </div>
      <div className="mb-7">
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
