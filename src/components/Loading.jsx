import React from 'react'

function Loading() {
  return (
    <div className='w-full relative'>
        <div className='md:relative bg-gradient-to-b from-[#111132] to-[#0c0c1d]'>
            <span className='md:absolute  md:top-[550px]  md:right-10 md:text-[20vh]   font-bold text-gray-400'>LOADING...</span>
        </div>
        
    </div>
  )
}

export default Loading
