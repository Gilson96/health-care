import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import Button from './Button'

const HomeList = ({ textOne, textTwo, img }) => {
    return (
        <div id='homeHeroImage' className={`bg-[url('${img}')] h-full bg-no-repeat bg-center bg-cover relative flex justify-center items-center`}>
            <div className="flex flex-col items-center justify-evenly h-48 w-[40%] p-3 border border-slate-200 shadow rounded text-white bg-white">
                <p className='w-[90%] text-center text-base uppercase font-bold text-[#545C52]'>{textOne}</p>
                <hr className='bg-[#98E2C6] w-[80%] my-1' />
                <p className='w-[90%] italic text-center text-[#545C52]'>{textTwo}</p>
                <Button>
                    <p className='font-bold '>Make an appointment</p>
                    <PlusCircleIcon className='h-7 w-7 hover:text-[#98E2C6]' />
                </Button>
            </div>
        </div>
    )
}

export default HomeList