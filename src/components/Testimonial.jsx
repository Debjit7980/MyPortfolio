import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';



function Testimonial({ reviews }) {
    return (
        <section className='md:px-20  pb-20 px-4 w-[100%] font-custom '>
            <div className='text-[42px] pt-20 pb-20  relative'>
                <span className='font-bold'>Testimonials</span>
                <div className='md:absolute md:top-[50%] md:left-[23%] border-t border-gray-600 md:w-[18%] w-[45%] '></div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                }}
                modules={[Pagination, Autoplay]}
            >
                {
                    reviews.map((review) => {
                        // const { id, name, review, image } = value;
                        // console.log(name.split(' '))
                        return <SwiperSlide key={review._id}>
                            <div className="relative border-2 border-purple-600  w-[95%]  md:h-[250px] h-[400px] p-2 duration-200 cursor-default flex items-center">
                                <div className="absolute w-full top-[15px]  pl-2 pr-2 items-center  ">
                                    <h1 className='text-2xl font-bold'>{review.name}</h1>
                                    <h1  className='text-lg mt-2'>{review.position}</h1>
                                    <p className="text-md mt-4 mr-12 pr-2">
                                        {review.review}
                                    </p>
                                </div>
                                <img
                                    src={review.image.url || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"}
                                    alt="userImage"
                                    className="w-20 h-28 object-cover absolute md:right-0 right-4 -top-[4px]   md:transform translate-x-1/2  md:top-[25%] border border-black "
                                />
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>

    )
}

export default Testimonial
