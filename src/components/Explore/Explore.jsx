import { useState } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "../../utils/motion";
import ExploreCard from "./ExploreCard";
import { TitleText, TypingText } from "../CustomTyping";
import styles from "../../style";
import { PagesContent } from "../../utils/DB";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="|  Products" textStyles="text-center" />
        <TitleText
          title={
            <>
              Our Perfect Products <br className="md:block hidden" /> to Explore
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

        <div className="mt-[300px] flex lg:flex-row flex-wrap flex-col min-h-[70vh] gap-5">
          {PagesContent.map((page, index) => (
            <ExploreCard
              key={page.name}
              page={page}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
