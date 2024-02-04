import ProductCard from "../ProductCard/ProductCard";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import products from "../../utils/DB";

export default function ProductsPage() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="min-h-[60vh] container flex justify-center mx-auto items-center w-[80%] gap-6 flex-wrap"
    >
      {products.map((ele) => (
        <ProductCard key={ele} {...ele} />
      ))}
    </motion.div>
  );
}
