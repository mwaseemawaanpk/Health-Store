import React from "react";

const Header = () => {
  return (
    <div className=" shadow-md w-full top-0 flex justify-between items-center ">
      <div
        className="md:flex bf-white py-2 ml-8 content-normal mt-0 
    "
      >
        <div>
          <span>
            <ion-icon name="walk-sharp"></ion-icon>
          </span>

          <strong className="ml-2">Health & Wellness</strong>
        </div>
        <div>
          {/* search box portion */}

          <form action="" className="ml-6">
            <input
              type="text"
              placeholder="Search"
              autoComplete="off"
              className="text-gray rounded-lg px-3 py-1 border-none ring-transparent ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500 "
            />
          </form>
        </div>
      </div>

      {/* navbar button portion */}
      <div class="flex items-center mr-6 font-medium">
        <button class="ml-4 bg-selfGreen text-black  px-4 py-2  rounded-lg">
          Join Now
        </button>
        <button class="ml-2 bg-selfGreen text-black px-4 py-2 rounded-lg">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
