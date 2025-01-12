import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/_NEW-LOGO-Giotto-legno-250.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
            {/* Social Section */}
            <div className="text-center md:text-left sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl text-center font-semibold mb-4">
                  Social
                </h3>
                <div className="flex justify-around">
                  <ul>
                    <li className="mb-2">
                      <Link
                        to="http://facebook.com"
                        target="_blank"
                        className="text-md hover:text-gray-400 hover:underline transition-all"
                      >
                        Facebook
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="http://linkedin.com"
                        target="_blank"
                        className="text-md hover:text-gray-400 hover:underline transition-all"
                      >
                        Linkedin
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="http://x.com"
                        target="_blank"
                        className="text-md hover:text-gray-400 hover:underline transition-all"
                      >
                        Twitter
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-2">
                      <Link
                        to="http://printerest.com"
                        target="_blank"
                        className="text-md hover:text-gray-400 hover:underline transition-all"
                      >
                        Pinterest
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="http://instagram.com"
                        target="_blank"
                        className="text-md hover:text-gray-400 hover:underline transition-all"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="http://tiktok.com"
                        target="_blank"
                        className="text-md hover:text-gray-400 hover:underline transition-all"
                      >
                        TikTok
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" text-center sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
              <ul>
                <li className="mb-2">
                  <Link
                    to="http://google.com"
                    target="_blank"
                    className="text-md hover:text-gray-400 hover:underline transition-all"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://google.com"
                    target="_blank"
                    className="text-md hover:text-gray-400 hover:underline transition-all"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://google.com"
                    target="_blank"
                    className="text-md hover:text-gray-400 hover:underline transition-all"
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://google.com"
                    target="_blank"
                    className="text-md hover:text-gray-400 hover:underline transition-all"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <Link
                    to="http://facebook.com"
                    target="_blank"
                    className="text-md hover:text-gray-400 hover:underline transition-all"
                  >
                    Giotto Legno UK Ltd
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://linkedin.com"
                    target="_blank"
                    className="text-md hover:text-gray-400 hover:underline transition-all"
                  >
                    Giotto Legno UK Ltd Italian Branch
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <figure>
                <img className="w-40" src={logo} alt="Logo" />
              </figure>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center md:justify-around text-center text-md mt-8">
            <p className="text-slate-400">
              © Giotto Legno UK Ltd - {new Date().getFullYear()} All Rights
              Reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
