import React, { useState, useEffect } from "react";
const Dashboard = () => {
const temperature = 32;
  const humidity = 44;
  const lightStatus = "Dark";
  const flameStatus = "No flame";
  const gasLevel = 144;
  return (
    <div className="bg-[#1B1833] text-white flex flex-col justify-center overflow-x-hidden">
      <div className="flex justify-center md:max-h-full max-h-[84px]">
        <nav className="flex text-md sm:text-xl md:text-3xl p-6  font-mono">
          <img
            src="https://i.ibb.co/x8CdBYgz/istevit.png"
            alt="icon"
            className="w-[35px] h-[35px] md:w-[52px] md:h-[52px] mr-4 "
          />
          <h1 className="mt-2">Room Monitoring System</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3605/3605855.png"
            alt="icon"
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] ml-4 "
          />
        </nav>
        <div className=" absolute w-full h-[1px] bg-[#6f5af5]  shadow-[0_0_20px_#6f5af5]"></div>
        <div className="absolute mt-20 md:mt-24 w-full h-[1px] bg-[#6f5af5]  shadow-[0_0_20px_#6f5af5]"></div>
      </div>


</div> 
  );
};
export default Dashboard;
