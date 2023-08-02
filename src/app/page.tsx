"use client";
import React, { useState } from "react";

const Home = () => {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <div className="w-full h-full absolute flex justify-center items-center ">
      <div>
        <div className=" flex justify-center items-center">
          <img
            className="w-48 h-48 rounded-full border-8 border-white"
            src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
            alt=""
          />
        </div>
        <div className=" text-2xl font-black text-center mt-2 ">
          LE VAN KIEN
        </div>
        <div className=" font-bold text-center mt-2">I'm is Developer</div>
      </div>
    </div>
  );
};

export default Home;
