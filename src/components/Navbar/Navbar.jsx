import { motion } from "framer-motion";
import styles from "../../style";
import { navVariants } from "../../utils/motion";
import Logo from "../../assets/Logo-01.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "../DropDownBtn";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false);
  const location = useLocation();
  useEffect(() => {
    toggleExpansion(false);
  }, [location]);
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <nav className="flex items-center justify-between flex-wrap  m-auto  p-6">
          <Link
            to="/home"
            className="flex items-center flex-shrink-0 text-white mr-6 lg:hidden"
          >
            <img src={Logo} width={180} alt="logo" />
          </Link>
          {/* Menau hidden in LG */}
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-white  hover:text-black hover:border-white"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* The Nav Links */}
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full block flex-grow justify-between lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm flex flex-wrap items-center gap-4 flex-1 ">
              <a
                href="#/home"
                className="block mt-4 lg:inline-block lg:mt-0 text-white text-base hover:text-gray-400 mr-4"
              >
                Home
              </a>
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white text-base hover:text-gray-400 mr-4"
              >
                AboutUs
              </a>
              <a
                href="#products"
                className="block mt-4 lg:inline-block lg:mt-0 text-white text-base hover:text-gray-400"
              >
                Products
              </a>
              <div className="block mt-4 lg:inline-block lg:mt-0 text-white text-base hover:text-gray-400">
                <DropdownButton />
              </div>
            </div>
            <a
              href="#/home"
              className="flex hidden lg:block   flex-1 items-center flex-shrink-0  text-white mr-6"
            >
              <img src={Logo} width={200} alt="logo" />
            </a>
            <div>
              <a
                href="#/contact"
                className="inline-block  flex-1 text-sm text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent transition-all hover:text-black hover:bg-white mt-4 lg:mt-0"
              >
                ContactUs
              </a>
            </div>
          </div>
        </nav>
      </motion.nav>
    </>
  );
}
