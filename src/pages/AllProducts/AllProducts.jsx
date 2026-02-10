import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);
  return loading ? (
    <div className="w-full h-96 flex items-center justify-center ">
      <h1 className="text-4xl text-red-500 font-bold animate-ping">
        Loading <span className="text-green-600 animate-pulse">...</span>
      </h1>
    </div>
  ) : (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-500 mt-10">
        All Products{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
