import React from "react";
import { footerImages } from "../utils/data";






const FooterImages = () => {
  return (



    <div className="max-w-[1640px] m-auto px-4 pb-3 -mt-14">


      <h1 className="text-white md:text-3xl lg:text-4xl text-xl text-center footer-title">
        Our Restaurant Provides
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 py-6">
        {footerImages.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg p-4 flex justify-between items-center bg-white"
          >
            <h2 className="font-bold text-sm md:text-xl">{item.name}</h2>
            <img
              src={item.image}
              alt={item.name}
              className="lg:w-20 md:w-15 w-[50px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default FooterImages;
