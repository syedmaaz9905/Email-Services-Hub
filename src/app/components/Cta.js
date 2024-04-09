"use client"

import { useState } from "react";

// Framer Motion
import { motion, easeInOut } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

// Lottie
import Lottie from 'lottie-react';

// Animation
import buttonAnimationData from './../../../public/animated_videos/button_animation.json'
import ctaAnimationData from './../../../public/animated_videos/cta_animation.json'

const Cta = () => {

    const [animationPlayed, setAnimationPlayed] = useState(false);

    const handleButtonClick = () => {
        setAnimationPlayed(true);
    };

    return (
        <section className="pt-24 xl:pt-48 flex items-end pb-0 overflow-hidden" id="contact">
            <div className="conatiner mx-auto">
                <div className="flex flex-col xl:flex-row xl:items-center">

                    {/* Text */}
                    <div className="flex flex-col justify-center items-center ml-0 xl:ml-[50px] gap-[20px]">

                        <motion.h2
                            variants={fadeIn('right', 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="h2 text-center mb-0"
                        >
                            Download Our Tool Now
                        </motion.h2>

                        <motion.p
                            variants={fadeIn('right', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="description text-center"
                        >
                            Unlock unparalleled benefits—download our tool now for a seamless and powerful solution that transforms your experience and maximizes productivity.
                        </motion.p>

                        {/* Button */}
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="flex justify-center md:justify-start"
                        >
                            <button onClick={handleButtonClick} className="flex flex-row items-center p-3 rounded-[10px] bg-black hover:bg-accent hover:scale-105 transition-all duration-300 text-white">
                                <p>Download Now</p>
                                <Lottie
                                    key={animationPlayed}
                                    animationData={buttonAnimationData}
                                    loop={false}
                                    autoplay={animationPlayed}
                                    className="w-[50px]"
                                    onComplete={() => setAnimationPlayed(false)} // Reset animationPlayed when the animation completes
                                />
                            </button>
                        </motion.div>

                    </div>

                    {/* Image */}
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="flex justify-center text-center items-center w-full"
                    >
                        <Lottie
                            animationData={ctaAnimationData}
                            loop={true}
                            autoplay={true}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Cta