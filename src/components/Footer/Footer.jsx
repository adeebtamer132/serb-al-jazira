import { motion } from "framer-motion";
import { footerVariants } from "../../utils/motion";
import styles from "../../style";
import { socials } from "../../utils/constants";
import Logo from "../../assets/Logo-01.svg";
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8  relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          READY TO GET YOURS ?
        </h4>
        <a
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-transparent bg-gradient-to-l from-[#3cafbb] to-[#2a426b] hover:bg-gradient-to-r from-[#3cafbb] to-[#2a426b] border-[1px] rounded-[32px] gap-[12px]"
        >
          <a href="#/contact" className="font-normal text-[16px] text-white">
            Get Started
          </a>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <a href="#/home" className="font-extrabold text-[24px] text-white">
            <img src={Logo} alt="Logo " width={200} />
          </a>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 - 2025 Serb Al-jazira. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer >
);

export default Footer;
