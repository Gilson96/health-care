import React from 'react'
import { Link } from 'react-router-dom'
import {
    HomeIcon,
    WrenchScrewdriverIcon,
    BriefcaseIcon,
    ClipboardIcon,
    MapIcon,
} from '@heroicons/react/24/outline'

const MenuList = ({classname}) => {
    return (
        <ul className={classname}>
            
                <li className='flex gap-2 no-underline'>
                    <HomeIcon className='h-5 w-5 text-[#BBC7CE]' />
                   <Link to={'/'} id='menuLink' className='no-underline'> <p className='font-bold text-[#545C52] hover:text-[#98E2C6]'>Home</p></Link>
                </li>
            
            <Link to={'/services'}  id='menuLink'>
                <li className='flex gap-2'>
                    <WrenchScrewdriverIcon className='h-5 w-5 text-[#BBC7CE]' />
                    <p className='font-bold text-[#545C52] hover:text-[#98E2C6]'>Services</p>
                </li>
            </Link>
            <Link to={'/doctors'}  id='menuLink'>
                <li className='flex gap-2'>
                    <BriefcaseIcon className='h-5 w-5 text-[#BBC7CE]' />
                    <p className='font-bold text-[#545C52] hover:text-[#98E2C6]'>Doctors</p>
                </li>
            </Link>
            <Link to={'/appointment'}  id='menuLink'>
                <li className='flex gap-2'>
                    <ClipboardIcon className='h-5 w-5 text-[#BBC7CE]' />
                    <p className='font-bold text-[#545C52] hover:text-[#98E2C6]'>Appointment</p>
                </li>
            </Link>
            <Link to={'/about'}  id='menuLink'>
                <li className='flex gap-2'>
                    <MapIcon className='h-5 w-5 text-[#BBC7CE]' />
                    <p className='font-bold text-[#545C52] hover:text-[#98E2C6]'>About</p>
                </li>
            </Link>
        </ul>
    )
}

export default MenuList