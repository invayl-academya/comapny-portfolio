import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  py-10 mt-10" id="footer">
      <div className="max-w-7xl mx-auto px-4  grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="">
          <h2 className="text-2xl font-bold  text-blue-500 mb-2">
            Invayl TechCorp
          </h2>
          <p className="text-gray-400 text-sm">
            we deliver high-quality web and apps solutinand startup enterprises
          </p>
        </div>

        {/* links  */}
        <div>
          <h3>Quick Links</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>
              <a href="#hero" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#cantact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media  LInks  */}
        <div>
          <h3>Follow Us</h3>

          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a href="#" className="hover:text-blue-500 text-xl">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className="hover:text-blue-500 text-xl">
              <FaTwitter size={22} />
            </a>{" "}
            <a href="#" className="hover:text-blue-500 text-xl">
              <FaLinkedinIn size={22} />
            </a>{" "}
            <a href="#" className="hover:text-blue-500 text-xl">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Invayl TechCorp . All rights reserved{" "}
      </div>
    </footer>
  );
};

export default Footer;
