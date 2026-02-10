import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContexts";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/bids?email=${user.email}`).then((data) => {
      setBids(data.data);
      console.log(data.data);
    });
  }, [user, axiosSecure]);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-500 my-10 ">
        My Bids
      </h1>

      <div className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr] items-center py-1 px-4 rounded-md bg-gray-200 mb-2">
        <h1>SL NO</h1>
        <p>Product Img</p>
        <p>Seller Email</p>
        <p>Bid Price</p>
        <p className="text-center">Status</p>
        <p className="text-center">Actions</p>
      </div>
      <div className="">
        {bids.map((bid, index) => (
          <div
            key={bid._id}
            className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr] items-center py-1 px-4 rounded-md gap-3 bg-gray-100 mb-2 hover:scale-105 duration-300 ease-in "
          >
            <p>{index + 1}</p>

            <img
              src={bid?.product_image}
              alt={bid?.name}
              className="w-10 h-9 bg-white rounded-full"
            />
            <p>{bid.buyer_email}</p>
            <p>{bid.bid_price}</p>
            <p className="bg-green-300 text-green-700 rounded-full text-center ">
              {bid.status}
            </p>
            <p className="bg-red-300 text-red-700 rounded-full text-center ml-2 cursor-pointer">
              Delete
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBids;
