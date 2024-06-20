import { useState, useEffect } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Button from '../components/Button'
import Card from '../components/Card'
import cardiology from '../assets/cardiology.svg'

const Doctors = () => {
  const [doctor, setDoctor] = useState()
  const [doctorAppoitment, setDoctorAppoitment] = useState()
  const [loading, setLoading] = useState()
  const [isActive, setIsActive] = useState(false)
  const [AppoitmentToggle, setAppoitmentToggle] = useState(false)

  useEffect(() => {
    axios.get("https://health-care-api-dn8l.onrender.com/doctors").then(({ data }) => {
      setDoctor(data);
      setLoading(true)
    })
  }, []);

  useEffect(() => {
    axios.get(`https://health-care-api-dn8l.onrender.com/doctors/${1}/appoitment`).then(({ data }) => {
      setDoctorAppoitment(data);
      setLoading(true)
    })
  }, []);

  console.log(doctorAppoitment)

  return (
    <div className='bg-[#BFEDEF]'>
      <div className='flex w-full justify-between p-5 pb-0'>
        <p className='text-2xl ml-5 font-bold text-[#545C52]'>Doctors</p>
      </div>
      <div className='flex p-4'>
        <Swiper navigation={true} modules={[Navigation]} className="h-[30rem] w-full ">
          <div className='flex items-center justify-center h-full'>
            {!loading ? 'loading ' : doctor.map(doc => (
              <SwiperSlide>
                <div className='flex items-center justify-evenly h-full'>
                  <div className='flex flex-col gap-2'>
                    <Card
                      img={doc.avatar}
                      imgClassName={'h-[150rem] bg-cover p-20 m-4 rounded-lg'}
                    />
                   
                  </div>

              
                    <div className='flex flex-col gap-2'>
                      <div className='bg-white shadow rounded-lg h-96 w-[32rem]'>
                        <div className='flex flex-col h-full w-full p-4  justify-evenly'>
                          <p className='font-bold text-3xl text-[#545C52]'>{doc.firstName} {doc.lastName}</p>
                          <p className='text-lg text-[#545C52]'>Specialist in {doc.speciality[0].name}</p>
                          <p className="italic text-[#545C52]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>
                          <div className='flex gap-2'>
                            <EnvelopeIcon className='h-7 w-7 text-[#98E2C6]' />
                            <p className='text-lg text-[#545C52]'>{doc.email} </p>
                          </div>
                          <div className='flex gap-2'>
                            <PhoneIcon className='h-7 w-7 text-[#98E2C6]' />
                            <p className='text-lg text-[#545C52]'>+44 {doc.phone} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>


      </div>

    </div>
  )
}

export default Doctors