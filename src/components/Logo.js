import React from 'react'

const Logo = ({icon}) => {
    return (
        <div className='flex h-12 w-full m-2'>
            <i className='flex items-center'>{icon}<p className=''>Health Mary Hospital</p></i>
        </div>
    )
}

export default Logo