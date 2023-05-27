import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../contexts/StateProvider";
import RowContainer from "../components/RowContainer";
import { CartContainer } from "../components";

const MenuContainer = ({ cartItems, setCartItems }) => {
  const [filter, setFilter] = useState("chicken");
  const [{ foodItems, cartShow }] = useStateValue();

  return (
    <>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        {cartShow && <CartContainer />}
        <section className="w-full my-6" id="menu">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-2xl capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-gray-200 to-gray-200 transition-all ease-in-out duration-100 mr-auto menu-title">
              Our Hot Dishes
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
              {categories &&
                categories.map((category) => (
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    key={category.id}
                    className={`group ${
                      filter === category.urlParamName
                        ? "bg-cartNumBg"
                        : "bg-white"
                    } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                    onClick={() => setFilter(category.urlParamName)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full shadow-lg ${
                        filter === category.urlParamName
                          ? "bg-white"
                          : "bg-cartNumBg"
                      } group-hover:bg-white flex items-center justify-center`}
                    >
                      <IoFastFood
                        className={`${
                          filter === category.urlParamName
                            ? "text-black"
                            : "text-white"
                        } group-hover:text-black text-lg`}
                      />
                    </div>
                    <p
                      className={`text-sm ${
                        filter === category.urlParamName
                          ? "text-white"
                          : "text-black"
                      } group-hover:text-white`}
                    >
                      {category.name}
                    </p>
                  </motion.div>
                ))}
            </div>

            <div className="w-full">
              <RowContainer
                flag={false}
                cartItems={cartItems}
                setCartItems={setCartItems}
                data={foodItems?.filter(
                  (foodItem) => foodItem.category === filter
                )}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MenuContainer;
