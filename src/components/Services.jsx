import React from 'react';
import {motion} from 'framer-motion';

function Services({ services }) {

  const textVariant = {
    initial: {
      x: -500,
      opacity:0,
    },
    animate: {
      x: 0,
      opacity:1,
      transition: {
        duration: 1,
      },
    },
    initialText: {
      x: 500,
      opacity:0,
    },
    animateText: {
      x: 0,
      opacity:1,
      transition: {
        duration: 1,
        delay:1,
        staggerChildren:0.1,
      },
    },

  };

  const variant = {
    initial: {
      x: 500,
      opacity:0,
    },
    animate: {
      x: 0,
      opacity:1,
      transition: {
        duration: 1,
      },
    },
    initialText: {
      x: -500,
      opacity:0,
    },
    animateText: {
      x: 0,
      opacity:1,
      transition: {
        duration: 1,
        delay:1,
        staggerChildren:0.1,
      },
    },

  };

  return (
    <div className='bg-[#111132] h-auto pt-[120px] pb-[40px]  w-full overflow-hidden'>
      <div className='text-[42px] pt-20 pb-20  relative'>
        <motion.div className=' ml-[4%] font-bold' variants={textVariant} initial="initial" whileInView="animate">Services I Offer</motion.div>
        <motion.div className='md:absolute md:top-[50%] md:left-[28%] ml-[4%] md:ml-0 border-t border-gray-600 md:w-[18%] w-[45%]' initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:1}}}></motion.div>
      </div>
      <div className='md:w-[92%] w-[85%] mx-auto h-auto relative flex flex-col md:gap-[180px] gap-[120px]   z-0 '>
        {services.map((service, index) => (
          index % 2 === 0 ? (
            <motion.div key={index} className='relative shadow-lg shadow-black md:shadow-none' variants={textVariant} initial="initial" whileInView="animate">
              <div className='relative md:h-[350px] md:w-[52%] md:shadow-lg md:shadow-black'>
                <img src={service.image.url} alt={service.name} className='w-full h-full object-cover' />
                <div className='faded-service absolute top-0 h-full left-0 w-full'></div>
              </div>
              <motion.div className='md:absolute md:p-0 p-4 md:top-[12%] md:left-[50%] md:bg-transparent bg-[#0c0c1d]  left-0 md:w-[550px] flex flex-col' variants={textVariant} initial="initialText" whileInView="animateText">
                <motion.h2 className='md:text-[32px] text-[24px] font-bold md:ml-auto mb-5' variants={textVariant}>{service.name}</motion.h2>
                <div className='bg-[#0c0c1d] md:text-right md:rounded-lg md:p-4 flex flex-col gap-[20px] md:shadow-lg md:shadow-black'>
                  <p className='md:text-[20px]'>{service.desc}</p>
                  <p className='text-green-600 md:text-[22px] md:ml-auto mb-3'>Charges: {service.charge}</p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div key={index} className='relative md:w-[52%] md:ml-auto' variants={variant} initial="initial" whileInView="animate">
              <div className='relative md:h-[350px]  md:shadow-lg md:shadow-black'>
                <img src={service.image.url} alt={service.name} className='w-full h-full object-cover' />
                <div className='faded-service-1 absolute top-0 h-full left-0 w-full'></div>
              </div>
              <motion.div className='md:absolute md:p-0 p-4 md:bg-transparent bg-[#0c0c1d] md:top-[12%] md:-ml-[82%] md:w-[550px] flex flex-col' variants={variant} initial="initialText" whileInView="animateText">
                <motion.h2 className='md:text-[32px] text-[24px] font-bold md:mr-auto mb-5' variants={variant}>{service.name}</motion.h2>
                <div className='bg-[#0c0c1d] text-left md:rounded-lg md:p-4 flex flex-col gap-[20px] md:shadow-lg md:shadow-black'>
                  <p className='md:text-[20px]'>{service.desc}</p>
                  <p className='text-green-600 md:text-[22px] md:mr-auto mb-3'>Charges: {service.charge}</p>
                </div>
              </motion.div>
            </motion.div>
          )
        ))}
      </div>

    </div>
  );
}

export default Services;
