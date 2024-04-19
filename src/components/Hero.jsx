// Hero.jsx
import React from 'react';
import { motion} from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";

function Hero({ about }) {
  const { avatar, name } = about;

  const textVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },

  };

  const slideVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-350%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        delay: 0.1,
      },
    },
    spring: {
      y: 60,
      opacity: 0,
      transition: {
        repeat: Infinity,
        duration:3,
        delay:0.2
        
      },
    },
    scroll: {
      y: 50,
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration:3,
        
        
      },
    },

  };


  return (
    <div className='md:h-screen h-[100%] w-[100%] relative overflow-hidden'>
      <div className='w-[100%]  h-[100%] pb-[28%] md:p-0 flex md:flex-row flex-col-reverse bg-gradient-to-b from-[#0c0c1d] to-[#111132] ' style={{ overflowX: 'hidden' }}>
        <div className='md:w-[55%] w-full   h-full'>
          <motion.div className='flex  flex-col gap-[45px] mt-[14%] md:w-[50%]  md:p-0 p-4  mx-auto' variants={textVariant} initial="initial" animate="animate">
            <motion.span className='text-[30px] tracking-[6px] text-[#663399] font-bold uppercase' variants={textVariant}>{name}</motion.span>
            <motion.span className='md:text-[40px] text-[26px] font-semibold' variants={textVariant}>{about.subTitle}.</motion.span>
            <motion.div className='z-10 flex gap-[22px]' variants={textVariant}>
              <motion.button className='p-[12px] border border-white bg-transparent text-white font-light rounded-[10px] text-lg cursor-pointer' variants={textVariant}>
                See the Latest Works
              </motion.button>
              <motion.button className='p-[12px] border border-white bg-white text-[#111132] font-light rounded-[10px] text-lg cursor-pointer' variants={textVariant}>
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <div className='md:w-[40%]'>
          <div className='w-[320px] h-[320px]  mt-[20%] relative mx-auto'>
            <div className=' w-[260px] h-[280px] mb-auto  ml-auto z-0 bg-gradient-to-b from-[#3f0896] to-[#663399] shadow-xl-black' style={{ boxShadow: "0 0 10px rgb(12,12,29)" }}></div>
            <img src={avatar?.url} className=' w-[280px] h-[280px] mt-auto object-cover z-10 absolute top-9 rounded-bl-[30%]' />
          </div>
        </div>
      </div>
      <motion.div className='w-[50%] font-bold z-0 md:bottom-12 bottom-[0%] text-[#ffffff06] absolute text-7xl md:text-[50vh]' variants={slideVariant} initial="initial" animate="animate">
        <span className='whitespace-nowrap capitalize'>{about.quote}</span>
      </motion.div>
      <motion.div className='md:bottom-[20%] bottom-5 md:left-[45%] left-[30%] absolute items-center flex flex-col' variants={slideVariant} animate="spring" >
        <span className='whitespace-nowrap capitalize tracking-[8px] font-light'>ABOUT ME</span>
        <motion.span animate="scroll" variants={slideVariant}><IoIosArrowDown /></motion.span>
      </motion.div>
    </div>
  );
}

export default Hero;
