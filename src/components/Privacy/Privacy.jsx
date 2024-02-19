import { motion } from "framer-motion";
import { TypingText } from "../CustomTyping";
import styles from "../../style";
import { fadeIn, staggerContainer } from "../../utils/motion";

export default function Privacy() {
    return (
        <>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col mt-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white mb-[10px]`}>
                {/* className="mt-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white mb-[10px]" > */}
                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className=""
                >
                    Privacy Policy
                </motion.p>

            </motion.div >

            <section className={`${styles.paddings} relative z-10`}>
                <div className="gradient-02 z-0" />
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    {/* <TypingText title="| Serb Al Jazira" textStyles="text-center" /> */}

                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white pb-[100px]"
                    >
                        Our website prioritizes your privacy and security. We do not collect any personal data or use tracking technologies. We maintain strict confidentiality and employ robust security measures to safeguard your information. Your trust is our priority.
                    </motion.p>


                </motion.div>



                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TypingText title="| Data Collection " textStyles="text-center" />
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className="mt-[8px] mb-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                    >
                        We do not collect any personal information from visitors to our website. We understand the sensitivity of the products and services we offer, and we respect the privacy of our users by not collecting any data.{" "}

                    </motion.p>

                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TypingText title="| Use of Cookies and Tracking Technologies " textStyles="text-center" />
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className="mt-[8px] mb-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                    >
                        We do not use cookies, tracking pixels, or any other tracking technologies on our website. We prioritize the security and privacy of our users and ensure that no data is collected without your explicit consent.
                    </motion.p>

                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TypingText title="| Third-party Links" textStyles="text-center" />
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className="mt-[8px] mb-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                    >
                        Our website does not contain any links to third-party websites. We maintain strict control over the content and privacy practices of our website to ensure the confidentiality of our users information.
                    </motion.p>

                </motion.div>


                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TypingText title="| Data Security" textStyles="text-center" />
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className="mt-[8px] mb-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                    >
                        We employ rigorous security measures to safeguard any information that may be accessed during your visit to our website. Our systems are protected by industry-standard encryption protocols and undergo regular security audits to maintain the highest level of data security.
                    </motion.p>

                </motion.div>


                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TypingText title="| Changes to This Privacy Policy" textStyles="text-center" />
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className="mt-[8px] mb-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                    >
                        We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page.
                    </motion.p>

                </motion.div>


                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="mt-[8px] mb-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                >
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us: <br></br>
                    By email: <motion.a href="mailto:marketing@serbaljazira.com" className="border border-solid border-gray-300 rounded-lg font-extrabold bg-gradient-to-l from-[#3cafbb] to-[#2a426b] pr-[10px] pl-[10px] "> Support@serbaljazira.com </motion.a> <br></br>
                    By visiting this page on our website: <motion.a href="#/contact" className="border border-solid border-gray-300 rounded-lg font-extrabold bg-gradient-to-l from-[#3cafbb] to-[#2a426b] pr-[10px] pl-[10px]"> click here</motion.a>
                </motion.p>

            </section>
        </>
    )
}