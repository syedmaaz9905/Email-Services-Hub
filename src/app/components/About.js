"use client"

import { useState } from "react"

// Next Image 
import Image from "next/image"

// Icons
import { SiBoost } from "react-icons/si";
import { HiRocketLaunch } from "react-icons/hi2";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

// React Count up
import CountUp from "react-countup"

// React Intersection Observer
import { useInView } from 'react-intersection-observer'

// Framer Motion
import { motion, easeInOut } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

// Lottie
import Lottie from 'lottie-react';

// Animation
import buttonAnimationData from './../../../public/animated_videos/button_animation.json'

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const [animationPlayed, setAnimationPlayed] = useState(false);

  const handleButtonClick = () => {
    setAnimationPlayed(true);
  };

  return (
    <section className="section flex items-center bg-[#b2b7c2]/10 h-[1150px] xl:h-[100vh]" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">

          {/* Image */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image className="rounded-[12px]" src={'/images/about/product01.png'} width={600} height={448} alt='' />
          </motion.div>

          {/* Text & Stats */}
          <div className="flex-1 flex xl:justify-center items-center">
            <div className="xl:max-w-[517px]">

              <motion.h2
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                About Blaze Mailer Pro
              </motion.h2>

              <motion.p
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Elevate your outreach with confidence – send over more than 10,000 emails effortlessly, guaranteed inbox delivery, the ultimate marketing tool!
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                {/* Boost Deliverability */}
                <div className="flex flex-col w-[100px]">
                  <SiBoost className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {
                      inView ? <CountUp start={0} end={150} duration={3} delay={1} /> : null
                    } +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Boost <br />deliverability!
                  </div>
                </div>

                {/* Skyrocket Rates */}
                <div className="flex flex-col w-[100px]">
                  <HiRocketLaunch className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {
                      inView ? <CountUp start={0} end={200} duration={3} delay={1} /> : null
                    } +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Skyrocket <br />Rates
                  </div>
                </div>

                {/* Revenue Surge */}
                <div className="flex flex-col w-[100px]">
                  <FaMoneyBillTrendUp className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {
                      inView ? <CountUp start={0} end={200} duration={3} delay={1} /> : null
                    } +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Revenue <br /> Surge
                  </div>
                </div>
              </motion.div>
              {/* Button */}
              <motion.div
                variants={fadeIn('up', 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:flex gap-x-3 justify-center xl:justify-start"
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
          </div>

        </div>
      </div>
    </section>
  )
}

export default About