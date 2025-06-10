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
 <div className="bg-black flex min-h-screen justify-around">
        <div className="flex flex-col mt-6">
          <div className="flex flex-col space-y-14 md:space-y-0 md:flex-row m-10 md:space-x-14">
            <div className="md:w-[35rem] md:h-96 flex justify-center items-center">
              <div className="w-52 h-52 md:w-[20rem] md:h-[20rem] rounded-full border-[4px] border-pink-800 bg-[#121021] transition-all relative shadow-[0_0_15px_#ff4cf0] flex items-center justify-center hover:-translate-y-2 cursor-pointer">
                <div className="text-center">
                  <p className="text-white text-xl mb-2">Temperature</p>
                  <p className="text-5xl font-bold text-pink-400">
                    {temperature}°C
                  </p>
                </div>
                <div className="absolute inset-0 rounded-full border-[10px] border-transparent border-t-pink-500 animate-spin-slow"></div>
              </div>
            </div>
             <div className="relative flex flex-col space-y-14  md:space-y-11 ml-3 md:ml-0">
              <div className="w-52 h-52 md:w-[35rem] md:h-40 border-2 rounded-full md:rounded-s-full md:rounded-r-none transition-all border-blue-800 bg-[#121021] shadow-[0_0_15px_#00f0ff] flex items-center px-8 cursor-pointer hover:-translate-y-2">
                <div className="text-white">
                  <p className="text-lg text-blue-300 text-center md:text-left md:ml-5">HUMIDITY</p>
                  <p className="text-5xl font-semibold text-blue-400 text-center md:ml-4 md:mt-1">
                    {humidity}%
                    <input
                      type="range"
                      value={humidity}
                      className=" ml-0 md:ml-4 "
                    ></input>
                  </p>
                  <p className="hidden md:flex text-sm text-gray-400 mt-2 ml-4">
                    Current moisture level
                  </p>
                </div>
                <div className="hidden md:flex ml-auto text-6xl text-blue-400 opacity-60">
                  💧
                </div>
              </div>
    
    
    
     </div>         
            
    </div></div></div>

</div> 
  );
};
export default Dashboard;
