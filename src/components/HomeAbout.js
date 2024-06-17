import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = ({background, titleColor}) => {
    return (
        <div className={`flex flex-col items-center justify-center h-full ${background} p-5 mx-2 gap-4 w-full`}>
            <p className={`uppercase font-bold ${titleColor} text-2xl`}>All-in-One Website Health Solution
            </p>
            <p className='text-[#545C52] text-lg italic'>10 Years Of Experience in Medical Services
            </p>
            <p className='text-[#545C52] text-justify leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed faucibus turpis in. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Elementum eu facilisis sed odio morbi quis commodo odio aenean. In dictum non consectetur a. Porta non pulvinar neque laoreet suspendisse interdum. At tellus at urna condimentum mattis pellentesque id. Nulla at volutpat diam ut venenatis. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Lacus sed viverra tellus in hac habitasse platea dictumst. Aenean et tortor at risus viverra adipiscing. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Ut diam quam nulla porttitor massa id neque. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Tincidunt id aliquet risus feugiat in ante metus dictum. Faucibus et molestie ac feugiat sed lectus.
            </p>
            <Link to={'/about'} id='servicesLink' className='w-full text-right no-underline text-[#545C52]'><p className='text-sm uppercase hover:text-[#C4B7CB]'>see more about</p></Link>
        </div>
    )
}

export default HomeAbout