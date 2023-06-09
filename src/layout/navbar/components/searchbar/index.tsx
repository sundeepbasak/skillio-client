import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const index = () => {
  return (
    <>
      <div className="w-2/6 border h-1/2 rounded-lg flex items-center justify-start grid-flow-row pl-2 pr-2 flex-1  bg-green-100">
        <BiSearchAlt
          style={{
            fontSize: "2.5rem",
          }}
        />
        <div className=" h-11 flex flex-1 w-full items-center">
          <input
            type="text"
            placeholder="search for courses"
            className="border-none p-1 h-6  flex flex-1 w-full focus:border-none focus:outline-none bg-transparent text-base font-bold text-black"
          />
        </div>
      </div>
    </>
  );
};

export default index;
