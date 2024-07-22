// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import profile from './../assets/Images/profile.jpg';

function Hero() {

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
        staggerChildren: 0.2,
      },
    },
    initialImage: {
      x: 200,
      opacity: 0,
    },
    animateImage: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1
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
        duration: 3,
        delay: 0.2

      },
    },
    scroll: {
      y: 50,
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration: 3,


      },
    },

  };
  const slideVariant1 = {
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
  }


  return (
    <div className=' w-[100%] h-auto  flex flex-col overflow-x-hidden bg-gradient-to-b from-[#0c0c1d] via-[#111132] to-[#0c0c1d] '>
      <div className='w-[100%] pb-[28%] md:p-0 flex md:flex-row flex-col-reverse'>
        <div className='md:w-[58%] w-full'>
          <motion.div className='flex  flex-col  mt-[12%] md:w-[55%]  md:p-0 p-4  mx-auto' variants={textVariant} initial="initial" animate="animate">
            <motion.span className='text-[15px]  text-[#663399] font-thin ' variants={textVariant}>Hi, my name is</motion.span>
            <motion.span className='md:text-[38px] text-[34px] tracking-[2px] mt-[4%] font-bold uppercase font-sans' variants={textVariant}>Debjit.</motion.span>
            <motion.span className='md:text-[38px] text-[33px] font-bold text-gray-500 font-sans' variants={textVariant}>I am a web developer.</motion.span>
            <motion.p className='md:text-[18px] mt-[8%] text-[16px] font-[400] text-gray-600 font-sans' variants={textVariant}>I like to bring the designing ideas live on a browser.
              I have completed my Master of Computer Applications (MCA) from Chandigarh University, Punjab .
            </motion.p>
            <motion.div className='z-10 flex gap-[22px] mt-[15%]' variants={textVariant}>
              <motion.a href="#Projects" className='p-[12px]  border border-white bg-transparent hover:bg-white md:text-lg text-[15px] text-white hover:text-[#111132] hover:duration-700 font-thin rounded-[10px] md:text-lg cursor-pointer' variants={textVariant}>
                See the Latest Works
              </motion.a>
              <motion.a href="./../assets/Resume_debjit singha roy.pdf" download className='p-[12px] text-[15px] md:text-lg flex items-center justify-center border border-white bg-white hover:bg-transparent text-[#111132] hover:text-white hover:duration-700 font-thin rounded-[10px] md:text-lg cursor-pointer' variants={textVariant}>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className='md:w-[40%]' variants={textVariant} initial="initialImage" animate="animateImage">
          <div className='md:w-[340px] md:h-[340px] w-[320px] h-[320px]  mt-[18%] relative mx-auto'>
            <div className='md:w-[270px] md:h-[290px] w-[260px] h-[260px] mb-auto  ml-auto z-0 bg-gradient-to-b from-[#3f0896] to-[#663399] shadow-xl-black' style={{ boxShadow: "0 0 10px rgb(12,12,29)" }}></div>
            <img src={profile} className='md:w-[300px] md:h-[290px] w-[280px] h-[280px] mt-auto object-cover z-10 absolute top-9 rounded-bl-[30%]' />
          </div>
        </motion.div>

      </div>
      <motion.div className='md:-mt-[2%] -mt-[30%] md:ml-[8%] left-[40%]  items-center flex flex-col' variants={slideVariant} animate="spring" >
        <a href="#About" className='whitespace-nowrap capitalize tracking-[5px] font-light'>ABOUT ME</a>
        <motion.span animate="scroll" variants={slideVariant}><IoIosArrowDown /></motion.span>
      </motion.div>
      <motion.div className='w-[50%] font-bold z-0  mt-[5%] text-[#ffffff06]  text-7xl md:text-[45vh] text-[13rem]' variants={slideVariant1} animate="animate">
        <span className='whitespace-nowrap capitalize'>Live the Life as you want</span>
      </motion.div>
      
      <div className='w-full md:pt-[2rem] mt-[5rem]' id="About">
        <div className='md:w-[100%] pb-[40px] w-[100%] relative flex'>
          <div className='flex flex-col gap-[12px] w-[90%] mx-auto z-10 '>
            <span className='md:text-[38px] text-3xl font-[700] tracking-[1px] bg-gradient-to-r from-purple-400 via-blue-900 to-white bg-clip-text text-transparent uppercase font-sans'>Debjit Singha Roy</span>
            <span className='md:text-[32px] text-2xl tracking-[2px] font-bold  flex flex-col text-gray-400 font-sans'>Web Developer<span className='text-[16px] text-gray-600 tracking-[0px] font-thin'>specialized in frontend developement</span></span>
            <p className='text-[16px] text-gray-500  mt-[3%] font-sans'>I have
              honed my skills in JavaScript, React.js and I'm currently learning TypeScript to expand my expertise. I pride myself on
              being a quick learner and attentive listener, which allows me to collaborate effectively with clients to
              create efficient and scalable solutions. My focus is on developing user-friendly applications that
              solve real-world problems.
            </p>
          </div>
        </div>
        {/* <div className='faded-1 absolute h-full w-full -bottom-[100%]'></div> */}
      </div>
    </div>
  );
}

export default Hero;
