import React from 'react'
import FooterList from './FooterList'
import { Link } from 'react-router-dom'
import {
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon,
    BuildingOffice2Icon
} from '@heroicons/react/24/solid'
import Logo from './Logo'
import useScreenSize from './useScreenSize';

const Footer = () => {
    const screenSize = useScreenSize();

    return (
        <footer className='flex flex-col items-center justify-center h-full bg-white p-4 gap-4 w-full my-4'>
            <div className={`flex flex-wrap w-full h-full ${screenSize.width < 1024? 'justify-normal' : 'justify-evenly'}`}>
                    
                <FooterList>
                <Logo icon={ <BuildingOffice2Icon className='h-12 w-12 text-[#98E2C6]' />}/>
                <hr className='text-[#98E2C6]'/>
                    <Link className='flex gap-2 text-[#545C52]'><MapPinIcon className='h-7 w-7 text-[#98E2C6]'/><p className='hover:text-[#BBC7CE]'>Liverpool, UK</p></Link>
                    <Link className='flex gap-2 text-[#545C52]'><EnvelopeIcon className='h-7 w-7 text-[#98E2C6]'/><p className='hover:text-[#BBC7CE]'>grafael99@gmail.com</p></Link>
                    <Link className='flex gap-2 '><PhoneIcon className='h-7 w-7 text-[#98E2C6]'/><p className='hover:text-[#BBC7CE]'>07886148828</p></Link>
                </FooterList>
                <FooterList title={'Services'}>
                    <Link to={'/doctors'} className='text-[#545C52]'><p className='hover:text-[#BBC7CE]'>Find a Doctor</p></Link>
                    <Link className='text-[#545C52]' to={'/services'}><p className='hover:text-[#BBC7CE]'>All services</p></Link>
                    <Link to={'/appointment'} className='text-[#545C52]'><p className='hover:text-[#BBC7CE]'>Make an Appointment</p></Link>
                    
                </FooterList>
                <FooterList title={'Social Media'}>
                    <Link to={'https://www.linkedin.com/in/gilson-de-almeida-a51ba1194/'} className='flex items-center gap-2 text-[#545C52]'><i className='fa-brands fa-linkedin text-4xl text-[#98E2C6]'></i><p className='hover:text-[#BBC7CE]'>LinkedIn</p></Link>
                    <Link to={'https://github.com/Gilson96'} className='flex items-center gap-2 text-[#545C52]'><i className="fa-brands fa-square-github text-4xl text-[#98E2C6]"></i><p className='hover:text-[#BBC7CE]'>Github</p></Link>
                </FooterList>

                
            </div>
            <hr className='w-[80%]'/>
            <p className='w-full text-center'>Developed by Gilson de Almeida Copyright ©2024.</p>
        </footer>
    )
}

export default Footer