import React, { use, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContexts";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const {
    _id: productId,
    title,
    status,
    image,
    created_at,
    category,
    email,
    location,
    seller_contact,
    description,
    usage,
    seller_image,
    seller_name,
    price_max,
    price_min,
  } = useLoaderData();
  const [bids, setBids] = useState([]);

  const bidsModalRef = useRef(null);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [productId]);

  const handleBidModalOpen = () => {
    bidsModalRef.current.showModal();
  };
  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log({ productId, name, email, bid });
    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user?.photoURL,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:5000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidsModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bid has been placed",
            showConfirmButton: false,
            timer: 2000,
          });

          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => b.bid_price - a.bid_price);
          setBids(newBids);
        }
      });
  };
  return (
    <div>
      <div>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <div className="bg-white border-gray-200 my-10">
            <Link
              to="/"
              className="bg-primary px-5 py-2 text-white rounded-full  transition-colors"
            >
              {/* <ArrowLeft className="w-5 h-5 mr-2" /> */}
              <span className="text-sm font-medium">Back To Products</span>
            </Link>
          </div>

          {/* Main Content */}
          <div className=" px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                  <img src={image} alt="" />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-gray-200 border-2 rounded-lg mt-4"
                    >
                      <img
                        className="bg-cover scale-90 hover:scale-100"
                        src={image}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                  <div className="mt-4 flex items-center space-x-2">
                    <span className="text-4xl font-bold text-green-600">
                      {price_max}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {price_min}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Price starts from
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Product Details
                    </h3>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      {/* <p>
                        <span className="font-medium">Product ID:</span>{" "}
                        4613f3b3c7f3c4a36f8bc982b4
                      </p> */}
                      <p>
                        <span className="font-medium">Posted:</span> 10/18/2024
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Product Description
                    </h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <span>
                          <span className="font-medium">Condition:</span> New
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <span className="font-medium">Usage Time:</span>{" "}
                          {usage}
                        </span>
                      </div>
                      <p className="mt-3 leading-relaxed">{description}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Seller Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-300 rounded-full w-12 h-12" />
                        <div>
                          <p className="font-medium text-gray-900">
                            {seller_name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {seller_contact}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Location:</span>{" "}
                          {location}
                        </p>
                        <p>
                          <span className="font-medium">Contact:</span>{" "}
                          {seller_contact}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                          {status}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleBidModalOpen}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>I Want Buy This Product</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <dialog
          ref={bidsModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Give the best offer!</h3>
            <p className="py-4">offer something seller can not resist</p>

            <form onSubmit={handleBidSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  readOnly
                  defaultValue={user?.displayName}
                />
                <label className="label">Password</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  readOnly
                  defaultValue={user?.email}
                />
                <label className="label">Bid</label>
                <input
                  type="text"
                  name="bid"
                  className="input"
                  placeholder="your bid"
                />

                <button className="btn btn-neutral mt-4">
                  Please your bid
                </button>
              </fieldset>
            </form>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div>
        <h3 className="text-3xl">
          Bids for this products: ({" "}
          <span className="text-primary">{bids.length}</span>)
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL NO.</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, ind) => (
                <tr key={bid._id}>
                  <th className="text-black z-10">{ind + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={bid.image} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{bid.buyer_email}</td>
                  <td>{bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
