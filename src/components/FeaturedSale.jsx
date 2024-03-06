import React from "react";
import woman from "../images/womanexercise.jpg";

const FeaturedSale = () => {
  return (
    <>
      <div className="">
        <h1 className="mt-72 ml-40 font-bold mb-3 object-cover">
          Featured Sales
        </h1>
      </div>
      <div
        style={{ paddingRight: "4.5rem" }}
        className="ml-28 pr-4.5 grid lg:grid-cols-3 gap-4  pl-10 mt-4"
      >
        <div>
          <img src={woman} alt="" className="rounded-2xl" />
        </div>
        <div>
          <img src={woman} alt="" className="rounded-2xl" />
        </div>
        <div>
          <img src={woman} alt="" className="rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default FeaturedSale;
