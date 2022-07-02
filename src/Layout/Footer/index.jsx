import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaTiktok } from "react-icons/fa"

function Footer() {
  return (
    <div className="max-w-7xl mx-auto my-3 py-5 flex justify-center gap-4">      
      <div className="">
        <a href="https://www.facebook.com/alixlynx" target="_blank" rel="noreferrer">
          <FaFacebook className="w-8 h-8" />
        </a>
      </div>
      <div className="">
        <a href="https://www.instagram.com/thealixlynx/" target="_blank" rel="noreferrer">
          <AiFillInstagram className="w-8 h-8" />
        </a>
      </div>
      <div className="">
        <a href="https://www.tiktok.com/@thealixlynx" target="_blank" rel="noreferrer">
          <FaTiktok className="w-8 h-8" />
        </a>
      </div>
      <div className="">
        <a href="https://www.youtube.com/c/AlixLynx" target="_blank" rel="noreferrer">
          <AiFillYoutube className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
