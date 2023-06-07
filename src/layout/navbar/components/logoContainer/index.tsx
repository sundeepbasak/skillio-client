import { useState } from "react";
import logo from "../../../../assets/7642543-removebg-preview.png";

const index = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center align-middle mr-8 ">
        <div
          className="flex items-center justify-center  
       
        "
        >
          <img
            className={`h-20 w-24 hover:-rotate-45 hover:transition-colors  transition-transform`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src={logo}
          />
        </div>

        {!isHovered ? (
          <h1
            className={`text-xl mt-1  font-extrabold text-center font-poppins text-green-300`}
          >
            Skillio
          </h1>
        ) : (
          <h2
            className={`text-xl mt-1 scale-110 font-extrabold text-center font-poppins text-green-900`}
          >
            Skillio
          </h2>
        )}
      </div>
    </>
  );
};

export default index;

// border border-cyan-700
