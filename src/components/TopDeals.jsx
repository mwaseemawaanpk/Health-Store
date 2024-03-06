import React from "react";
import deal from "../images/deals.jpg";

const TopDeals = () => {
  return (
    <>
      {" "}
      <div className="">
        <h1 className="mt-3.5	 ml-40 font-bold mb-0 object-cover">Top Deals</h1>
      </div>
      <div
        style={{ paddingRight: "4.5rem" }}
        className="ml-28 pr-4.5 grid lg:grid-cols-5 gap-3  pl-10 mt-4"
      >
        <div>
          <img src={deal} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
        <div>
          <img src={deal} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
        <div>
          <img src={deal} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
        <div>
          <img src={deal} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
        <div>
          <img src={deal} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
      </div>
    </>
  );
};

export default TopDeals;
