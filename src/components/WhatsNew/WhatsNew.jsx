/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import styles from "../../style";
import { DroneVariants, fadeIn, staggerContainer } from "../../utils/motion";
import { TitleText, TypingText } from "../CustomTyping";
import { newFeatures } from "../../utils/constants";

import drone from "../../assets/ar3 (1).webp";
import NewFeatures from "../NewFeatures/NewFeatures";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>AR3 Long-range VTOL UA</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={DroneVariants("right")}
        className={` flex-[1.1] ${styles.flexCenter}`}
      >
        <img
          src={drone}
          alt="get-started"
          className="w-[100%] h-[100%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
