import React, { useState } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import { motion } from 'framer-motion';

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function Timeline() {
  const edu = [{
    "_id": "1",
    "collegeName": "Chandigarh University",
    "summary": "Completed my Master in Computer Applications from Chandigarh University, Punjab.",
    "startDate": "2022-09-19",
    "endDate": "2024-06-22",
    "collegeLocation": "Mohali, Punjab, India",
    "course": "MCA",
    "bulletPoints": [
      "I have completed my Master in Computer Applications (MCA) in 2024 securing 7.65 cgpa.",
      "Felicitated as a Topper for the Soft Skill Training Program in Chandigarh University in 2023."
    ]
  }, {
    "collegeName": "St. Xavier's College",
    "summary": "Completed my Bachelor of Computer Science (B.Sc) specialized in Computer Science from St.Xavier's College, Kolkata.",
    "startDate": "2019-07-19",
    "endDate": "2022-06-18",
    "collegeLocation": "Kolkata, West Bengal, India",
    "course": "Computer Science (B.Sc)",
    "bulletPoints": [
      "I have completed my Bachelor of Computer Science (B.Sc Comp. Sc.) in 2022 securing 7.05 cgpa."
    ],
    "_id": "2"
  },
  {
    "collegeName": "Springdale High School",
    "summary": "West Bengal Council of Higher Secondary Education",
    "startDate": "2017-06-02",
    "endDate": "2019-04-22",
    "collegeLocation": "Kalyani, West Bengal",
    "course": "12th Boards",
    "bulletPoints": [
        "I have passed my 12th boards (WBCHSE) examination in 2019 securing 89% marks."
    ],
    "_id":"3"
  },
  {
    "collegeName": "Springdale High School",
    "summary": "West Bengal Board of Secondary Education",
    "startDate": "2011",
    "endDate": "2017",
    "collegeLocation": "Kalyani, West Bengal",
    "course": "10th Boards",
    "bulletPoints": [
        "I have passed my 10th boards (WBBSE) examination in 2017 securing 90.3% marks.",
        "Secured highest marks (100/100) in Mathematics in WBBSE examination."
    ],
    "_id":"4"
  }]

  const exp = [{
    "_id": "1",
    "companyName": "Creadious",
    "summary": "Internship",
    "startDate": "2024-02-12",
    "endDate": "2024-04-4",
    "companyLocation": "Work From Home",
    "jobTitle": "MERN Stack Developer",
    "bulletPoints": [
      "Collaborated with the design team to implement features, fix bugs, and improve application.",
      "Utilized version control systems like Git for efficient project management and collaboration.",
      "Led the developement of a Bangalore based builder's website.",
    ],
    "liveDemoLink": "https://65e603c32be83b10105a6f1f--incredible-sorbet-451d22.netlify.app/"
  }, {
    "_id": "2",
    "companyName": "Dabotics India Pvt. LTd.",
    "summary": "Internship",
    "startDate": "2023-08-1",
    "endDate": "2023-09-1",
    "companyLocation": "Remote",
    "jobTitle": "Web Developer Intern",
    "bulletPoints": [
      "Contributed to full-stack web development projects, emphasized front-end technologies like HTML, CSS, JavaScript."
    ],
    "liveDemoLink":"https://github.com/Debjit7980/Dabotics_tasks.git"
  }]
  console.log(edu)

  const textVariant = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },

  };
  // State to track the currently selected job ID
  const [selectedJobId, setSelectedJobId] = useState("1");
  const [selectedWorkId, setSelectedWorkId] = useState("1");

  // Function to handle clicks on job titles
  const handleJobTitleClick = (jobId) => {
    setSelectedJobId(jobId);
  };

  const handleWorkTitleClick = (workId) => {
    setSelectedWorkId(workId);
  };

  const selectedJob = edu.find((job) => job._id === selectedJobId);
  const selectedExp = exp.find((work) => work._id === selectedWorkId);


  const formatDateString = (dateString) => {
    return formatDate(dateString);
  };

  //console.log(exp)
  return (
    <div className="faded-2 pt-[120px] md:pb-[200px] pb-[90px] w-full flex flex-col">
      <div className='text-[42px] pt-20 md:pb-20 pb-14  relative'>
        <motion.div className='md:ml-[10%] font-bold ml-[4%]' variants={textVariant} initial="initial" whileInView="animate">Education</motion.div>
        <motion.div className='md:absolute md:top-[50%] md:left-[28%] ml-[4%] md:ml-0 border-t border-gray-600 w-[30%]' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1 } }}></motion.div>
      </div>
      <div className="flex md:w-[80%] w-[92%]  mx-auto md:h-auto pb-[50px] md:pb-[8rem]  md:flex-row flex-col gap-[45px]">
        {/* Left-hand side: Job Titles */}
        <div className="md:w-[30%] w-full md:mb-0 mb-[2px]">
          {edu.map((eduItem) => (
            <div
              key={eduItem._id}
              className={`eduBtn p-4 pt-5 cursor-pointer pb-5 border-l text-gray-400  ${selectedJobId === eduItem._id ? 'bg-gray-500 bg-opacity-10 border-l-4 text-purple-600 border-purple-600' : 'border-gray-500 '}`}
              onClick={() => handleJobTitleClick(eduItem._id)}
            >
              <span className='text-[20px]'>{eduItem.course}</span>
            </div>
          ))}
        </div>

        {/* Right-hand side: Company Name, Job Location, and Bullet Points */}
        <div className='w-[90%] '>
          {selectedJob && (
            <div className="pl-4 mx-auto  flex flex-col">
              <span className='text-[28px] font-bold font-sans'>{selectedJob.course} <span className='text-purple-600'>@ </span><span className='text-purple-600'>{selectedJob.collegeName}</span></span>
              <span className='text-gray-400 text-[18px] mt-2'>{formatDateString(selectedJob.startDate)} - {formatDateString(selectedJob.endDate)}</span>
              <span className='text-gray-400 text-[18px] mt-2'>{selectedJob.collegeLocation}</span>
              <span className='text-gray-400 text-[20px] mt-7'>{selectedJob.summary}</span>
              {/* Display the bullet points */}
              <ul className='mt-6'>
                {selectedJob.bulletPoints.map((bulletPoint, index) => (
                  <span key={index} className='mb-8 items-center flex'>
                    <span className='text-[18px] text-purple-600'><BiSolidRightArrow /></span><span className='text-gray-400 ml-2 text-[18px] font-[400]'>{bulletPoint}</span>
                  </span>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='text-[42px]  pb-20  md:mt-0  mt-12 relative'>
        <motion.div className='md:ml-[10%] ml-[4%] font-bold' variants={textVariant} initial="initial" whileInView="animate">Experience</motion.div>
        <motion.div className='md:absolute md:top-[25%] md:left-[28%] ml-[4%] md:ml-0 border-t border-gray-600 md:w-[22%] w-[30%]' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1 } }}></motion.div>
      </div>
      <div className="flex  md:w-[80%] w-[92%] mx-auto md:h-[400px] md:flex-row flex-col gap-[45px]">
        {/* Left-hand side: Job Titles */}
        <div className="md:w-[30%] w-full md:mb-0 mb-[20px]">
          {exp.map((expItem) => (
            <div
              key={expItem._id}
              className={`eduBtn p-4 pt-5 cursor-pointer pb-5 border-l text-gray-400  ${selectedWorkId === expItem._id ? 'bg-gray-500 bg-opacity-10 border-l-4 text-purple-600 border-purple-600' : 'border-gray-500 '}`}
              onClick={() => handleWorkTitleClick(expItem._id)}
            >
              <span className='text-[20px]'>{expItem.jobTitle}</span>
            </div>
          ))}
        </div>

        {/* Right-hand side: Company Name, Job Location, and Bullet Points */}
        <div className='w-[95%] '>
          {selectedExp && (
            <div className="pl-4 mx-auto  flex flex-col">
              <span className='text-[28px] font-bold'>{selectedExp.jobTitle} <span className='text-purple-600'>@ </span><span className='text-purple-600'>{selectedExp.companyName}</span></span>
              <span className='text-gray-400 text-[18px] mt-2'>{formatDateString(selectedExp.startDate)} - {formatDateString(selectedExp.endDate)}</span>
              <span className='text-gray-400 text-[18px] mt-2'>{selectedExp.companyLocation}</span>
              <span className='text-gray-400 text-[20px] mt-7'>{selectedExp.summary}</span>
              {/* Display the bullet points */}
              <ul className='mt-3'>
                {selectedExp.bulletPoints.map((bulletPoint, index) => (
                  <span key={index} className='mb-4 items-center flex'>
                    <span className='text-[18px] text-purple-600'><BiSolidRightArrow /></span><span className='text-gray-400 ml-2 text-[20px]'>{bulletPoint}</span>
                  </span>
                ))}
                Check Out the Website: 
                {selectedExp.liveDemoLink && (
                  <a href={selectedExp.liveDemoLink} target="_blank" rel="noopener noreferrer" className='mt-4 ml-2 inline-block px-6 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-800'>
                    Live Demo
                  </a>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
