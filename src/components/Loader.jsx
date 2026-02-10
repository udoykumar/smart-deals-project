import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center ">
      <h1 className="text-4xl text-red-500 font-bold animate-ping">
        Loading <span className="text-green-600 animate-pulse">...</span>
      </h1>
    </div>
  );
};

export default Loader;
