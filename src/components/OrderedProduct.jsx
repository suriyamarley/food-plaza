import React from "react";
import { useStateValue } from "../contexts/StateProvider";

const OrderedProduct = () => {
  const [{ orders }] = useStateValue();

  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
          Customer’s Cart
        </p>
        <div className="hidden mt-4 font-semibold underline text-gray-700 md:block w-full">
          <div className=" flex justify-between">
            <div className="flex-1 flex justify-center">
              <h1 className="text-xl">
                {orders.length > 1 ? "Food Items" : "Food Item"}
              </h1>
            </div>
            <div className="flex flex-1 justify-between">
              <p className="pl-20">Prize</p>
              <p className="pl-14">Quantity</p>
              <p>Total Prize</p>
            </div>
          </div>
        </div>
        {orders.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full shadow-md md:shadow-none"
            >
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full order-img hidden md:block"
                  src={item.imageURL}
                  alt="ordered-img"
                />
                <img
                  className="w-36 order-img mx-auto md:hidden"
                  src={item.imageURL}
                  alt="ordered-img"
                />
              </div>
              <div className="border-b px-4 md:px-0 border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base flex flex-col items-center xl:text-lg leading-6">
                    <span className="md:hidden underline text-[0.9rem] font-medium text-gray-600">
                      Prize
                    </span>
                    $ {item.price}
                  </p>
                  <p className="text-base flex flex-col items-center xl:text-lg leading-6 text-gray-800">
                    <span className="md:hidden underline text-[0.9rem] font-medium text-gray-600">
                      Quantity
                    </span>
                    {item.qty}
                  </p>
                  <p className="text-base flex flex-col items-center xl:text-lg font-semibold leading-6 text-gray-800">
                    <span className="md:hidden underline text-[0.9rem] font-medium text-red-600">
                      Total Prize
                    </span>
                    $ {item.price * item.qty}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrderedProduct;
