"use client"

// Lottie
import Lottie from 'lottie-react';

// Animation
import monitorBuildAnimationData from './../../../public/animated_videos/monitorBuild_animation.json'
import inboxRateAnimationData from './../../../public/animated_videos/inboxRate_animation.json'
import moreSalesAnimationData from './../../../public/animated_videos/moreSales_animation.json'

// Framer Motion
import { motion, easeInOut } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";


const Cars = () => {

    return (
        <section className="h-[1400px] xsm:h-[1200px] sm:h-[1000px] md:h-screen flex items-center" id="services">
            <div className="container mx-auto">

                <motion.h1
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="h1 text-[20px] xsm:text-[30px] sm:text-[40px] text-center"
                >
                    Landing in spam means <span className="text-accent">missing customers!</span>
                </motion.h1>

                <motion.h1
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="h1 text-[20px] xsm:text-[30px] sm:text-[40px] text-center mb-8"
                >
                    EmailTooHub helps you <span className="text-accent">reach the inbox</span> and <span className="text-accent">unlock growth!</span>
                </motion.h1>

                {/* <Brands />
                <CarSlider /> */}

                <div className="my-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

                        <motion.div
                            variants={fadeIn('left', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 flex flex-col justify-center items-center"
                        >
                            <Lottie
                                animationData={monitorBuildAnimationData}
                                loop={true}
                                autoplay={true}
                                className='w-[75px] mb-2 text-center'
                            />
                            <h2 className="text-xl font-bold mb-2 text-center">Monitor, build & maintain a perfect email reputation</h2>
                            <p className="text-gray-600 text-center">Track how your reputation is doing, maximize and maintain it over time to get the best email results and improve your cold email deliverability.</p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 flex flex-col justify-center items-center"
                        >
                            <Lottie
                                animationData={inboxRateAnimationData}
                                loop={true}
                                autoplay={true}
                                className='w-[75px] mb-2 text-center'
                            />
                            <h2 className="text-xl font-bold mb-2 text-center">Identify & fix spam issues. Maximize your inbox rate</h2>
                            <p className="text-gray-600 text-center">Get reports to fix your deliverability, enjoy a better inbox placement and stay away from spam.</p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('right', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 flex flex-col justify-center items-center"
                        >
                            <Lottie
                                animationData={moreSalesAnimationData}
                                loop={true}
                                autoplay={true}
                                className='w-[75px] mb-2 text-center'
                            />
                            <h2 className="text-xl font-bold mb-2 text-center">Get the best results from your emails and make more sales</h2>
                            <p className="text-gray-600 text-center">Get higher open rates and improve your overall results such as click, reply and lead rates. Just make more sales.</p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cars