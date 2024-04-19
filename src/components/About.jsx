import React from 'react';
import { motion } from 'framer-motion';

function About({ about }) {
  const { alternateAvatars } = about;

  const textVariant = {
    initial: {
      x: -300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4
      },
    },
  };

  return (
    <div className='w-full  flex md:flex-row flex-col z-0'>
      <div className='md:w-[50%] w-[100%] flex items-center relative '>
        {/* {typeof window !== 'undefined' && window.innerWidth >= 768 ? ( // Check if screen size is md or larger
          <motion.img
            src={alternateAvatars[0].url}
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            alt="pht"
            className='w-[60%] h-[90%]  md:ml-auto md:mt-auto object-cover'
          />
        ) : (
          <img
            src={alternateAvatars[0].url}
            alt="pht"
            className='w-[400px] h-[400px]  mx-auto  object-cover'
          />
        )} */}
        <motion.img src={alternateAvatars[0].url} alt="alternateImage"  variants={textVariant} initial="initial" whileInView="animate"  className='mx-auto object-cover mt-[20px]'/>
        <div className='faded absolute bottom-0 h-[100%]  w-[100%] '></div>
      </div>
      <div className='md:w-[50%] pb-[40px] w-[100%] relative flex'>
        <div className='flex flex-col gap-[40px] pt-[5rem] w-[80%] mx-auto z-10 '>
          <span className='text-[38px] font-bold tracking-[1px] capitalize'>{about.name}</span>
          <span className='text-[32px] tracking-[2px] flex flex-col'>{about.title}<span className='text-[16px] text-gray-500 tracking-[0px]'>With {about.exp_year} years of experience</span></span>
          <p className='text-[16px] text-gray-500 tracking-[1px]'>{about.description}</p>
        </div>
        <div className='faded-1 absolute h-full w-full'></div>
      </div>
    </div>
  );
}

export default About;
