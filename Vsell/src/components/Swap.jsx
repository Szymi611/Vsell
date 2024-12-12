import React from "react";
import avatar from "../assets/Ellipse109.png";
import star from "../assets/component32.png";
import verify from "../assets/verify12.png";
import menu from "../assets/menu12.png";

const Swap = () => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg max-w-md">
      {/* Menu icon */}
      <div>
        <img src={menu} alt="Menu" className="w-6 h-6 text-gray-500" />
      </div>

      {/*Name and title*/}
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="font-bold text-gray-800">Anna Effective</h3>
          <img src={verify} alt="Verified" className="w-5 h-5 ml-1" />
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-950">Double your income with me</p>
        </div>

        {/* Points */}
        <div className="flex items-center space-x-2">
          <img src={star} alt="Star" className="w-5 h-5" />
          <p className="text-gray-500">4881</p>
        </div>
      </div>
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-yellow-300 flex justify-center items-center">
        <img
          src={avatar} 
          alt="Profile"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Swap;
