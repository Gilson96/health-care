import React from 'react'
import Card from './Card'
import doctor_1 from '../assets/doctor_5.jpg'
import Button from './Button'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

const HomeDoctors = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full bg-[#BFEDEF] p-4 gap-4 w-full'>
            <p>Meet Our expert team</p>
            <p>We are committed to endure you the best service</p>
            <div className='flex justify-evenly w-full my-3 gap-4'>
                <Card
                    img={doctor_1}
                    cardClassName={'text-white'}
                    imgClassName={'rounded-full w-[65%] relative -right-12'}
                >
                    <p className='uppercase font-bold text-[#545C52]'>Specialis in Cardiology</p>
                    <p>Dr.Greg William</p>
                </Card>
                <Card
                    img={doctor_1}
                    cardClassName={'text-white'}
                    imgClassName={'rounded-full w-[65%] relative -right-12'}
                >
                    <p className='uppercase font-bold text-[#545C52]'>Specialis in Cardiology</p>
                    <p>Dr.Greg William</p>
                </Card>
                <Card
                    img={doctor_1}
                    cardClassName={'text-white'}
                    imgClassName={'rounded-full w-[65%] relative -right-12'}
                >
                    <p className='uppercase font-bold text-[#545C52]'>Specialis in Cardiology</p>
                    <p>Dr.Greg William</p>
                </Card>
            </div>
        </div>
    )
}

export default HomeDoctors