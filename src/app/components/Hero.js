"use client"

import { useContext, useState } from "react"

// Components
import Search from "./Search"

// Search Context
import { SearchContext } from "../context/Search"

// Lottie
import Lottie from 'lottie-react';

// Animation
import buttonAnimationData from './../../../public/animated_videos/button_animation.json'
import heroAnimationData from './../../../public/animated_videos/hero_animation.json'

// Framer Motion
import { motion, easeInOut } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

const Hero = () => {

    const { searchActive } = useContext(SearchContext)

    const [animationPlayed, setAnimationPlayed] = useState(false);

    const handleButtonClick = () => {
        setAnimationPlayed(true);
    };

    return (
        <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
            <div className="container mx-auto h-full xl:pt-10">
                {/* Text & Image Wrapper */}
                <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center h-full">
                    {/* Text */}
                    <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">

                        <motion.h1
                            variants={fadeIn('down', 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="h1"
                        >
                            Explore the Finest <span className="text-accent">Email Marketing</span> Tool{' '}
                        </motion.h1>

                        <motion.p
                            variants={fadeIn('down', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
                        >
                            Maximize inbox impact. Elevate your email marketing with precision and ease. Professional, reliable, and user-friendly – the perfect solution for successful campaigns.
                        </motion.p>

                        {/* Button */}
                        <motion.div
                            variants={fadeIn('down', 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.8 }}
                            className="flex gap-x-3 justify-center xl:justify-start"
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
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="xsm:w-full sm:w-[400px] xl:w-full"
                    >
                        <Lottie
                            animationData={heroAnimationData}
                            loop={true}
                            autoplay={true}
                        />
                        {/* <Image src={'/images/hero/car.svg'} fill alt='' style={{ objectFit: 'contain' }} priority /> */}
                    </motion.div>
                </div>
            </div>
            {
                searchActive ?
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ ease: easeInOut }}
                        className="fixed top-[80px] z-10 w-full max-w-[1920px]"
                    >
                        <Search />
                    </motion.div> :
                    <div className="-mt-12 w-full max-w-[1300px] mx-auto">
                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Search />
                        </motion.div>
                    </div>

            }
        </section>
    )
}

export default Hero