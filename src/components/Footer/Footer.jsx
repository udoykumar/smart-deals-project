import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Smart<span className="text-purple-500">Deals</span>
          </h1>
          <p className="mt-3 text-gray-400">
            Your trusted marketplace for authentic local products. Discover the
            best deals from across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <div className="flex flex-col gap-2">
            <Link className="hover:text-purple-400 transition">
              All Products
            </Link>
            <Link className="hover:text-purple-400 transition">Dashboard</Link>
            <Link className="hover:text-purple-400 transition">Login</Link>
            <Link className="hover:text-purple-400 transition">Register</Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Categories</h2>
          <div className="flex flex-col gap-2">
            <Link className="hover:text-purple-400 transition">
              Electronics
            </Link>
            <Link className="hover:text-purple-400 transition">Computers</Link>
            <Link className="hover:text-purple-400 transition">
              Home Appliances
            </Link>
            <Link className="hover:text-purple-400 transition">
              Photography
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>

          <div className="flex items-center gap-2 mb-2">
            <MdEmail className="text-purple-500" />
            <p>support@smartdeals.com</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <MdPhone className="text-purple-500" />
            <p>+880 1700-000000</p>
          </div>

          <div className="flex items-center gap-2">
            <MdLocationOn className="text-purple-500" />
            <p>Dhaka, Bangladesh</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <FaFacebookF className="cursor-pointer hover:text-purple-500 transition" />
            <FaInstagram className="cursor-pointer hover:text-purple-500 transition" />
            <FaTwitter className="cursor-pointer hover:text-purple-500 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-purple-500 transition" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © {new Date().getFullYear()} SmartDeals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
