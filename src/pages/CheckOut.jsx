import React, { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import Orders from "../components/Orders";
import Modal from "../components/Modal";

const Checkout = ({ form, setForm, cartItems, setCartItems }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        setisModalOpen={setisModalOpen}
        setCartItems={setCartItems}
      />
      <div className="relative bg-checkout py-20 lg:py-52">
        <h1 className="pl-5 lg:pl-12 font-bold text-white text-md lg:text-4xl">
          Checkout
        </h1>
      </div>
      <div className="container p-6 md:p-12 mx-auto">
        <div className="flex flex-col-reverse gap-8 -mt-16 md:mt-0 w-full px-0 mx-auto md:flex-row">
          <CheckoutForm
            cartItems={cartItems}
            userProfile={form}
            setForm={setForm}
            setisModalOpen={setisModalOpen}
          />
          <Orders cartItems={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Checkout;
