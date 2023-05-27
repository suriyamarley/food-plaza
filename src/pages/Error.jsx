import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="lg:w-[75%] h-auto mx-auto -mt-20">
        <h1 className="text-center text-gray-500 font-bold mb-3 text-lg md:text-3xl">
          Page Not Found
        </h1>
        <img
          src="https://cdn.dribbble.com/users/189859/screenshots/3639645/abc.gif"
          alt="error"
          className="w-[100%] h-[70vh]"
        />
      </div>
      <Link className="-mt-12" to={"/"}>
        <p className="flex gap-2 items-center bg-gray-700 text-white font-semibold p-2 rounded-lg">
          Go to Home <BsArrowLeft />{" "}
        </p>
      </Link>
    </div>
  );
};

export default Error;
