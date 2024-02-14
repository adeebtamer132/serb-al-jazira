/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Logo from "../../assets/Logo-01.svg";
import styles from "../../style";
import { fadeIn } from "../../utils/motion";
import image from "../../assets/cyber.avif";
import image1 from "../../assets/defencejpeg.jpeg";
export default function ExploreCard({
  page,
  index,
  active,
  handleClick,
  ExtraClasses,
}) {
  const { name, description, img, slug } = page;
  return (
    <motion.a
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className={`relative flex-1  flex items-center justify-center
       min-w-[350px]  h-[300px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      href={`#pages/${slug}`}
    >
      <div className="relative flex-1 h-[300px] rounded overflow-hidden shadow-lg">
        <img
          className="w-full bg-contain h-full"
          src={img}
          alt="Card background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-45"></div>
        <div className="absolute top-0 left-0 p-4 w-full">
          <h2 className="text-white text-2xl font-bold">{name}</h2>
          <p className="text-white mt-2">{description.substr(0, 80)}...</p>
        </div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <button className="mt-4 px-4 py-2 bg-[transparent] border-[1px] text-white rounded hover:bg-gradient-to-l from-[#3cafbb] to-[#2a426b]">
            Learn More
          </button>
        </div>
      </div>

    </motion.a>
  );
}
