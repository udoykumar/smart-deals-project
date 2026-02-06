import React, { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestProductsPromise }) => {
  const latestProducts = use(latestProductsPromise);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">
        Recent <span className="text-primary">Products</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 ">
        {latestProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
