import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ img, imgClassName, link, children, cardClassName }) => {
    return (
        <Link to={link} id='cardLink'>
            <div className={`flex flex-col h-96 w-72 border rounded-lg border-slate-300 shadow bg-white ${cardClassName}`}>
                <div className={`bg-[url('${img}')]  h-1/2 bg-no-repeat bg-center bg-contain ${imgClassName}`}></div>
                <div className='flex flex-col justify-evenly h-1/2 w-full items-center'>
                    {children}
                </div>
            </div>
        </Link>
    )
}

export default Card