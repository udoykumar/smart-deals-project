import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { title, price_max, image, _id } = product;
  return (
    <div className="card bg-base-100 shadow-sm ">
      <div className="w-full h-64 overflow-hidden rounded-xl p-7 bg-gray-100 shadow-inner">
        <img
          src={image}
          alt={title}
          className="w-full h-full hover:scale-110 object-cover duration-300 ease-initial"
        />
      </div>
      <div className="px-3">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-primary">${price_max}</p>
        <div className="">
          <Link
            to={`/productDetails/${_id}`}
            className="btn btn-outline w-full btn-primary text-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
