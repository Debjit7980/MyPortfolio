import React, { useState } from 'react';

function Projects({ projects }) {
    // Ensure projects data is available and not null
    if (!projects || projects.length === 0) {
        return <div>No projects found.</div>;
    }

    // State to track whether to show additional projects
    const [showAllProjects, setShowAllProjects] = useState(false);
    // State to track which project's details to show
    const [selectedProject, setSelectedProject] = useState(null);

    // Function to toggle showAllProjects state
    const toggleShowProjects = () => {
        setShowAllProjects(!showAllProjects);
    };

    // Function to toggle selectedProject state
    const toggleProjectDetails = (projectId) => {

        setSelectedProject(projectId === selectedProject ? null : projectId);
    };

    // Slice projects based on showAllProjects state
    const displayedProjects = showAllProjects ? projects : projects.slice(0, 8);
    selectedProject?document.body.style.overflow="hidden":document.body.style.overflow="auto";

    return (
        <div className={`faded-3 w-[100%] relative`}>
            <div className='bg-gradient-to-b from-[#111132] to-[#0c0c1d] text-[42px] md:pt-20 pb-20 tracking-[6px] relative'>
                <span className='md:ml-[3%] ml-[4%]'>PROJECTS</span>
                <div className='md:absolute md:top-[50%] md:left-[24%] ml-[4%] md:ml-0 border-t border-gray-600 md:w-[18%] w-[45%] '></div>
            </div>
            <div className="flex md:flex-wrap md:flex-row flex-col  w-[94%] mt-[20px]  justify-between mx-auto">
                {/* Map over the displayed projects and display each project */}
                {displayedProjects.map(project => (
                    <div key={project._id} className="md:w-[30%]  mb-[60px] ">
                        <button onClick={() => toggleProjectDetails(project._id)} className=" projectDiv rounded-2xl p-0 z-0 text-left">
                            <img src={project.image.url} alt={project.title} className=" w-full h-[300px] md:h-[280px] rounded-t-2xl" />
                            <div className='p-3 pb-12 border border-purple-600 rounded-b-2xl'>
                                <h3 className="text-[24px] text-gray-400 font-semibold mt-4">{project.title}</h3>
                                <p className='mt-6'><span className="text-md text-gray-400 flex flex-wrap gap-[20px]"> {project.techStack.map((tech,index)=>(<span className='border border-gray-400 pl-3 pr-3 pt-1 pb-1 rounded-[15px]' key={index}>{tech.trim()}</span>))}</span></p>
                                {/* <button className='buttons border border-purple-600 rounded-xl p-2 text-xl mt-4 ' onClick={() => toggleProjectDetails(project._id)}>Details</button> */}
                            </div>
                        </button>
                        {/* Render project description popup */}
                        {selectedProject === project._id && (
                            <div className="bg-black z-50 border border-violet-600 rounded-lg fixed md:w-[50%] w-[90%] top-[5%] md:top-[3%]  left-[5%] md:left-[25%]">
                                <div className="p-3  rounded-lg relative">
                                    <img src={project.image.url} alt={project.title} className=" w-full h-[200px] md:h-[320px] object-cover  rounded-lg" />
                                    <h2 className="text-[24px]   font-semibold md:mt-4 mt-5">{project.title}</h2>
                                    <p className='mt-4'><span className="text-sm text-gray-400 flex gap-[15px] flex-wrap"> {project.techStack.map((tech,index)=>(<span className='border border-gray-400 pl-3 pr-3 pt-1 pb-1 rounded-[18px]' key={index}>{tech.trim()}</span>))}</span></p>
                                    <p className="text-gray-400 text-sm mt-4">{project.description}</p>
                                    <div className="flex justify-between mt-4">
                                        <a href={project.githuburl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#3f0896] to-[#663399] text-white  text-[20px] text-center px-0  py-2 md:w-[20%] w-[25%] rounded mr-2">GitHub</a>
                                        <a href={project.liveurl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#3f0896] to-[#663399] text-white  text-[20px] text-center py-2 md:w-[20%] w-[25%] rounded">Live</a>
                                    </div>
                                    <button className="bg-gradient-to-r from-[#3f0896] to-[#663399] absolute font-bold text-white text-2xl px-5 py-3 rounded-[50%] -top-[18px] -right-[12px]" onClick={() => toggleProjectDetails(null)}>X</button>
                                </div>
                            </div>
                        )}
                        { selectedProject === project._id &&(
                            <div className="absolute top-0 inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-10 w-[100%] h-[100%]"></div>
                        )}

                    </div>

                ))}

                {/* Show more / show less button */}
                <div className="w-full flex justify-center mt-4">
                    <button onClick={toggleShowProjects} className="buttons text-purple-600 p-4 text-xl rounded-lg border-[2px] border-purple-600">
                        {showAllProjects ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
