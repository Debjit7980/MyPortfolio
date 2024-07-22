import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import clogo from './../assets/Images/clogo.png';

function Skills() {
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
  const skills=[
    {
      "name": "HTML",
      "percentage": 98,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286058630-v3ax0a"
    },
    {
      "name": "CSS",
      "percentage": 97,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286273084-romle"
    },
    {
      "name": "Javascript",
      "percentage": 95,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288679775-y4qwn3"
    },
    {
      "name": "Tailwind",
      "percentage": 99,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286616701-2jka3q"
    },
    {
      "name": "React",
      "percentage": 90,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706291833080-0loo09"
    },
    {
      "name": "TypeScript",
      "percentage": 70,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287104739-pm8en"
    },
    {
      "name": "Node.js",
      "percentage": 92,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286990341-tznh4"
    },
    {
      "name": "Vercel",
      "percentage": 90,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286729467-rbblgb"
    },
    {
      "name": "Github",
      "percentage": 95,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286821409-21cuqs"
    },
    {
      "name": "Git",
      "percentage": 80,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286842731-r0eyn"
    },
    {
      "name": "MySQL",
      "percentage": 85,
      "image": "https://seeklogo.com/images/M/mysql-logo-B4943FE6DD-seeklogo.com.png"
    },
    {
      "name": "MongoDB",
      "percentage": 80,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286966065-p2yrx9"
    },
    {
      "name": "Figma",
      "percentage": 80,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287138776-slfc3e"
    },
    {
      "name": "Python",
      "percentage": 85,
      "image": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288708710-nrq74s"
    },
    {
      "name": "C Programming",
      "percentage": 90,
      "image": clogo
    }
  ]
  const handleShowMore = () => {
    setShowAllSkills(!showAllSkills);
    if (showAllSkills && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  //console.log(JSON.stringify(skills));
  return (
    <div className='bg-gradient-to-b from-[#0c0c1d] via-[#111132] to-[#0c0c1d] w-[100%] md:pt-[90px] z-0 pb-[10px] '>
      
      <div className='w-[100%] bg-none md:pt-0 md:pb-0 pt-[20px] pb-[20px] '>
        <span className='md:text-[35vh] text-[4.2rem] font-bold tracking-wider ml-[20px] md:text-gray-600 opacity-20'>SKILLS</span>
      </div>
      <div ref={scrollRef}></div>
      <div className='md:w-[95%] w-[90%] flex md:flex-row  flex-wrap justify-between  md:gap-[35px]   mx-auto  '>
        {skills.slice(0, showAllSkills ? skills.length : 8).map(skill => (
          <div key={skill._id} className="faded-4 flex flex-col gap-[15px] mb-12 bg-transparent border border-violet-900  md:w-[26%] w-[45%]  md:p-4 p-1 pb-2 pt-2 ">
            <img src={skill.image} alt={skill.name} className="w-12 h-12 mr-2" />
            <div className='flex flex-col gap-[10px]'>
              <p className="font-thin tracking-wider">{skill.name}</p>
              <div className='md:w-[92%] w-[80%] h-[10px]  relative'>
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
