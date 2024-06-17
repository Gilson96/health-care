import React from 'react'
import { Link } from 'react-router-dom'

const FooterList = ({children, title}) => {
  return (
    <div className='flex flex-col p-2 gap-2'>
        <p className='font-bold text-[#98E2C6] text-xl'>{title}</p>
        <hr className='bg-[#98E2C6]'/>
        <ul className='flex flex-col'>
            <li className='flex flex-col gap-4 py-2 font-bold'>{children}</li>
        </ul>
    </div>
  )
}

export default FooterList