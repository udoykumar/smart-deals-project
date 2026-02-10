import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductsPromise = fetch(
  "http://localhost:5000/latest-products",
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner />
      <LatestProducts latestProductsPromise={latestProductsPromise} />
    </div>
  );
};

export default Home;
