import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/Kadupul-Flower.png";
import { FiShoppingBag } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Kadupul Flower</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            The Kadupul Flower is said to be the most expensive flower in the
            world, in fact because you cannot buy it, it is priceless.
          </span>
        </div>
      </div>

      {/* middle side hero image  */}
      <div className={css.wrapper}>
        {/* blue circle */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>

        {/* hero image */}
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImg}
          alt="hero_image"
          width={600}
        />

        {/* cart animation */}
        <motion.div
          className={css.cart2}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          transition={transition}
        >
          <FiShoppingBag />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
