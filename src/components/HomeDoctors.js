import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import axios from 'axios'
import doctor_1 from '../assets/doctor_5.jpg'
import Button from './Button'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

const HomeDoctors = () => {
    const [doctor, setDoctor] = useState()
    const [loading, setLoading] = useState()


    useEffect(() => {
        axios.get("https://health-care-api-dn8l.onrender.com/doctors").then(({ data }) => {
            setDoctor(data);
            setLoading(true)
        })
    }, []);

    console.log(doctor)
    return (
        <div className='flex flex-col items-center justify-center h-full bg-[#BFEDEF] p-4 gap-4 w-full'>
            <p>Meet Our expert team</p>
            <p>We are committed to endure you the best service</p>
            <div className='flex justify-evenly w-full my-3 gap-4 items-center'>
                {!loading ? "loading" : doctor.filter(doc => doc.id <= 3).map(doc => (
                    <Card
                        img={doc.avatar}
                        cardClassName={'text-white'}
                        imgClassName={'rounded-full w-[65%] relative -right-12'}
                    >
                        <p className='uppercase font-bold text-[#545C52]'>Specialist in</p>
                        <p className='uppercase font-bold text-[#545C52]'>{doc.speciality[0].name}</p>
                        <p className='uppercase font-bold text-[#545C52]'>{doc.firstName} {doc.lastName}</p>
                    </Card>
                ))}
            </div>
            <Link to={'/doctors'} id='servicesLink' className='w-full text-right no-underline text-[#545C52]'><p className='text-sm uppercase hover:text-[#C4B7CB]'>see all doctors</p></Link>
        </div>
    )
}

export default HomeDoctors