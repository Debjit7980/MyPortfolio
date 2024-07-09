<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { ImSpinner9 } from "react-icons/im";

function Loading() {
    const variant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                loop: Infinity,
                duration: 2,
                staggerChildren: 0.3,
            },
        },
    };

    const spinnerVariant = {
        animate: {
            rotate: 360,
            transition: {
                loop: Infinity,
                duration: 4,
                ease: 'linear',
            },
        },
    };

    return (
        <>
            <motion.div className='w-full h-screen bg-gradient-to-b from-[#0c0c1d] to-[#111132] text-[36px] font-bold flex gap-[2px] justify-center items-center' variants={variant} initial="initial" animate="animate">
                <motion.h1 variants={variant}>Hi,</motion.h1>
                <motion.h1 variants={variant}>I&nbsp;</motion.h1>
                <motion.h1 variants={variant}>A</motion.h1>
                <motion.h1 variants={variant}>M</motion.h1>
                <motion.h1 variants={variant}>&nbsp;</motion.h1>
                <motion.h1 variants={variant}>J</motion.h1>
                <motion.h1 variants={variant}>O</motion.h1>
                <motion.h1 variants={variant}>H</motion.h1>
                <motion.h1 variants={variant}>N</motion.h1>
            </motion.div>
            <motion.h1 className="absolute bottom-[10px] right-[10px] text-gray-400 font-bold  text-[30px] tracking-[2px] flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0, duration: 1.5 } }}>
                LOADING... 
                <motion.span variants={spinnerVariant} animate="animate">
                    <ImSpinner9 className='text-[40px]'/>
                </motion.span>
            </motion.h1>
        </>
    );
}

export default Loading;
=======
import React from 'react'
import { animate, motion } from 'framer-motion';
//initial={{y:0}} animate={{y:-500, transition:{duration:2}}}
function Loading() {

    const variant={
        initial:{
            opacity:0
        },
        animate:{
            opacity:1,
            transition:{
                duration:2,
                staggerChildren: 0.3,
            },
        },
    }

  return (
    <motion.div className='w-full h-screen bg-gradient-to-b from-[#0c0c1d] to-[#111132] text-[36px] font-bold flex gap-[2px] justify-center items-center'variants={variant} initial="initial" animate="animate">
        {/* <motion.div className='md:relative bg-gradient-to-b from-[#111132] to-[#0c0c1d]' initial={{opacity:1}} animate={{opacity:0, transition:{duration:2}}}>
            <motion.span className='md:absolute  md:top-[550px]  md:right-10 md:text-[20vh]   font-bold text-gray-400'>LOADING...</motion.span>
            
        </motion.div> */}
        <motion.h1 variants={variant}>Hi,</motion.h1>
        <motion.h1 variants={variant}>I&nbsp;</motion.h1>
        <motion.h1 variants={variant}>A</motion.h1>
        <motion.h1 variants={variant}>M</motion.h1>
        <motion.h1 variants={variant}>&nbsp;</motion.h1>
        <motion.h1 variants={variant}>J</motion.h1>
        <motion.h1 variants={variant}>O</motion.h1>
        <motion.h1 variants={variant}>H</motion.h1>
        <motion.h1 variants={variant}>N</motion.h1>
        {/* <motion.h1 variants={variant}>.</motion.h1> */}
    </motion.div>
  )
}

export default Loading
>>>>>>> 852d46c5b3389174fa475e0dd9a002ae1144152f
