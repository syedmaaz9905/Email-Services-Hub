"use client"

import { useState, useEffect } from 'react';

// Framer Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

import countryList from 'country-list';

const RandomNameAddressGenerator = () => {

    const [selectedValueNumberOfNames, setSelectedValueNumberOfNames] = useState("10");
    const [selectedValueGender, setSelectedValueGender] = useState("Male & Female");
    const [selectedNameStyle, setSelectedNameStyle] = useState("average");
    const [generatedNames, setGeneratedNames] = useState([]);
    const [generatedAddress, setGeneratedAddress] = useState("");

    const [selectedValueCountry, setSelectedValueCountry] = useState("United States");
    const [countryOptions, setCountryOptions] = useState([]);

    useEffect(() => {
        const names = countryList.getNames();
        setCountryOptions(names);
    }, []);

    const CountryGenerator = (event) => {
        setSelectedValueCountry(event.target.value);
    };

    const generateAddress = () => {
        const country = selectedValueCountry;
        const randomStreetNumber = Math.floor(Math.random() * 1000) + 1;
        const randomCity = "City";
        const address = `${randomStreetNumber} Street, ${randomCity}, ${country}`;
        setGeneratedAddress(address);
    };

    const NumberOfNames = (event) => {
        setSelectedValueNumberOfNames(event.target.value);
    };

    const Gender = (event) => {
        setSelectedValueGender(event.target.value);
    };

    const handleNameStyleChange = (event) => {
        setSelectedNameStyle(event.target.value);
    };

    const generateNames = () => {
        const numberOfNames = parseInt(selectedValueNumberOfNames);
        let names = [];

        for (let i = 0; i < numberOfNames; i++) {
            let name = generateRandomName(selectedValueGender, selectedNameStyle);
            names.push(name);
        }

        setGeneratedNames(names);
    };

    const generateRandomName = (gender, nameStyle) => {
        const commonNames = ["John", "David", "Michael", "James", "William"];
        const averageNames = ["Emily", "Jessica", "Matthew", "Daniel", "Jennifer"];
        const rareNames = ["Aurora", "Clementine", "Zephyr", "Octavia", "Persephone"];

        let names;
        switch (nameStyle) {
            case "common":
                names = commonNames;
                break;
            case "average":
                names = averageNames;
                break;
            case "rare":
                names = rareNames;
                break;
            default:
                names = commonNames;
        }

        if (gender === "Male") {
            names = names.filter(name => !isFemaleName(name));
        } else if (gender === "Female") {
            names = names.filter(name => isFemaleName(name));
        }

        return names[Math.floor(Math.random() * names.length)];
    };

    const isFemaleName = (name) => {
        return name.endsWith('a');
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
                        <div className='flex flex-row items-center gap-2'>
                            <p>Number of Names:</p>
                            <select className='p-2 pr-10' value={selectedValueNumberOfNames} onChange={NumberOfNames}>
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <p>Gender:</p>
                            <select className='p-2 pr-10' value={selectedValueGender} onChange={Gender}>
                                <option>Male & Female</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <div>
                            <p>Name Style:</p>
                            <div className="flex items-center">
                                <input className='mr-2' type="radio" id="common" name="nameStyle" value="common" checked={selectedNameStyle === "common"} onChange={handleNameStyleChange} />
                                <label htmlFor="common" className="mr-2">Common</label>

                                <input className='mr-2' type="radio" id="average" name="nameStyle" value="average" checked={selectedNameStyle === "average"} onChange={handleNameStyleChange} />
                                <label htmlFor="average" className="mr-2">Average</label>

                                <input className='mr-2' type="radio" id="rare" name="nameStyle" value="rare" checked={selectedNameStyle === "rare"} onChange={handleNameStyleChange} />
                                <label htmlFor="rare">Rare</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <button onClick={generateNames} className="px-4 py-2 bg-black hover:bg-accent duration-300 text-white rounded-md">Generate Names</button>
                    </div>

                    <div className='w-[100%]'>
                        <textarea placeholder='Names Output' value={generatedNames.join(", ")} readOnly className='mt-8 mb-8 bg-white flex w-[100%] h-[75px] p-3 border border-[#cdcdcd] rounded-md resize-none' />
                    </div>
                    <motion.h2
                        variants={fadeIn('down', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="h2 text-center"
                    >
                        Random Address Generator
                    </motion.h2>

                    <div className='flex flex-row items-center gap-2'>
                        <p>Country:</p>
                        <select className='p-2 pr-10' value={selectedValueCountry} onChange={CountryGenerator}>
                            {countryOptions.map(country => (
                                <option key={country}>{country}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <button onClick={generateAddress} className="px-4 py-2 bg-black hover:bg-accent duration-300 text-white rounded-md">Generate Address</button>
                    </div>

                    <div className='w-[100%]'>
                        <textarea placeholder='Address Output' value={generatedAddress} readOnly className='mt-8 mb-8 bg-white flex w-[100%] h-[75px] p-3 border border-[#cdcdcd] rounded-md resize-none' />
                    </div>

                </div>
            </div>
        </section>
    )
}


export default RandomNameAddressGenerator