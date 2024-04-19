import React from 'react';
import Sidebar from './Sidebar';

function Header({ socialHandles }) {
    return (
        <div className='w-full h-[100px] z-50'>
            <Sidebar/>
            <div className='flex md:flex-row flex-col  md:w-[70%] w-[90%] mx-auto md:justify-between md:gap-0 gap-[20px]   pt-6 h-[100%]'>
                <span className='font-bold text-xl tracking-wider ml-auto md:ml-0'>ThePortfolio</span>
                <div className='socials flex gap-[20px] ml-auto'>
                    {/* Map over the social handles data and display only the image URLs */}
                    {socialHandles && socialHandles.map(handle => (
                      <img key={handle._id} src={handle.image.url} alt={handle.platform} className='hover:scale-125 hover:duration-500 md:w-[28px] md:h-[28px] w-[22px] h-[22px]'/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
