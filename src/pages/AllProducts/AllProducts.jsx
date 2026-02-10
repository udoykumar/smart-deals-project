import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return loading ? (
    <Loader />
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
