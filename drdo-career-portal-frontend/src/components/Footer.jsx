import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white font-sans py-6">
      <div className="container mx-2 px-4 flex flex-col gap-2 justify-between items-center">
        <div className="mb-4 text-center md:text-left">
          <p className="text-sm font-bold">
            &copy; 2025 DRDO. All rights reserved.
          </p>
          <p className="text-xs">Designed with passion and commitment.</p>
        </div>

        <div className="flex space-x-6 text-sm mb-4">
          <a
            href="https://drdo.gov.in/drdo/about-drdo"
            className="hover:underline hover:text-gray-300 transition"
          >
            About Us
          </a>
          <a
            href="https://drdo.gov.in/drdo/contact-us"
            className="hover:underline hover:text-gray-300 transition"
          >
            Contact
          </a>
          <a
            href="https://drdo.gov.in/drdo/privacy-policy"
            className="hover:underline hover:text-gray-300 transition"
          >
            Privacy Policy
          </a>
        </div>

        <div className="flex space-x-4 mb-4 ">
          <a
            href="https://www.facebook.com/DPIDRDO/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://x.com/DRDO_India"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/company/drdo-ministry-of-defence-govt-of-india/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/dpi.drdo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
