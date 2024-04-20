"use client"

import { useRef, useState } from 'react';

// Framer Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

// Sweet Alert
import Swal from 'sweetalert2';

const Base64Encode = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState("UTF-8");
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [encodedURL, setEncodedURL] = useState("");
    const [fileName, setFileName] = useState("");
    const inputRef = useRef(null);
    const inputRefDownload = useRef(null);
    const [inputDecode, setInputDecode] = useState("");
    const [outputDecode, setOutputDecode] = useState("");
    const [decodedURL, setDecodedURL] = useState("");
    const inputRefDecode = useRef(null);
    const [base64Input, setBase64Input] = useState("");
    const [fileContent, setFileContent] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleButtonClick = () => {
        if (!inputText) return; // Check if input text is empty

        let encodedText = "";
        switch (selectedValue) {
            case "UTF-8":
                encodedText = btoa(unescape(encodeURIComponent(inputText)));
                break;
            case "UTF-16LE":
            case "UTF-16BE":
            case "IBM866":
            case "ISO-8859-2":
            case "ISO-8859-3":
            case "ISO-8859-4":
            case "ISO-8859-5":
            case "ISO-8859-6":
            case "ISO-8859-7":
            case "ISO-8859-8":
                encodedText = btoa(unescape(encodeURIComponent(inputText)));
                break;
            case "Hex":
                // Convert hex string to bytes and then to base64
                const bytes = inputText.match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
                const uint8Array = new Uint8Array(bytes);
                encodedText = btoa(String.fromCharCode.apply(null, uint8Array));
                break;
            default:
                break;
        }

        setOutputText(encodedText);

        // Construct the encoded URL
        const url = `https://emn178.github.io/online-tools/base64_encode.html?input_type=${selectedValue}&input=${encodeURIComponent(inputText)}`;
        setEncodedURL(url);
    };

    const handleCopy = () => {
        inputRef.current.select();
        document.execCommand('copy');
    };

    const handleDecodeClick = () => {
        if (!inputDecode) return; // Check if input text is empty

        try {
            const decodedText = atob(inputDecode.trim());
            setOutputDecode(decodedText);

            // Construct the decoded URL
            const url = `https://emn178.github.io/online-tools/base64_decode.html?input=${encodeURIComponent(inputDecode)}`;
            setDecodedURL(url);
        } catch (error) {
            // Show error message using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Base64 input! Please enter a valid Base64 string.',
            });
        }
    };

    const handleCopyDecode = () => {
        inputRefDecode.current.select();
        document.execCommand('copy');
    };

    const handleDownload = () => {
        if (!base64Input) return; // Check if input is empty

        try {
            const decodedText = atob(base64Input.trim()); // Decode Base64 string
            const blob = new Blob([decodedText], { type: "text/plain" }); // Create blob from decoded text
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "download.txt"; // Set default file name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            // Show error message using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Base64 input! Please enter a valid Base64 string.',
            });
        }
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : "");
        readFileContent(file); // Read file content when file is selected
    };

    const readFileContent = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target.result;
            setFileContent(content); // Set file content to state
        };
        reader.readAsText(file);
    };

    const handleFileEncode = () => {
        if (!fileContent) return; // Check if file content is empty

        const encodedText = btoa(fileContent); // Encode file content to Base64
        setOutputText(encodedText);
    };

    const tabs = [
        {
            title: "Encode",
            heading: "Base64 Encode",
            content: (
                <div className='mt-4'>
                    <p className="text-description text-center mb-4">
                        This Base64 encode online tool helps you encode text or binary to Base64. You can input UTF-8, UTF-16, Hex to Base64.
                    </p>
                    <div className='flex flex-row gap-3 items-center justify-center'>
                        <p>Input Type:</p>
                        <select className='p-2 pr-12' value={selectedValue} onChange={handleChange}>
                            <optgroup label="Binary">
                                <option value="Hex">Hex</option>
                            </optgroup>
                            <optgroup label="Hex">
                                <option value="UTF-8">UTF-8</option>
                                <option value="UTF-16LE">UTF-16LE</option>
                                <option value="UTF-16BE">UTF-16BE</option>
                                <option value="IBM866">IBM866</option>
                                <option value="ISO-8859-2">ISO-8859-2</option>
                                <option value="ISO-8859-3">ISO-8859-3</option>
                                <option value="ISO-8859-4">ISO-8859-4</option>
                                <option value="ISO-8859-5">ISO-8859-5</option>
                                <option value="ISO-8859-6">ISO-8859-6</option>
                                <option value="ISO-8859-7">ISO-8859-7</option>
                                <option value="ISO-8859-8">ISO-8859-8</option>
                            </optgroup>
                        </select>
                    </div>
                    <div>
                        <textarea
                            placeholder='Enter Input Here ...'
                            className='mt-8 bg-white flex w-[100%] h-[100px] p-3 border border-[#cdcdcd] rounded-md resize-none'
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-row items-center justify-center gap-4 mt-4'>
                        <button onClick={handleButtonClick} className='p-2 rounded-md bg-slate-400 hover:bg-black hover:text-white duration-300'>Encode</button>
                    </div>
                    <div>
                        <textarea
                            placeholder='Output'
                            className='mt-8 bg-white flex w-[100%] h-[100px] p-3 border border-[#cdcdcd] rounded-md resize-none'
                            value={outputText}
                            readOnly
                            ref={inputRef}
                        />
                    </div>
                    <div className='flex flex-row items-center mt-4'>
                        <input
                            type="text"
                            value={encodedURL}
                            readOnly
                            className='bg-white flex w-[calc(100%-50px)] h-[40px] p-3 border border-[#cdcdcd] rounded-l-md resize-none'
                        />
                        <button onClick={handleCopy} className='bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded-r-md'>
                            Copy
                        </button>
                    </div>
                </div>
            ),
        },
        {
            title: "Decode",
            heading: "Base64 Decode",
            content: (
                <div className='mt-4'>
                    <p className="text-description text-center">
                        This Base64 decode online tool helps you decode Base64 string to original text.
                    </p>
                    <div>
                        <textarea
                            placeholder='Enter Input Here ...'
                            className='mt-8 bg-white flex w-[100%] h-[100px] p-3 border border-[#cdcdcd] rounded-md resize-none'
                            value={inputDecode}
                            onChange={(e) => setInputDecode(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-row items-center justify-center gap-4 mt-4'>
                        <button onClick={handleDecodeClick} className='p-2 rounded-md bg-slate-400 hover:bg-black hover:text-white duration-300'>Decode</button>
                    </div>
                    <div>
                        <textarea
                            placeholder='Output'
                            className='mt-8 bg-white flex w-[100%] h-[100px] p-3 border border-[#cdcdcd] rounded-md resize-none'
                            value={outputDecode}
                            readOnly
                            ref={inputRefDecode}
                        />
                    </div>
                    <div className='flex flex-row items-center mt-4'>
                        <input
                            type="text"
                            value={decodedURL}
                            readOnly
                            className='bg-white flex w-[calc(100%-50px)] h-[40px] p-3 border border-[#cdcdcd] rounded-l-md resize-none'
                        />
                        <button onClick={handleCopyDecode} className='bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded-r-md'>
                            Copy
                        </button>
                    </div>
                </div>
            ),
        },
        {
            title: "File to Base64",
            heading: "Encode File to Base64",
            content: (
                <div className='mt-4'>
                    <p className="text-description text-center mb-4">
                        This file to Base64 online tool helps you encode file to Base64 string without uploading the file.
                    </p>
                    <div className='bg-white'>
                        <label htmlFor="fileInput" className="custom-file-input">
                            <div className="file-box">
                                {fileName ? fileName : "Click to choose file"}
                            </div>
                        </label>
                        <input
                            type="file"
                            accept="*/*"
                            onChange={handleFileSelect}
                            id="fileInput"
                            className="hidden"
                        />
                        <style jsx>{`
                            .custom-file-input {
                                cursor: pointer;
                            }
                            .file-box {
                                border: 2px dashed #cdcdcd;
                                padding: 20px;
                                text-align: center;
                            }
                        `}</style>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-4 mt-4'>
                        <button onClick={handleFileEncode} className='p-2 rounded-md bg-slate-400 hover:bg-black hover:text-white duration-300'>Encode</button>
                        <div>
                            <input
                                className='mr-2'
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label>Auto Update</label>
                        </div>
                    </div>
                    <div>
                        <textarea
                            placeholder='Output'
                            className='mt-8 bg-white flex w-[100%] h-[100px] p-3 border border-[#cdcdcd] rounded-md resize-none'
                            value={outputText} // Display the encoded file content
                            readOnly
                        />
                    </div>
                </div>

            ),
        },
        {
            title: "Base64 to File",
            heading: "Decode Base64 to File",
            content: (
                <div className='mt-4'>
                    <p className="text-description text-center mb-4">
                        This Base64 to file online tool helps you decode Base64 string to file and download.
                    </p>
                    <div>
                        <textarea
                            placeholder='Enter Base64 Here ...'
                            className='mt-8 bg-white flex w-[100%] h-[100px] p-3 border border-[#cdcdcd] rounded-md resize-none'
                            value={base64Input}
                            onChange={(e) => setBase64Input(e.target.value)}
                            ref={inputRefDownload}
                        />
                    </div>
                    <div className='flex flex-row items-center mt-4'>
                        <input
                            type="text"
                            value={fileName ? fileName : "download.txt"}
                            ref={inputRefDownload}
                            readOnly
                            className='bg-white flex w-[calc(100%-50px)] h-[40px] p-3 border border-[#cdcdcd] rounded-l-md resize-none'
                        />
                        <button onClick={handleDownload} className='bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded-r-md'>
                            Download
                        </button>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <section className="section h-[1500px] xsm:h-[1300px] md:h-[1000px] flex items-center bg-[#b2b7c2]/10" id="base64">
            <div className="container mx-auto max-w-[1200px]">

                <div className="flex flex-col items-center justify-center">

                    <motion.h2
                        variants={fadeIn('down', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="h2 text-center"
                    >
                        {tabs[activeTab].heading}
                    </motion.h2>

                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="flex flex-wrap"
                    >
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-2 mx-2 my-1 rounded hover:bg-blue-500 duration-300 hover:text-white ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="mt-4 w-[100%]"
                    >
                        {tabs.map((tab, index) => (
                            <div key={index} className={activeTab === index ? 'block' : 'hidden'}>
                                <p>{tab.content}</p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
export default Base64Encode