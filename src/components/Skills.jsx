import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Skills({ skills }) {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const scrollRef = useRef(null);

  const textVariant = {
    initial: {
      scaleX: 0,
      opacity: 0
    },
    animate: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.2
      },
    },
  };

  const handleShowMore = () => {
    setShowAllSkills(!showAllSkills);
    if (showAllSkills && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className='faded-2 w-[100%] md:pt-[90px] z-0 pb-[90px]'>
      
      <div className='w-[60%]'>
        <span className='md:text-[35vh] text-[12vh] font-bold tracking-wider md:ml-[20px] md:text-gray-600 opacity-20'>SKILLS</span>
      </div>
      <div ref={scrollRef}></div>
      <div className='w-[94%] flex md:flex-row  flex-wrap justify-between  md:gap-[35px]   mx-auto  '>
        {skills.slice(0, showAllSkills ? skills.length : 8).map(skill => (
          <div key={skill._id} className="faded-4 flex flex-col gap-[15px] mb-12 bg-transparent border border-violet-900  md:w-[26%] w-[45%]  p-4">
            <img src={skill.image.url} alt={skill.name} className="w-12 h-12 mr-2" />
            <div className='flex flex-col gap-[10px]'>
              <p className="font-thin tracking-wider">{skill.name}</p>
              <div className='w-[92%] h-[10px]  relative'>
                <motion.div
                  style={{ width: `${skill.percentage}%`, originX: 0, transformOrigin: 'left' }}
                  variants={textVariant}
                  initial="initial"
                  whileInView="animate"
                  className='h-full bg-gradient-to-r from-[#3f0896] to-[#663399] relative'
                >
                  <div className="absolute -bottom-[8px] -right-[35px] text-gray-500">
                    {skill.percentage}%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-0 mb-10">
        <button className="buttons text-purple-600 p-4 text-xl rounded-lg border-[2px] border-purple-600" onClick={handleShowMore}>{showAllSkills ? "Show Less" : "Show More"}</button>
      </div>

      
    </div>
  );
}

export default Skills;
