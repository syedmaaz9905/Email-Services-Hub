"use client"

import { useEffect, useRef, useState } from 'react';

// Framer Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants";

// Rich Text Editor
// import JoditEditor from 'jodit-react';

const HTMLEditor = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [showHtmlSource, setShowHtmlSource] = useState(false);

    const [editorLoaded, setEditorLoaded] = useState(false);
    const [JoditEditor, setJoditEditor] = useState(null);

    useEffect(() => {
        import('jodit-react').then(module => {
            setJoditEditor(module.default);
            setEditorLoaded(true);
        });
    }, []);

    if (!editorLoaded) return null;

    return (
        <section className="section h-[1300px] xsm:h-[1200px] sm:h-full xl:h-[1000px] flex items-center" id="htmleditor">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="h2 text-center"
                >
                    HTML Editor - Free Web Component Composer
                </motion.h2>

                <motion.p
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="max-w-[800px] text-center mx-auto mb-5"
                >
                    Welcome to our free web content composer, which was designed for our own web design agency, because we simply couldn't find anything else that perfectly suited all our needs. We were always jumping from one tool to another, but with our HTML5 Editor, everything is integrated into one complete unit.
                    <br />
                    <br />
                    Delighted with the results, we decided to offer our HTML5 Editor to everyone for free. You are more than welcome to use it without any charge, all we're asking is that you tell your friends about it. It might help them as well.
                </motion.p>

                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <div className='mt-12'>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            onChange={newContent => setContent(newContent)}
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <div className='mt-12 border-2 border-gray-200 h-[250px] p-4 overflow-auto'>
                        <code className="block whitespace-pre-wrap">{content}</code>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HTMLEditor