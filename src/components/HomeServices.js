import React from 'react'
import { Link } from 'react-router-dom'

// swiper carousel
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

// icons
import cardiology from '../assets/cardiology.svg'
import gastroenterology from '../assets/gastroenterology.svg'
import neurology from '../assets/neurology.svg'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

// UI
import Button from './Button'
import Card from './Card'


const HomeServices = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full bg-[#BFEDEF] p-4 gap-4 w-full'>
            <p className='w-full text-center font-bold text-2xl uppercase text-[#545C52]'>Why choose our health center</p>
            <p className='w-full text-center text-lg italic text-[#545C52]'>Breakthrough in Comprehensive, Flexible Care Delivery Models</p>
            <div className='flex justify-evenly w-full my-3 gap-4 flex-wrap'>
                <Card
                    img={cardiology}
                    cardClassName={'text-white'}
                >
                    <p className='uppercase font-bold text-[#545C52]'>Consult for Cardiology</p>
                    <Link to={'/services'} className='w-[80%]'>
                        <Button classname={'w-[80%]'}>
                            <p className='font-bold '>See more details</p>
                            <PlusCircleIcon className='h-7 w-7  hover:text-[#98E2C6]' />
                        </Button>
                    </Link>
                </Card>

                <Card
                    img={neurology}
                    cardClassName={'text-white'}
                >
                    <p className='uppercase font-bold text-[#545C52]'>Consult for Neurology</p>
                    <Link to={'/services'} className='w-[80%]'>
                        <Button classname={'w-[80%]'}>
                            <p className='font-bold '>See more details</p>
                            <PlusCircleIcon className='h-7 w-7  hover:text-[#98E2C6]' />
                        </Button>
                    </Link>
                </Card>

                <Card
                    img={gastroenterology}
                    cardClassName={'text-white'}
                >
                    <p className='uppercase font-bold text-[#545C52]'>Consult for gastro</p>
                    <Link to={'/services'} className='w-[80%]'>
                        <Button classname={'w-[80%]'}>
                            <p className='font-bold '>See more details</p>
                            <PlusCircleIcon className='h-7 w-7  hover:text-[#98E2C6]' />
                        </Button>
                    </Link>
                </Card>

            </div>
            <Link to={'/services'} id='servicesLink' className='w-full text-right no-underline text-[#545C52]'><p className='text-sm uppercase hover:text-[#C4B7CB]'>see all services</p></Link>
        </div>
    )
}

export default HomeServices