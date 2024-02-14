/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TypingText } from "../CustomTyping";
import arrow from "../../assets/arrow-down.svg";
import styles from "../../style";
import { fadeIn, staggerContainer } from "../../utils/motion";
export default function AboutHome() {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <div className="gradient-02 z-0" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| Serb Al Jazira" textStyles="text-center" />

                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                >
                    <span className="font-extrabold text-white">Serb Al Jazira</span> is
                    A premier company specializing in military drone solutions. We deliver
                    cutting-edge unmanned aerial vehicles{" "}
                    <span className="font-extrabold text-white">(UAVs) </span> designed
                    for military applications. Our
                    <span className="font-extrabold text-white"> Drones </span>
                    offer unmatched performance, reliability, and strategic advantages on
                    the battlefield.
                </motion.p>

                <motion.img
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    src={arrow}
                    alt="arrow down"
                    className="w-[18px] h-[28px] object-contain mt-[28px] mb-[100px]"
                />
            </motion.div>





        </section>
    );
}
