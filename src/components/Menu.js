import React from 'react'
import Logo from './Logo'
import MenuList from './MenuList'
import { Link } from 'react-router-dom'
import {
  BuildingOfficeIcon,
  UserIcon,
  PowerIcon
} from '@heroicons/react/24/outline'

const Menu = () => {
  return (
    <div className='flex items-center w-full h-24 border border-slate-200 shadow'>

      <div className='flex w-full items-center mx-5'>
        <BuildingOfficeIcon className='h-12 w-12 text-[#98E2C6]' />
        <Link to="/"><p className='font-bold text-[#545C52]'>Health Hospital</p></Link>
      </div>
      
      <MenuList />

      <div className='flex w-full justify-end mx-5 gap-3'>
        <UserIcon className='h-6 w-6 text-[#98E2C6]' />
        <PowerIcon className='h-6 w-6 text-[#98E2C6]' />
      </div>
    </div>
  )
}

export default Menu