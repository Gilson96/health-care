import React from 'react'
import Card from '../components/Card'
import cardiology from '../assets/cardiology.svg'
import gastroenterology from '../assets/gastroenterology.svg'
import neurology from '../assets/neurology.svg'
import Button from '../components/Button'
import { DocumentTextIcon } from '@heroicons/react/24/solid'
const Services = () => {
  return (
    <div className='bg-[#BFEDEF]'>
      <p className='w-full text-center text-4xl py-5'>Services</p>
      <div className='flex flex-wrap justify-evenly w-full h-full p-4 gap-5 my-3'>
        <Card
          img={cardiology}
          cardClassName={'text-white'}
        >
          <p className='uppercase font-bold text-[#545C52]'>Consult for Cardiology</p>
          <Button classname={'w-[80%]'}>
            <p className='font-bold '>See more details</p>
            <DocumentTextIcon className='h-7 w-7  hover:text-[#98E2C6]' />
          </Button>
        </Card>
        <Card
          img={cardiology}
          cardClassName={'text-white'}
        >
          <p className='uppercase font-bold text-[#545C52]'>Consult for Cardiology</p>
          <Button classname={'w-[80%]'}>
            <p className='font-bold '>See more details</p>
            <DocumentTextIcon className='h-7 w-7  hover:text-[#98E2C6]' />
          </Button>
        </Card>
        <Card
          img={cardiology}
          cardClassName={'text-white'}
        >
          <p className='uppercase font-bold text-[#545C52]'>Consult for Cardiology</p>
          <Button classname={'w-[80%]'}>
            <p className='font-bold '>See more details</p>
            <DocumentTextIcon className='h-7 w-7  hover:text-[#98E2C6]' />
          </Button>
        </Card>
        <Card
          img={cardiology}
          cardClassName={'text-white'}
        >
          <p className='uppercase font-bold text-[#545C52]'>Consult for Cardiology</p>
          <Button classname={'w-[80%]'}>
            <p className='font-bold '>See more details</p>
            <DocumentTextIcon className='h-7 w-7  hover:text-[#98E2C6]' />
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default Services