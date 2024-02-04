/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Link } from "react-router-dom";
export default function ProductCard({
  img,
  productName,
  productDesc,
  index,
  id,
}) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className="mx-auto cursor-pointer mt-11 md:w-48 md:flex-1 transform overflow-hidden rounded-lg
       bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105
        hover:shadow-lg"
    >
      <Link to={`${id}`}>
        <img
          className="h-96 w-full object-contain object-center"
          src={img}
          alt={productName}
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {productName}
          </h2>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            {productDesc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
