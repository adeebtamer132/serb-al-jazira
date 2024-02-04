"use client";

import { motion } from "framer-motion";
import Logo from "../../assets/Logo-01.svg";

import styles from "../../style";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto lg:-mt-20 flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.3)} className={styles.heroHeading}>
          The Drone
        </motion.h1>
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[200px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <div className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative bg-[url('https://image.onedrone.com/image/cache/catalog/banners/gsmarena_001-1920x900w.jpg')] bg-cover bg-center">
          <div className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10  flex  justify-center items-center backdrop-brightness-50"></div>
        </div>

        <Link to="#/explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src={Logo}
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
