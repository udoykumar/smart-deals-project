import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { title, price_max, image, _id } = product;
  console.log(_id);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-primary">${price_max}</p>
        <div className="card-actions ">
          <Link
            to={`/productDetails/${_id}`}
            className="btn btn-outline w-full text-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
