import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom'
import Menu from './components/Menu'
import MenuSmallScreen from './components/MenuSmallScreen';
import Home from './screens/Home'
import Services from './screens/Services'
import Doctors from './screens/Doctors'
import Appointment from './screens/Appointment'
import About from './screens/About'
import Footer from './components/Footer'
import useScreenSize from './components/useScreenSize';
import axios from 'axios'
import 'animate.css';
import { useEffect, useState } from 'react'
import {
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline'
import { ReactTyped } from "react-typed";

function App() {
  const [doctor, setDoctor] = useState()
  const [loading, setLoading] = useState(false)
  const screenSize = useScreenSize();

  useEffect(() => {
    axios.get("https://health-care-api-dn8l.onrender.com/doctors").then(({ data }) => {
      setDoctor(data);
      setLoading(true)
    })
  }, []);
  

  return (
    <div className='w-full'>
      {!loading ?
          <div className='flex w-full h-screen justify-center items-center mx-5'>
            <BuildingOfficeIcon className='h-12 w-12 text-[#98E2C6]' />
            <p className='font-bold text-[#545C52]'>Health Hospital{""}
            <ReactTyped strings={["..."]} typeSpeed={100} loop />

            </p>
          </div>
        
        :
        <div className='flex flex-col'>
          {screenSize.width < 1024 && <MenuSmallScreen />}
          {screenSize.width > 1024 && <Menu />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
      }
</div>
    
  );
}

export default App;
