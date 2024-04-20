"use client"

import { useContext, useEffect, useState } from "react";

// Next Image
import Image from "next/image";

// React Scroll
import { Link } from 'react-scroll';

// Components
import SearchMobile from "./SearchMobile";

// Media Query Hook
import { useMediaQuery } from "react-responsive";

// Icons
import { BiMenuAltRight, BiX } from 'react-icons/bi';

// Search Context
import { SearchContext } from "../context/Search";

const Header = () => {

    const { setSearchActive } = useContext(SearchContext)

    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)',
    });

    useEffect(() => {
        const handleScroll = () => {
            // Header
            if (window.scrollY > 40) {
                setHeader(true);
            } else {
                setHeader(false);
            }

            // Search
            if (window.scrollY > 800) {
                setSearchActive(true)
            } else {
                setSearchActive(false)
            }
        };

        // Adding Event Listener
        window.addEventListener('scroll', handleScroll);

        // Remove Event Listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header className={`${header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} fixed w-full max-w-[1920px] z-20 transition-all duration-300`}>
            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <div className="flex justify-between items-center px-4">
                    {/* Logo */}
                    <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer">
                        <Image src={'/icons/logo_175x83.png'} width={75} height={50} alt='' />
                    </Link>

                    {/* Nav Open Menu */}
                    <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
                        {nav ? <BiX className="text-4xl" /> : <BiMenuAltRight className="text-4xl" />}
                    </div>
                </div>

                {/* Nav */}
                <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-300 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}>
                    <Link
                        className="cursor-pointer hover:font-bold duration-300"
                        to="home"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Home
                    </Link>

                    {/* Dropdown */}
                    <div>
                        <div
                            className="cursor-pointer hover:font-bold duration-300"
                            onClick={toggleDropdown}
                        >
                            Services
                        </div>
                        <div className={`absolute flex flex-col w-44 bg-white border border-gray-300 rounded shadow-lg ${dropdownOpen ? '' : 'hidden'}`}>
                            <Link to="emailextractor" smooth={true} spy={true} className="block cursor-pointer hover:font-bold duration-300 px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>Email Extractor</Link>
                            <Link to="htmleditor" smooth={true} spy={true} className="block cursor-pointer hover:font-bold duration-300 px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>Html Editor</Link>
                            <Link to="base64" smooth={true} spy={true} className="block cursor-pointer hover:font-bold duration-300 px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>Base64</Link>
                            <Link to="emailvalidator" smooth={true} spy={true} className="block cursor-pointer hover:font-bold duration-300 px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>Email Validator</Link>
                            <Link to="randomnameaddressgenerator" smooth={true} spy={true} className="block cursor-pointer hover:font-bold duration-300 px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>Random Name & Address Generator</Link>
                        </div>
                    </div>

                    <Link
                        className="cursor-pointer hover:font-bold duration-300"
                        to="services"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Features
                    </Link>

                    <Link
                        className="cursor-pointer hover:font-bold duration-300"
                        to="about"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        About
                    </Link>

                    <Link
                        className="cursor-pointer hover:font-bold duration-300"
                        to="why"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Why Us
                    </Link>

                    <Link
                        className="cursor-pointer hover:font-bold duration-300"
                        to="testimonial"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Testimonials
                    </Link>

                    <Link
                        className="cursor-pointer hover:font-bold duration-300"
                        to="contact"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Contact
                    </Link>

                    <Link
                        className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
                        to="/"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        See All Cars
                    </Link>

                    <SearchMobile />
                </nav>
            </div>
        </header>
    )
}

export default Header