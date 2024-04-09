"use client"

// Next Image 
import Image from "next/image"

// Framer Motion
import { motion, easeInOut } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

// Icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

const Why = () => {
    return (
        <section className="section h-[1300px] xsm:h-[1200px] sm:h-full xl:h-[1000px] flex items-center" id="why">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="h2 text-center"
                >
                    Unmatched excellence & customer satisfaction
                </motion.h2>

                <motion.p
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="max-w-[680px] text-center mx-auto mb-5"
                >
                    Our dedication to providing exceptional services sets us apart from teh competition. From the moment you engage with us, we strive to exceed your expectations in every interaction.
                </motion.p>

                {/* Car Image */}
                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="flex justify-center mb-6 xl:mb-8"
                >
                    {/* <Image src={'/images/why/car.svg'} width={1060} height={420} alt='' /> */}
                    <iframe className="rounded-[10px] xsm:h-[200px] sm:h-[300px] xl:h-[350px] xsm:w-[450px] sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[650px]" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
                </motion.div>

                {/* Grid Items */}
                <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
                >
                    {/* Item 1 */}
                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <MdKey className="text-[38px] text-accent mb-4" />
                        <h3 className="h3">Learn Easily & Quickly</h3>
                        <p className="hidden xl:flex">We prioritize your need and we go above and beyond to ensure your experience with us is nothing short of outstanding.</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <MdTrendingUp className="text-[38px] text-accent mb-4" />
                        <h3 className="h3">Modern & Well Maintained Tool</h3>
                        <p className="hidden xl:flex">Experience the epitome of modern efficiency with our well-maintained tool.</p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <MdHandshake className="text-[38px] text-accent mb-4" />
                        <h3 className="h3">Easy To Use & Flexible Service</h3>
                        <p className="hidden xl:flex">Simplicity meets flexibility in our user-friendly service.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Why