
import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-primary flex items-center justify-center relative">
      <span
        style={{ fontFamily: "SuperMario" }}
        className="absolute text-primary-400 text-xl"
      >
      </span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
