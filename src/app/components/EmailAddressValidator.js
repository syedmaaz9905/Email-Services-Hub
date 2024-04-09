"use client"

// Framer Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

const EmailAddressValidator = () => {
    return (
        <section className="section h-[1300px] xsm:h-[1200px] sm:h-full xl:h-[1000px] flex items-center" id="emailvalidator">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="h2 text-center"
                >
                    Free Email Address Validator
                </motion.h2>

                <motion.h3
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="max-w-[800px] text-center mx-auto mb-2 h3"
                >
                    Validate email instantly with our cutting-edge free online email verification tool: simply enter the email address in the box below, and our advanced email validator will provide you with real-time email deliverability results!
                </motion.h3>

                <motion.p
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="max-w-[800px] text-center mx-auto mb-3"
                >
                    Our free email checker ensures proper formatting and verifies the existence of the mailbox, confirming its ability to receive emails: the email validation process is completely discreet and our email verifier does not send any messages while testing email addresses.
                </motion.p>

                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="flex justify-center items-center"
                >
                    <input placeholder='Enter your email address ...' className='mt-6 mb-4 bg-[#b2b7c2]/10 flex w-[100%] sm:w-[60%] lg:w-[40%] p-3 border border-[#cdcdcd] rounded-md' />
                </motion.div>

                <motion.div
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="flex justify-center items-center"
                >
                    <button className="px-4 py-2 bg-black hover:bg-accent duration-300 text-white rounded-md">Validate</button>
                </motion.div>
            </div>
        </section>
    )
}

export default EmailAddressValidator