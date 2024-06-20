import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Bars3Icon,

} from '@heroicons/react/24/outline'
import MenuList from './MenuList'

const MenuSmallScreen = () => {
    const [menuToggle, setMenuToggle] = useState()

    return (
        <div className='flex items-center w-full h-24 border border-slate-200 shadow'>
            <div className='flex w-full items-center mx-5'>
                <Bars3Icon className='h-12 w-12 text-[#98E2C6] cursor-pointer hover:text-[#619280]' onClick={() => { setMenuToggle(!menuToggle) }} />
                {menuToggle &&
                    <div className='flex flex-col z-[9999999] bg-white h-auto w-auto p-4 rounded shadow relative -bottom-[8rem] -left-[2rem]'>
                        <MenuList classname={'flex flex-col gap-4'}/>
                    </div>
                }
            </div>

        </div>
    )
}

export default MenuSmallScreen