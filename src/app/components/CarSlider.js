"use client"

// Swiper React Component
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper Styles
import 'swiper/css'

// Next Image
import Image from 'next/image'

// Icons
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

// Framer Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants"

// Car Data
const cars = [
    {
        type: 'Hatchback',
        name: 'Ford Focus',
        price:29,
        stars:3.5,
        image: 'images/carSlider/car01.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual',
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5',
            },
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual',
            },
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual',
            },
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual',
            },
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual',
            },
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual',
            },
        ],
    }
]

const CarSlider = () => {
    return (
        <div>CarSlider</div>
    )
}

export default CarSlider