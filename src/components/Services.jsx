import React, { useState } from 'react';
import { motion } from 'framer-motion';
import digital from './../assets/Images/digital.png';
import gajrajah from './../assets/Images/gajrajah.png';
import natures from './../assets/Images/natures.png';
import learn from './../assets/Images/learn.png';
import worko from './../assets/Images/worko.png';
import refer from './../assets/Images/refer.png';

function Services() {
  const [selectedProject, setSelectedProject] = useState(null);
  const textVariant = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    initialText: {
      x: 200,
      opacity: 0,
    },
    animateText: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1,
        staggerChildren: 0.4,
      },
    },

  };

  const variant = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    initialText: {
      x: -200,
      opacity: 0,
    },
    animateText: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        staggerChildren: 0.4,
      },
    },

  };

  const services = [
    {
      "liveurl": "https://65e603c32be83b10105a6f1f--incredible-sorbet-451d22.netlify.app/",
      "githuburl": "#",
      "title": "Gajrajah Buildcon",
      "image": {
        "url": gajrajah
      },
      "description": "I have developed the frontend part of the website for the construction company based in Bangalore as a part of my project in Creadious. Click to view the details.",
      "techStack": ["Reactjs", "Tailwind", "CSS"],
      "_id": "1"
    },
    {
      "liveurl": "https://debjit7980.github.io/FYLE/",
      "githuburl": "https://github.com/Debjit7980/FYLE.git",
      "title": "Digital Marketing Landing Page",
      "image": {
        "url": digital
      },
      "description": "Developed the landing page of a digital marketing website. Click to view the details.",
      "techStack": ["HTML", "CSS", "JavaScript"],
      "_id": "2"
    },
    {
      "liveurl": "https://naturesdeck-trekcamp-app.onrender.com/",
      "githuburl": "https://github.com/Debjit7980/Travel_Website.git",
      "title": "NaturesDeck",
      "image": {
        "url": natures
      },
      "description": "A full-stack trekking and camping website built with the MERN stack. Features include user registration, secure login with JSON web tokens, profile creation with picture uploads, activity exploration from a MongoDB database, and user blogs.",
      "techStack": ["Reactjs", "MongoDB", "Nodejs", "CSS", "MERN"],
      "_id": "3"
    },
    {
      "liveurl": "https://66584ffe1ce667e2222f8b07--lucky-boba-4adaf0.netlify.app/",
      "githuburl": "https://github.com/Debjit7980/DebjitSinghaRoy.git",
      "title": "LearnHub",
      "image": {
        "url": learn
      },
      "description": "Developed the landing page of an e-learning website using React.js, CSS, and Tailwind. Features a modern, user-friendly design tailored for educational content delivery.",
      "techStack": ["Reactjs", "CSS", "Tailwind"],
      "_id": "4"
    },
    {
      "liveurl": "https://grand-mooncake-7d54d0.netlify.app/",
      "githuburl": "https://github.com/Debjit7980/WorkoAI.git",
      "title": "Worko",
      "image": {
        "url": worko
      },
      "description": "Developed the landing page of a job and referral website. Features include user login with credentials stored locally and navigation to the candidate page.",
      "techStack": ["Reactjs", "Tailwind", "CSS"],
      "_id": "5"
    },
    {
      "liveurl": "https://accredian-frontend-task-omega-eight.vercel.app/",
      "githuburl": "https://github.com/Debjit7980/Accredian-frontend-task.git",
      "title": "Refer & Earn",
      "image": {
        "url": refer
      },
      "description": "Developed an engaging landing page for an e-learning website's referral program. Users can easily refer courses by filling out a form, triggering an automated email from the website team to the referee. All referral details are securely stored in a MySQL database.",
      "techStack": ["Reactjs", "Tailwind", "CSS", "MySQL"],
      "_id": "6"
    }
  ]


  // Function to toggle selectedProject state
  const toggleProjectDetails = (projectId) => {

    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  selectedProject?document.body.style.overflow="hidden":document.body.style.overflow="auto";
  return (
    <div className='bg-gradient-to-b from-[#0c0c1d] via-[#111132] to-[#0c0c1d] h-auto pt-[120px] pb-[40px]  w-full overflow-hidden'>
      <div className='text-[42px] pb-20  relative'>
        <motion.div className=' ml-[5.4%] font-bold' variants={textVariant} initial="initial" whileInView="animate">PROJECTS</motion.div>
        <motion.div className='md:absolute md:top-[20%] md:left-[24%] ml-[5%] md:ml-0 border-t border-gray-600 md:w-[18%] w-[45%]' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1 } }}></motion.div>
      </div>
      <div className='md:w-[100%] w-[85%] mx-auto h-auto relative flex flex-col md:gap-[180px] gap-[120px]'>
        {services.map((service, index) => (
          <React.Fragment key={service._id}>
            {index % 2 === 0 ? (
              <div className='relative md:w-[82%] md:ml-[5rem]' >
                <motion.button variants={textVariant} initial="initial" whileInView="animate" onClick={() => toggleProjectDetails(service._id)} className='relative md:h-[360px] mb-0 h-[220px] md:w-[58%] md:shadow-lg md:shadow-black shadow-none'>
                  <img src={service.image.url} alt={service.title} className='w-full h-full object-cover' />
                  <div className='faded-service absolute top-0 h-full left-0 w-full'></div>
                </motion.button>
                <motion.div className='md:absolute p-0 p-4 md:top-[10%] mt-0 md:left-[56%] md:bg-transparent bg-[#0c0c1d] left-0 md:w-[550px] flex flex-col' variants={textVariant} initial="initialText" whileInView="animateText">
                  <motion.h2 className='md:text-[32px] text-[24px] font-bold md:ml-auto mb-5 font-sans' variants={textVariant}>{service.title}</motion.h2>
                  <motion.div className='bg-[#0c0c1d] md:text-right md:rounded-lg md:p-4 flex flex-col  gap-[20px] md:shadow-lg shadow-none md:shadow-black' variants={textVariant}>
                    <p className='md:text-[15px] text-[13px] md:tracking-0 tracking-[1px] font-sans'>{service.description}</p>
                    <p className='mt-4 ml-auto'><span className="text-sm text-gray-400 flex gap-[15px] flex-wrap font-sans">{service.techStack.map((tech, index) => (<span className='border border-gray-400 pl-3 pr-3 pt-1 pb-1 rounded-[18px]' key={index}>{tech.trim()}</span>))}</span></p>
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              <div className='relative md:w-[82%] ml-auto' >
                <motion.button variants={variant} initial="initial" whileInView="animate" onClick={() => toggleProjectDetails(service._id)} className='relative flex ml-auto mr-[5rem] md:h-[360px] h-[220px] md:w-[58%] w-[100%] md:shadow-lg md:shadow-black shadow-none'>
                  <img src={service.image.url} alt={service.name} className='w-full h-full object-cover ' />
                  <div className='faded-service-1 absolute top-0 h-full left-0 w-full'></div>
                </motion.button>
                <motion.div className='md:absolute md:p-0 p-4 md:shadow-none md:bg-transparent bg-[#0c0c1d] md:top-[10%] md:-ml-[13%] md:w-[550px] flex flex-col' variants={variant} initial="initialText" whileInView="animateText" >
                  <motion.h2 className='md:text-[32px] font-sans text-[24px] font-bold md:mr-auto mb-5' variants={variant}>{service.title}</motion.h2>
                  <motion.div className='bg-[#0c0c1d] text-left md:rounded-lg md:p-4 flex flex-col gap-[20px] md:shadow-lg md:shadow-black shadow-none' variants={variant}>
                    <p className='md:text-[15px]  font-sans text-[13px] md:tracking-0 tracking-[1px] font-[400]'>{service.description}</p>
                    <p className='mt-4'><span className="text-sm  font-sans text-gray-400 flex gap-[15px] flex-wrap">{service.techStack.map((tech, index) => (<span className='border border-gray-400 pl-3 pr-3 pt-1 pb-1 rounded-[18px]' key={index}>{tech.trim()}</span>))}</span></p>
                  </motion.div>
                </motion.div>
              </div>
            )}
            {selectedProject === service._id && (
              <div key={`modal-${service._id}`}>
                <div className="bg-black z-40 border border-violet-600 rounded-lg fixed md:w-[50%] w-[90%] top-[5%] md:top-[3%] left-[5%] md:left-[25%]">
                  <div className="p-3 rounded-lg relative">
                    <img src={service.image.url} alt={service.title} className="w-full h-[200px] md:h-[320px] object-cover rounded-lg" />
                    <h2 className="text-[24px] font-semibold md:mt-4 mt-5">{service.title}</h2>
                    <p className='mt-4'><span className="text-sm text-gray-400 flex gap-[15px] flex-wrap">{service.techStack.map((tech, index) => (<span className='border border-gray-400 pl-3 pr-3 pt-1 pb-1 rounded-[18px]' key={index}>{tech.trim()}</span>))}</span></p>
                    <p className="text-gray-400 text-sm mt-4 font-sans">{service.description}</p>
                    <div className="flex justify-between mt-4">
                      <a href={service.githuburl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#3f0896] to-[#663399] text-white text-[20px] text-center px-0 py-2 md:w-[20%] w-[25%] rounded mr-2">GitHub</a>
                      <a href={service.liveurl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#3f0896] to-[#663399] text-white text-[20px] text-center py-2 md:w-[20%] w-[25%] rounded">Live</a>
                    </div>
                    <button className="bg-gradient-to-r from-[#3f0896] to-[#663399] absolute font-bold text-white text-2xl px-5 py-3 rounded-[50%] -top-[18px] -right-[12px]" onClick={() => toggleProjectDetails(null)}>X</button>
                  </div>
                </div>
                <div className="absolute -top-[20%] inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm  w-[100%] h-[100%] z-10"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Services;
