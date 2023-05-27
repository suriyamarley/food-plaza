import React from "react";
import HomeContainer from "../components/HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "../components/RowContainer";
import { useStateValue } from "../contexts/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "../components/CartContainer";
import FooterImages from "../components/FooterImages";

const MainContainer = ({ cartItems, setCartItems }) => {
  const [{ foodItems, cartShow }] = useStateValue();
  // id for scroll
  const id = "slider";

  // slider animation
  const slideLeft = () => {
    let slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    let slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <div className="w-full h-auto flex flex-col items-center justify-center">
          <HomeContainer />
          <section className="w-full my-6">
            <div className="w-full flex items-center justify-between">
              <p className="text-2xl capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-white to-white transition-all ease-in-out duration-100 menu-title">
                Our fresh & healthy fruits
              </p>

              <div className="hidden md:flex gap-3 items-center">
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-lg bg-black hover:bg-yellow-400 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                  onClick={slideLeft}
                >
                  <MdChevronLeft className="text-lg text-white" />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-lg bg-black hover:bg-yellow-400 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                  onClick={slideRight}
                >
                  <MdChevronRight className="text-lg text-white" />
                </motion.div>
              </div>
            </div>
            <RowContainer
              id={id}
              flag={true}
              cartItems={cartItems}
              setCartItems={setCartItems}
              data={foodItems?.filter((item) => item.category === "fruits")}
            />
          </section>
          <MenuContainer cartItems={cartItems} setCartItems={setCartItems} />
          {cartShow && (
            <CartContainer cartItems={cartItems} setCartItems={setCartItems} />
          )}
          <FooterImages />
        </div>
      </main>
    </>
  );
};

export default MainContainer;
