import React, { useEffect, useState } from "react";
import { useStateValue } from "../contexts/StateProvider";
import { OrderedProduct, OrderedUser } from "../components";
import noOrder from "../assets/416873-PDT894-517.jpg"

const OrderSummary = ({ form }) => {
  const [{ orders }] = useStateValue();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const orderTotal = orders.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.qty;
    }, 0);
    setTotal(orderTotal);
  }, [orders]);

  return (
    <>
      {orders.length < 1 ? (
        <div className="lg:w-[75%] mx-auto h-screen py-5 mb-10 md:py-8">
          <h1 className="text-center text-gray-700 text-base md:text-xl lg:text-2xl font-medium mt-20 mb-3">
            You haven't ordered any foods yet.
          </h1>
          <div>
            <img
              src={noOrder}
              alt="no-orders"
              className="h-[70vh] w-[50%] flex-1 items-center justify-center m-auto noorder"
            />
          </div>
        </div>
      ) : (
        <div className="py-6 px-4 md:px-6 mt-16 md:mt-20 2xl:px-20 2xl:container 2xl:mx-auto">
          <div className="flex justify-start item-start space-y-2 flex-col ">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
              Order Summary
            </h1>
          </div>
          <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
              <OrderedProduct />
              <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Summary
                  </h3>
                  <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between  w-full">
                      <p className="text-base leading-4 text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        $ {total}
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base leading-4 text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        $ 3.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base font-semibold leading-4 text-gray-800">
                      Total
                    </p>
                    <p className="text-base font-semibold leading-4 text-gray-600">
                      $ {total + 3}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Shipping
                  </h3>
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center space-x-4">
                      <div className="w-8 h-8">
                        <img
                          className="w-full h-full"
                          alt="logo"
                          src="https://i.ibb.co/L8KSdNQ/image-3.png"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-center">
                        <p className="text-lg leading-6 font-semibold text-gray-800">
                          DPD Delivery
                          <br />
                          <span className="font-normal text-xs md:text-base lg:text-lg">
                            Delivery within 30 Minutes
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold leading-6 text-gray-800">
                      $8.00
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                      View Carrier Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <OrderedUser {...form} />
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
