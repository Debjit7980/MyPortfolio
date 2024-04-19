import React, { useState } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function Timeline({ edu, exp }) {
  // State to track the currently selected job ID
  const [selectedJobId, setSelectedJobId] = useState("65b3e93feb20546ae6d46369");
  const [selectedWorkId, setSelectedWorkId] = useState("65f1fd9e0556c3f887e9d9d8");

  // Function to handle clicks on job titles
  const handleJobTitleClick = (jobId) => {
    setSelectedJobId(jobId);
  };

  const handleWorkTitleClick = (workId) => {
    setSelectedWorkId(workId);
  };

  // Sort the edu array by sequence value
  const sortedEdu = [...edu].sort((a, b) => a.sequence - b.sequence);
  const sortedExp=  [...exp].sort((a,b)=>a.sequence - b.sequence);

  // Find the selected job based on the selected job ID
  const selectedJob = sortedEdu.find((job) => job._id === selectedJobId);
  const selectedExp=sortedExp.find((work) => work._id === selectedWorkId);


  const formatDateString = (dateString) => {
    return formatDate(dateString);
  };

  console.log(exp)
  return (
    <div className="faded pt-[120px] md:pb-[200px] pb-[90px] w-full flex flex-col">
      <div className='text-[42px] pt-20 md:pb-20 pb-14  relative'>
        <span className='md:ml-[15%] font-bold ml-[4%] '>Education</span>
        <div className='md:absolute md:top-[50%] md:left-[28%] ml-[4%] md:ml-0 border-t border-gray-600 w-[30%] '></div>
      </div>
      <div className="flex  md:w-[70%] w-[90%] mx-auto md:h-[600px]  md:flex-row flex-col gap-[30px]">
        {/* Left-hand side: Job Titles */}
        <div className="md:w-[30%] w-full md:mb-0 mb-[20px]">
          {sortedEdu.map((eduItem) => (
            <div
              key={eduItem._id}
              className={`eduBtn p-4 pt-5 cursor-pointer pb-5 border-l text-gray-400  ${selectedJobId === eduItem._id ? 'bg-gray-500 bg-opacity-10 border-l-4 text-purple-600 border-purple-600' : 'border-gray-500 '}`}
              onClick={() => handleJobTitleClick(eduItem._id)}
            >
              <span className='text-[20px]'>{eduItem.jobTitle}</span>
            </div>
          ))}
        </div>

        {/* Right-hand side: Company Name, Job Location, and Bullet Points */}
        <div className='w-[95%] '>
          {selectedJob && (
            <div className="pl-4 mx-auto  flex flex-col">
              <span className='text-[28px] font-bold'>{selectedJob.jobTitle} <span className='text-purple-600'>@ </span><span className='text-purple-600'>{selectedJob.company_name}</span></span>
              <span className='text-gray-400 text-[18px] mt-2'>{formatDateString(selectedJob.startDate)} - {formatDateString(selectedJob.endDate)}</span>
              <span className='text-gray-400 text-[18px] mt-2'>{selectedJob.jobLocation}</span>
              <span className='text-gray-400 text-[20px] mt-7'>{selectedJob.summary}</span>
              {/* Display the bullet points */}
              <ul className='mt-3'>
                {selectedJob.bulletPoints.map((bulletPoint, index) => (
                  <span key={index} className='mb-4 items-center flex'>
                    <span className='text-[18px] text-purple-600'><BiSolidRightArrow /></span><span className='text-gray-400 ml-2 text-[20px]'>{bulletPoint}</span>
                  </span>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='text-[42px]  pb-20  md:mt-0 mt-12 relative'>
        <span className='md:ml-[15%] ml-[4%] font-bold'>Experience</span>
        <div className='md:absolute md:top-[25%] md:left-[30%] ml-[4%] md:ml-0 border-t border-gray-600 md:w-[22%] w-[30%] '></div>
      </div>
      <div className="flex  md:w-[70%] w-[90%] mx-auto md:h-[400px] md:flex-row flex-col gap-[30px]">
        {/* Left-hand side: Job Titles */}
        <div className="md:w-[30%] w-full md:mb-0 mb-[20px]">
          {sortedExp.map((expItem) => (
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
              <span className='text-[28px] font-bold'>{selectedExp.jobTitle} <span className='text-purple-600'>@ </span><span className='text-purple-600'>{selectedExp.company_name}</span></span>
              <span className='text-gray-400 text-[18px] mt-2'>{formatDateString(selectedExp.startDate)} - {formatDateString(selectedExp.endDate)}</span>
              <span className='text-gray-400 text-[18px] mt-2'>{selectedExp.jobLocation}</span>
              <span className='text-gray-400 text-[20px] mt-7'>{selectedExp.summary}</span>
              {/* Display the bullet points */}
              <ul className='mt-3'>
                {selectedExp.bulletPoints.map((bulletPoint, index) => (
                  <span key={index} className='mb-4 items-center flex'>
                    <span className='text-[18px] text-purple-600'><BiSolidRightArrow /></span><span className='text-gray-400 ml-2 text-[20px]'>{bulletPoint}</span>
                  </span>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
