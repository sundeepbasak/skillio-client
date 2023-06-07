import React from "react";
import bgImage from "../../assets/background-g59455cae5_1280 (1).jpg";

const index = () => {
  //   console.log(bg);

  return (
    <div className="relative">
      <img src={bgImage} alt="" className="h-screen w-full" />
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] text-white text-4xl font-mono">
        404 - <span className="font-light">Page not found</span>
      </p>
    </div>
  );
};

export default index;
