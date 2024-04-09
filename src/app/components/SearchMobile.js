
// Components
import CustomerSupport from "./CustomerSupport"
import DateSelection from "./DateSelection"
import HoursSelection from "./HoursSelection"
import LocationSelection from "./LocationSelection"
import SatisfactionRate from "./SatisfactionRate"
import SecurePayment from "./SecurePayment"

const SearchMobile = () => {
    return (
        <div className="xl:hidden font-medium">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-4">
                    {/* Location Selection */}
                    {/* <LocationSelection /> */}

                    {/* Date Selection */}
                    {/* <DateSelection /> */}

                    {/* Hours Selection */}
                    {/* <HoursSelection /> */}

                    {/* Customer Satisfaction Rate */}
                    <SatisfactionRate />

                    {/* Customer Support */}
                    <CustomerSupport />

                    {/* Secure Payment */}
                    <SecurePayment />


                    {/* Button */}
                    {/* <div className="flex items-center py-6">
                        <button className="btn btn-sm btn-accent w-[164px] mx-auto">Search</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SearchMobile