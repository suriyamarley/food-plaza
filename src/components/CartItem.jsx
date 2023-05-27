import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

const CartItem = ({ item, setFlag, flag, cartItems, setCartItems }) => {
  const increaseQty = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
      )
    );
    setFlag(flag + 1);
  };

  const decreaseQty = (id) => {
    const cartItem = cartItems?.find((item) => item.id === id);
    if (cartItem && cartItem.qty > 0) {
      const newCart = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      setFlag(flag + 1);
      setCartItems(newCart);
    }

    if (cartItem && cartItem.qty <= 1) {
      const remainingCart = cartItems.filter((item) => item.id !== id);
      setCartItems(remainingCart);
      setFlag(flag + 1);
    }
  };

  return (
    <div
      key={item.id}
      className="w-full p-1 px-2 rounded-lg bg-black flex items-center gap-2"
    >
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * item?.qty}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.85 }}
          onClick={() => decreaseQty(item?.id)}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {item?.qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.85 }}
          onClick={() => increaseQty(item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
