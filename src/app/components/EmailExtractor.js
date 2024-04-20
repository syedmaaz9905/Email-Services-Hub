"use client"

import { useState } from 'react';

// Framer Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

// Lottie
import Lottie from 'lottie-react';

// Animation
import buttonAnimationData from './../../../public/animated_videos/emailExtractor_animation.json'

import { saveAs } from 'file-saver';

// Sweet Alert
import Swal from 'sweetalert2';

const EmailExtractor = () => {

    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [textEmailAreaValue, setTextEmailAreaValue] = useState('');
    const [textResultValue, setTextResultValue] = useState('')

    const [extractedEmails, setExtractedEmails] = useState();

    const handleButtonClick = () => {
        setAnimationPlayed(true);

        var outputText = extractEmails(textEmailAreaValue);

        outputText = [...new Set(outputText)];

        var categorizedOutputText = categorizeEmails(outputText);

        setExtractedEmails(categorizedOutputText);

        console.log(outputText, typeof (outputText))
        console.log(outputText.join('\n'))

        setTextResultValue(outputText.join('\n'))

    };

    const handleDownloadButtonClick = () => {
        if (extractedEmails && Object.keys(extractedEmails).length > 0) {
            const csvContent = convertToCSV(extractedEmails);
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
            saveAs(blob, 'extracted_emails.csv');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No emails extracted!',
            });
        }
    };

    const handleClearButtonClick = () => {
        setTextEmailAreaValue('');
        setTextResultValue('');
    };

    function extractEmails(text) {
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

        const emails = text.match(emailRegex);

        return emails || [];
    }

    function categorizeEmails(emails) {
        const emailCategories = {};

        emails.forEach(email => {
            const domain = email.split('@')[1];

            const serviceProvider = domain.split('.')[0];

            if (emailCategories[serviceProvider]) {
                emailCategories[serviceProvider].push(email);
            } else {
                emailCategories[serviceProvider] = [email];
            }
        });

        return emailCategories;
    }

    function convertToCSV(obj) {
        const headers = Object.keys(obj).join(',') + '\n';
        const maxLength = Math.max(...Object.values(obj).map(arr => arr.length));
        let csv = '';
        for (let i = 0; i < maxLength; i++) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    csv += obj[key][i] || '';
                    csv += ',';
                }
            }
            csv = csv.slice(0, -1) + '\n';
        }
        return headers + csv;
    }

    return (
        <section className="section h-[1500px] xsm:h-[1300px] md:h-[1000px] flex items-center bg-[#b2b7c2]/10" id="emailextractor">
            <div className="container mx-auto max-w-[1200px]">

                <div className="flex flex-col items-center justify-center">

                    <motion.h2
                        variants={fadeIn('down', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="h2 text-center"
                    >
                        Email Extractor
                    </motion.h2>

                    <motion.p
                        variants={fadeIn('down', 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="text-description text-center mb-8"
                    >
                        A free online tool to extract email addresses from the text content.
                    </motion.p>

                </div>

                <div className='flex flex-col sm:flex-row justify-between gap-5'>

                    <div className='flex flex-col items-center w-[100%]'>

                        <div className='w-[100%]'>
                            <div>
                                <motion.textarea
                                    variants={fadeIn('right', 0.6)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.6 }}
                                    className='bg-[#ffffff] text-[#666666] p-3 rounded-[10px] border-2 border-solid border-slate-200 outline-none w-[100%] h-[300px] resize-none'
                                    placeholder='Enter the text/content (max: 100k characters)'
                                    value={textEmailAreaValue}
                                    onChange={(e) => setTextEmailAreaValue(e.target.value)}
                                >

                                </motion.textarea>
                            </div>

                            <div className='flex flex-row items-center justify-center gap-4 mt-4 mb-6'>
                                <motion.button
                                    variants={fadeIn('up', 0.6)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.6 }}
                                    onClick={handleButtonClick}
                                    className="flex flex-row items-center p-2 rounded-[10px] bg-black hover:bg-accent hover:scale-105 transition-all duration-300 text-white"
                                >
                                    <p>Extract Email</p>
                                    <Lottie
                                        key={animationPlayed}
                                        animationData={buttonAnimationData}
                                        loop={false}
                                        autoplay={animationPlayed}
                                        className="w-[50px]"
                                        onComplete={() => setAnimationPlayed(false)}
                                    />
                                </motion.button>

                                <motion.button
                                    variants={fadeIn('up', 0.6)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.6 }}
                                    onClick={handleClearButtonClick}
                                    className="flex flex-row items-center p-[1rem] rounded-[10px] bg-gray-400 hover:bg-gray-600 hover:scale-105 transition-all duration-300 text-white"
                                >
                                    Clear
                                </motion.button>
                            </div>
                        </div>

                        <div className='w-[100%]'>
                            <div>
                                <motion.h3
                                    variants={fadeIn('right', 0.6)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.6 }}
                                    className='h3'
                                >
                                    Results
                                </motion.h3>
                            </div>
                            <motion.div
                                variants={fadeIn('right', 0.6)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.6 }}
                                class="w-[100%] h-36 overflow-y-auto border-2 border-solid bg-white p-4 rounded-md flex flex-col"
                            >
                                {textResultValue.split('\n').map((email, index) => (
                                    <p key={index}>{email}</p>
                                ))}
                            </motion.div>
                        </div>

                    </div>
                    <div className='w-[100%]'>
                        <motion.p
                            variants={fadeIn('left', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className='border-s-2 border-solid border-slate-400 pl-[12px]'
                        >
                            Email Extractor is a web based software that helps you extract emails from the bulk of text. And it's completely free to use with some fair usages limit. If you want to extract lots of emails much faster, contact us for premium plans.
                        </motion.p>

                        <motion.h3
                            variants={fadeIn('left', 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className='h3 mt-7 text-[25px]'
                        >
                            What is Email Extractor?
                        </motion.h3>

                        <motion.p
                            variants={fadeIn('left', 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                        >
                            Email Extractor is a simple little tool that will help you find email addresses hidden in a content. Just copy the entire block of text and paste it in the above input box. All you have to do is click on the “Extract Email” button, it will find all the email addresses present in your input text. Any duplicate address will be ignored safely, as a final result, you get a unique list of all emails extracted.

                        </motion.p>
                        <motion.button
                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            onClick={handleDownloadButtonClick}
                            className="flex flex-row items-center mt-4 p-[1rem] rounded-[10px] bg-gray-400 hover:bg-black hover:scale-105 transition-all duration-300 text-white"
                        >
                            Download
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmailExtractor