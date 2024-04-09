"use client"

// Lottie
import Lottie from 'lottie-react';

// Animation
import securePaymentAnimationData from './../../../public/animated_videos/securePayment_animation.json'

const SecurePayment = () => {
    return (
        <div className="w-full h-full flex xl:flex-row justify-center">
            <div className='flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-4 hover:bg-slate-800 hover:text-white transition-all duration-1000 p-5 rounded-[6px]'>
                <div className='w-[50px]'>
                    <Lottie
                        animationData={securePaymentAnimationData}
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div>
                    <p className='text-[16px] font-bold'>Safe and Secure Payment</p>
                </div>
            </div>
        </div>
    )
}

export default SecurePayment