import React, { useState } from "react";
import viteman from "../images/vitamin.jpg";
import CategoryData from "./CategoryApi";

const Category = ({}) => {
  const [categoryData, setCategoryData] = useState(CategoryData);
  return (
    <>
      <div className="">
        <h1 className="mt-4 ml-40 font-bold mb-0  object-cover">
          Shop by Category
        </h1>
      </div>
      <div
        style={{ paddingRight: "4.5rem" }}
        className="ml-28 pr-4.5 grid lg:grid-cols-5 gap-3  pl-10 mt-4"
      >
        <div>
          <img src={viteman} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
        <div>
          <img src={viteman} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
        <div>
          <img src={viteman} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
        <div>
          <img src={viteman} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
        <div>
          <img src={viteman} alt="" className="rounded-2xl" />
          <h1 className="font-medium">Vitamins supplement</h1>
          <p>upto 20% confession on first purchase</p>
        </div>
      </div>
    </>
  );
};

export default Category;
