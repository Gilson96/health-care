import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import img1 from '../assets/carousel-pic-1.jpg'
import img2 from '../assets/carousel-pic-2.jpg'
import img3 from '../assets/carousel-pic-3.jpg'
import HomeList from '../components/HomeList';

const HomeHeroCarousel = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="h-[30rem] w-full">
            <SwiperSlide>
                <HomeList
                    img={img1}
                    textOne={'You are just one click away from your healthy life'}
                    textTwo={'Probably the most random thing you have ever seen!'}
                />
            </SwiperSlide>
            <SwiperSlide>
                <HomeList
                    img={img2}
                    textOne={'Consult with experts Online 24/7'}
                    textTwo={'Get Online support from oue expert Doctor 24/7 and lead a healthy life'}
                />
            </SwiperSlide>
            <SwiperSlide>
                <HomeList
                    img={img3}
                    textOne={'Check Your Health Condition Regularly'}
                    textTwo={'Up to date with your health condition prevention is always better than cure'}
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeHeroCarousel