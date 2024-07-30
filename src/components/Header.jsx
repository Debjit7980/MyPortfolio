import React from 'react';
import Sidebar from './Sidebar';

function Header() {
    //console.log(JSON.stringify(socialHandles));
    const socialHandles=[{
        "_id":"1",
        "platform":"GitHub",
        "image":"https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg",
        "url":"https://github.com/Debjit7980/"
    },
    {
        "_id":"2",
        "platform":"LinkedIn",
        "url":"www.linkedin.com/in/debjit-singha-roy-8a0843212",
        "image":"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp"
    },  {
        "_id":"3",
        "platform":"facebook",
        "url":"https://www.facebook.com/profile.php?id=100015638253372",
        "image":"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp"
    },  {
        "_id":"4",
        "platform":"Instagram",
        "url":"https://www.instagram.com/singharoynil/",
        "image":"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp"
    },
]
    return (
        <div className='w-full h-[100px] z-50'>
            <Sidebar className='fixed'/>
            <div className='flex md:flex-row flex-col  md:w-[70%] w-[90%] mx-auto md:justify-between md:gap-0 gap-[20px]   pt-6 h-[100%]'>
                <span className='font-bold text-xl tracking-wider ml-auto md:ml-0'>ThePortfolio</span>
                <div className='socials flex gap-[20px] ml-auto'>
                    {/* Map over the social handles data and display only the image URLs */}
                    {socialHandles && socialHandles.map(handle => (
                      <a href={handle.url} target='_blank'><img key={handle._id} src={handle.image} alt={handle.platform} className='rounded-[50%] hover:scale-125 hover:duration-500 cursor-pointer md:w-[28px] md:h-[28px] w-[24px] h-[24px]'/></a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
