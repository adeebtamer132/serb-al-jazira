import styles, { layout } from "../../style";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import dm2 from "../../assets/dm2.svg";
export default function DroneSection() {
  return (
    <section
      id="dji"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mb-[150px]`}
    >
      <div className={layout.sectionImgReverse}>
        <motion.img
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          src={dm2}
          alt="dm2"
          className="w-[100%] h-[100%]  z-[5] object-contain sm:pl-0 pl-[px] "
        />
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="absolute z-[0]"
      >
        <h2 className="font-poppins font-semibold  sm:pl-0 pl-[px] md:text-[308px] text-[240px] sm:text text-white text-center  w-full md:pt-[270px] pt-[100px] opacity-25 ">
          DRONE
        </h2>
      </motion.div>
      {/* bg gradient */}
      <div className="absolute z-[0] w-[100%] h-[30%] -left-[4%] top-[300px] rounded-full   gradient-01 " />
    </section>
  );
}
