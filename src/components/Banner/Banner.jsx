import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen space-y-6 mt-10">
      <h1 className="text-5xl font-bold">
        Deal Your <span className="text-purple-600">Products</span>
        <br /> In A <span className="text-purple-600">Smart</span> Way!
      </h1>
      <p>
        SmartDEals helps you resel, and shop from trusted local sellers -- all
        in one place!
      </p>
      <div>
        <input
          className="bg-white shadow-2xl rounded-full border max-w-[400px] py-2 px-4"
          type="text"
          placeholder="Search for products"
        />
      </div>
      <div>
        <button className="px-6 py-3 mr-5 rounded-md text-white btn-primary">
          Watch All Products
        </button>
        <button className="px-6 py-3 rounded-md  border-2 border-primary text-primary">
          Post an Product
        </button>
      </div>
    </div>
  );
};

export default Banner;
