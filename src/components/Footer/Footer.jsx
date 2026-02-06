import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div>
        <h1>
          Smart<span className="text-purple-600 font-bold">Deals</span>
        </h1>
        <p className="text-gray-400">
          Your trusted marketplace for authentic local products. Discover the
          best deals from across Bangladesh.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-xl">Quick Links</h1>
        <Link>All Products</Link>
        <Link>Dashboard</Link>
        <Link>Login</Link>
        <Link>Register</Link>
      </div>
    </div>
  );
};

export default Footer;
