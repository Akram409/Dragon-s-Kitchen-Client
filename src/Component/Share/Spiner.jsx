import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Spiner = () => {
  return (
    <div className="flex justify-center item-center">
        <div className="sweet-loading">
      <HashLoader color="#36d7b7" loading={true} size={80} speedMultiplier={1} />
    </div>
    </div>
  );
};

export default Spiner;
