/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Range_svg from "../../assets/slider-h-range.svg";
import products from "../../utils/DB";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DroneVariants,
  fadeIn,
  slideIn,
  staggerContainer,
} from "../../utils/motion";
import styles from "../../style";
export default function ProductPage() {
  // const [product, setProduct] = useState(0);
  const { id } = useParams();

  const product1 = products.find((product) => product.id == id);
  const { productName, features, img } = product1;

  return (
    <div className="overflow-hidden min-h-[100vh]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src={img}
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>

      <div className="">
        <section className="mx-auto container py-20 ">
          <div className="flex justify-center items-center flex-col">
            <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
              <h1>{productName}</h1>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0"
            >
              {" "}
              {features.map((ele) => (
                <motion.div
                  variants={fadeIn("right", "spring", ele.index * 0.15, 0.75)}
                  key={ele.featureName}
                >
                  <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                    <div className="mb-6">
                      {
                        <img
                          className="w-24"
                          src={ele.icon}
                          alt={ele.featureName}
                        />
                      }
                    </div>
                    <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                      <h2>{ele.featureName}</h2>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                      <p>{ele.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="gradient-02 mt-96 " />
        </section>
      </div>
    </div>
  );
}
