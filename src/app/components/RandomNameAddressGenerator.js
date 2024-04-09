"use client"

import { useState } from 'react';

// Framer Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

const RandomNameAddressGenerator = () => {

    const [selectedValueNumberOfNames, setSelectedValueNumberOfNames] = useState("10");

    const [selectedValueGender, setSelectedValueGender] = useState("Male & Female");

    const [selectedValueCountry, setSelectedValueCountry] = useState("United States");

    const [selectedNameStyle, setSelectedNameStyle] = useState("average");

    const NumberOfNames = (event) => {
        setSelectedValueNumberOfNames(event.target.value);
    };

    const Gender = (event) => {
        setSelectedValueGender(event.target.value);
    };

    const CountryGenerator = (event) => {
        setSelectedValueCountry(event.target.value);
    };

    const handleNameStyleChange = (event) => {
        setSelectedNameStyle(event.target.value);
    };

    return (
        <section className="section h-[1500px] xsm:h-[1300px] md:h-[1000px] flex items-center bg-[#b2b7c2]/10" id="randomnameaddressgenerator">
            <div className="container mx-auto max-w-[1200px]">

                <div className="flex flex-col items-center justify-center">

                    <motion.h2
                        variants={fadeIn('down', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="h2 text-center"
                    >
                        Random Name Generator
                    </motion.h2>

                    <div className='flex flex-col md:flex-row items-center justify-around w-[100%] gap-8 md:gap-0'>
                        <motion.div
                            variants={fadeIn('left', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className='flex flex-row items-center gap-2'
                        >
                            <p>Number of Names:</p>
                            <select className='p-2 pr-10' value={selectedValueNumberOfNames} onChange={NumberOfNames}>
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('top', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className='flex flex-row items-center gap-2'
                        >
                            <p>Gender:</p>
                            <select className='p-2 pr-10' value={selectedValueGender} onChange={Gender}>
                                <option>Male & Female</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('right', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                        >
                            <p>Name Style:</p>
                            <div className="flex items-center">
                                <input className='mr-2' type="radio" id="common" name="nameStyle" value="common" checked={selectedNameStyle === "common"} onChange={handleNameStyleChange} />
                                <label htmlFor="common" className="mr-2">Common</label>

                                <input className='mr-2' type="radio" id="average" name="nameStyle" value="average" checked={selectedNameStyle === "average"} onChange={handleNameStyleChange} />
                                <label htmlFor="average" className="mr-2">Average</label>

                                <input className='mr-2' type="radio" id="rare" name="nameStyle" value="rare" checked={selectedNameStyle === "rare"} onChange={handleNameStyleChange} />
                                <label htmlFor="rare">Rare</label>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn('left', 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="flex justify-center items-center mt-5"
                    >
                        <button className="px-4 py-2 bg-black hover:bg-accent duration-300 text-white rounded-md">Generate</button>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className='w-[100%]'
                    >
                        <textarea placeholder='Output' className='mt-8 mb-8 bg-white flex w-[100%] h-[75px] p-3 border border-[#cdcdcd] rounded-md resize-none' />
                    </motion.div>

                    <motion.h2
                        variants={fadeIn('down', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="h2 text-center"
                    >
                        Random Address Generator
                    </motion.h2>

                    <motion.div
                        variants={fadeIn('top', 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className='flex flex-row items-center gap-2'
                    >
                        <p>Country:</p>
                        <select className='p-2 pr-10' value={selectedValueCountry} onChange={CountryGenerator}>
                            <option>United States</option>
                            <option>Portugal</option>
                            <option>Spain</option>
                            <option>Germany</option>
                            <option>Italy</option>
                            <option>Netherlands</option>
                            <option>Luxembourg</option>
                            <option>Ireland</option>
                        </select>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="flex justify-center items-center mt-5"
                    >
                        <button className="px-4 py-2 bg-black hover:bg-accent duration-300 text-white rounded-md">Generate</button>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className='w-[100%]'
                    >
                        <textarea placeholder='Output' className='mt-8 mb-8 bg-white flex w-[100%] h-[75px] p-3 border border-[#cdcdcd] rounded-md resize-none' />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default RandomNameAddressGenerator