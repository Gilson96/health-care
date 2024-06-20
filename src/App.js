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

function App() {
  const screenSize = useScreenSize();

  return (
    <div className="App">
      {screenSize.width < 1024 && <MenuSmallScreen/>}
      {screenSize.width > 1024 && <Menu/>} 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
