import React from "react";
import Delivery from "../assets/pngwing.com.png";
import HeroBg from "../assets/img/pexels-israel-albornoz-12034622.jpg";



const HomeContainer = () => {
  return (
    <section className="hero-home grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-white px-4 py-1  rounded-lg ">
          <p className="text-base text-red-500  bike">Ready To Delivery</p>
          <div className="w-8 h-8 overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className=" para-hero text-[2.5rem] lg:text-[4.15rem] text-center lg:text-left font-bold tracking-wide text-headingColor">
          Creativity is{" "}
          <span className="text-white text-[3rem] lg:text-[4.5rem]  para-hero">
            Always
          </span>{" "}
          On Our Menu !!!
        </p>
        <p className="hero-para text-base w-full text-textColor text-center md:text-left md:w-[80%]">
          We Provide excellent serve with our Heartfully customers & Online Orders can perfectly deliverd with Hot...
          </p>
       
        <button
          type="button"
          className="bg-gradient-to-br bg-teal-400 font-medium md:w-auto w-full px-4 py-2 text-white rounded-xl hover:shadow-lg transition-all duration-150 ease-in-out"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto rounded-t-2xl lg:h-650 h-420  w-full lg:w-auto"
        />
      </div>
    </section>
  );
};

export default HomeContainer;
