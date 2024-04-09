"use client"

import { useContext } from "react"

// Search Context
import { SearchContext } from "../context/Search"

// Components
// import LocationSelection from "./LocationSelection"
// import DateSelection from "./DateSelection"
// import HoursSelection from "./HoursSelection"
import SatisfactionRate from "./SatisfactionRate"
import CustomerSupport from "./CustomerSupport"
import SecurePayment from "./SecurePayment"

const Search = () => {
    const { searchActive } = useContext(SearchContext)

    return (
        <div className={`${searchActive ? 'bg-white rounded-none xl:h-[80px]' : 'bg-white rounded-[20px] py-6 xl:h-[98px]'} hidden xl:block w-full relative shadow-lg`}>
            <div className={`flex h-full ${searchActive && 'container mx-auto mt-3'}`}>
                {/* <LocationSelection /> */}
                {/* <DateSelection />
                <HoursSelection /> */}
                <SatisfactionRate />
                <CustomerSupport />
                <SecurePayment />

                {/* Button */}
                {/* <div className="xl:h-full flex items-center px-6 xl:px-0">
                    <button className={`${searchActive ? 'btn btn-sm btn-accent xl:w-[164px] hover:scale-105' : 'btn btn-lg btn-accent xl:w-[184px] hover:scale-105'} `}>Search</button>
                </div> */}
            </div>
        </div>
    )
}

export default Search