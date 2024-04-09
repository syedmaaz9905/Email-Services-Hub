"use client"

// Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react"

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Required Modules
import { Pagination } from 'swiper/modules'

// Icons
import { FaQuoteLeft } from "react-icons/fa"

// Framer Motion
import { motion } from "framer-motion"

// Variants
import { fadeIn } from "../../../variants"

// Next Image
import Image from "next/image"

// Data
const testimonialData = [
    {
        message: 'This tool truly exceeded my expectations, and made email marketing easy.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Jane Doe',
        job: 'Photographer & Videographer',
    },
    {
        message: 'I am making 6 figures with the help of this tool.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Max Kane',
        job: 'Freelancer',
    },
    {
        message: 'It helped me alot in my business.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Warden Leon',
        job: 'Businessman',
    },
]

const TestimonialSlider = () => {
    return (
        <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="container mx-auto"
        >
            <Swiper
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className='h-[450px] xl:h-[400px]'
            >
                {testimonialData.map((person, index) => {
                    const { message, avatar, name, job } = person
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col justify-center items-center text-center">
                                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                                    {message}
                                </div>
                                <Image src={avatar} width={64} height={64} alt='' className="mb-4" />
                                <div className="text-lg font-medium">
                                    {name}
                                </div>
                                <div className="text-secondary">
                                    {job}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </motion.div>
    )
}

export default TestimonialSlider