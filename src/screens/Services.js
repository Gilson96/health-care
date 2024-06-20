import { useState, useEffect } from 'react'
import axios from 'axios'
import useScreenSize from '../components/useScreenSize'

// icons
import { DocumentTextIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import cardiology from '../assets/cardiology.svg'
import gastroenterology from '../assets/gastroenterology.svg'
import neurology from '../assets/neurology.svg'
import pulmonology from '../assets/pulmonology.svg'

// UI
import Button from '../components/Button'
import Card from '../components/Card'

const Services = () => {
  const [isActive, setIsActive] = useState('')
  const [service, setService] = useState()
  const [loading, setLoading] = useState()
  const screenSize = useScreenSize();

  useEffect(() => {
    axios.get("https://health-care-api-dn8l.onrender.com/doctors").then(({ data }) => {
      setService(data);
      setLoading(true)
    })
  }, []);



  return (
    <div className='bg-[#BFEDEF] h-auto'>
      <div className='flex w-full justify-between p-5 pb-0'>
        <p className='text-2xl ml-5 font-bold text-[#545C52]'>Services</p>
        <button className='mr-7 text-[#545C52] ' onClick={() => setIsActive('')}><ArrowLeftIcon className='h-7 w-7 hover:text-black' /></button>
      </div>
      <div className={`flex flex-wrap justify-center w-full h-full p-4 gap-5 my-3`}>

        {!loading ? 'loading' :
          <>
          {/* cardiology */}
            <div className={`${screenSize.width < 1024? 'flex flex-col gap-5' : 'flex'}`}>
              <Card
                img={cardiology}
                cardClassName={`text-white
                  ${(isActive === 'neuro' && 'hidden') ||
                  (isActive === 'gastro' && 'hidden') ||
                  (isActive === 'pulmo' && 'hidden') ||
                  (isActive === 'cardio' && 'ml-5')
                  }`}
              >
                <p className='uppercase font-bold text-[#545C52]'>Consult for Cardiology</p>
                <Button classname={'w-[80%]'} onClick={() => setIsActive('cardio')}>
                  <p className='font-bold' >See more details</p>
                  <DocumentTextIcon className='h-7 w-7  hover:text-[#98E2C6]' />
                </Button>
              </Card>

              <div className={`flex flex-col mx-3`}>
                {isActive === 'cardio' &&
                  service.filter(data => data.id === 1).map(data =>
                    <div className={`flex flex-col gap-4  text-justify h-96 w-[90%] bg-white  shadow rounded-lg justify-between p-4 ${screenSize.width < 1024? 'h-auto w-[100%]' : 'h-96'}`}>
                       
                      <p className='text-2xl font-bold uppercase'>{data.speciality[0].name}</p>
                      <p className='text-lg leading-10 w-[80%]'>{data.speciality[0].description}</p>
                      <p className='italic h-full'>Consultation fee: <span className='font-bold'>£{data.speciality[0].fee}</span></p>
                  
                    </div>
                  )}
              </div>
            </div>

            {/* neurology */}
            <div className={`${screenSize.width < 1024? 'flex flex-col gap-5' : 'flex'}`}>
              <Card
                img={neurology}
                cardClassName={`text-white
                  ${(isActive === 'cardio' && 'hidden') ||
                  (isActive === 'gastro' && 'hidden') ||
                  (isActive === 'pulmo' && 'hidden') ||
                  (isActive === 'neuro' && 'ml-5')
                  }`}
              >
                <p className='uppercase font-bold text-[#545C52]'>Consult for Neurology</p>
                <Button classname={'w-[80%]'} onClick={() => setIsActive('neuro')}>
                  <p className='font-bold' >See more details</p>
                  <DocumentTextIcon className='h-7 w-7  hover:text-[#98E2C6]' />
                </Button>
              </Card>

              <div className='flex flex-col mx-3'>
                {isActive === 'neuro' &&
                  service.filter(data => data.id === 5).map(data =>
                    <div className={`flex flex-col gap-4  text-justify h-96 w-[90%] bg-white  shadow rounded-lg justify-between p-4 ${screenSize.width < 1024? 'h-auto w-[100%]' : 'h-96'}`}>
                       
                      <p className='text-2xl font-bold uppercase'>{data.speciality[0].name}</p>
                      <p className='text-lg leading-10 w-[80%]'>{data.speciality[0].description}</p>
                      <p className='italic h-full'>Consultation fee: <span className='font-bold'>£{data.speciality[0].fee}</span></p>
                  
                    </div>
                  )}
              </div>
            </div>

            {/* Gastroenterology */}
            <div className={`${screenSize.width < 1024? 'flex flex-col gap-5' : 'flex'}`}>
              <Card
                img={gastroenterology}
                cardClassName={`text-white
                  ${(isActive === 'neuro' && 'hidden') ||
                  (isActive === 'cardio' && 'hidden') ||
                  (isActive === 'pulmo' && 'hidden') ||
                  (isActive === 'gastro' && 'ml-5')
                  }`}
              >
                <p className='uppercase font-bold text-[#545C52]'>Consult for Gastroenterology</p>
                <Button classname={'w-[80%]'} onClick={() => setIsActive('gastro')}>
                  <p className='font-bold' >See more details</p>
                  <DocumentTextIcon className='h-7 w-7  hover:text-[#98E2C6]' />
                </Button>
              </Card>

              <div className='flex flex-col mx-3'>
                {isActive === 'gastro' &&
                  service.filter(data => data.id === 3).map(data =>
                    <div className={`flex flex-col gap-4  text-justify h-96 w-[90%] bg-white  shadow rounded-lg justify-between p-4 ${screenSize.width < 1024? 'h-auto w-[100%]' : 'h-96'}`}>
                       
                      <p className='text-2xl font-bold uppercase'>{data.speciality[0].name}</p>
                      <p className='text-lg leading-10 w-[80%]'>{data.speciality[0].description}</p>
                      <p className='italic h-full'>Consultation fee: <span className='font-bold'>£{data.speciality[0].fee}</span></p>
                  
                    </div>
                  )}
              </div>
            </div>

              
            {/* Pulmonolgy */}
             <div className={`${screenSize.width < 1024? 'flex flex-col gap-5' : 'flex'}`}>
              <Card
                img={pulmonology}
                cardClassName={`text-white
                  ${(isActive === 'neuro' && 'hidden') ||
                  (isActive === 'gastro' && 'hidden') ||
                  (isActive === 'cardio' && 'hidden') ||
                  (isActive === 'pulmo' && 'ml-5')
                  }`}
              >
                <p className='uppercase font-bold text-[#545C52]'>Consult for Pulmonolgy</p>
                <Button classname={'w-[80%]'} onClick={() => setIsActive('pulmo')}>
                  <p className='font-bold' >See more details</p>
                  <DocumentTextIcon className='h-7 w-7  hover:text-[#98E2C6]' />
                </Button>
              </Card>

              <div className='flex flex-col mx-3'>
                {isActive === 'pulmo' &&
                  service.filter(data => data.id === 7).map(data =>
                    <div className={`flex flex-col gap-4  text-justify h-96 w-[90%] bg-white  shadow rounded-lg justify-between p-4 ${screenSize.width < 1024? 'h-auto w-[100%]' : 'h-96'}`}>
                       
                      <p className='text-2xl font-bold uppercase'>{data.speciality[0].name}</p>
                      <p className='text-lg leading-10 w-[80%]'>{data.speciality[0].description}</p>
                      <p className='italic h-full'>Consultation fee: <span className='font-bold'>£{data.speciality[0].fee}</span></p>
                  
                    </div>
                  )}
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Services