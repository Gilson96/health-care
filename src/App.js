import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom'
import Menu from './components/Menu'
import Home from './screens/Home'
import Services from './screens/Services'
import Doctors from './screens/Doctors'
import Appointment from './screens/Appointment'
import About from './screens/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Menu/>
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
