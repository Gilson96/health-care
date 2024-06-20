import { useState, useEffect } from 'react'
import axios from 'axios';
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import Button from '../components/Button'

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false)
  const [successText, setSuccessText] = useState(false)
  const [doctor, setDoctor] = useState()
  const [loading, setLoading] = useState()
  const [chooseSpeciality, setChooseSpeciality] = useState()
  const [doctorId, setDoctorId] = useState()

  const doctorIdHandler = e => {
    setDoctorId(e.target.value)
  }

  useEffect(() => {
    axios.get(`https://health-care-api-dn8l.onrender.com/doctors/`).then(({ data }) => {
      setDoctor(data);
      setLoading(true)
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // built-in feature that helps
    // retrieving the form values
    const formData = new FormData(e.target)
    const appoitmentData = Object.fromEntries(formData.entries()); // {firstName: Gilson}

    console.log(appoitmentData)
    if (submitted) {
      axios.post(`https://health-care-api-dn8l.onrender.com/doctors/${parseInt(doctorId)}/appoitment`, {
        fullName: appoitmentData.fullName,
        dob: appoitmentData.dob,
        email: appoitmentData.email,
        appoitmentDate: appoitmentData.appoitmentDate,

      })
      setSubmitted(false)
      setSuccessText(true)
    }
  }

console.log(parseInt(doctorId))

  return (
    <>
    {successText && <div ></div>}
      <form onSubmit={handleSubmit} className='flex flex-col gap-7 p-10 bg-[#BFEDEF] h-auto'>
      {successText && <div className='flex items-center justify-center w-[70%] h-[30%] bg-green-300 rounded border border-green-500 z-[9999999] absolute top-[50rem]'><p className='text-green-600'>Submitted, make a request to the developer to see API with the appoitments <br/> Reload the page to make this alert disappear</p></div>}
        <p className='text-xl text-[#545C52] mt-5 mb-10 font-bold'>Select your time and data for an Appointment</p>

        <div className='flex flex-col'>
          <label className="font-bold text-[#545C52]">Full Name</label>
          <input
            type="text"
            id="fullName"
            name='fullName'
            required
            minlength="4" maxlength="10"
            className='h-14 w-[90%] rounded shadow border border-[#BBC7CE] p-3'
          />
        </div>

        <div className='flex flex-col'>
          <label className="font-bold text-[#545C52]">Date of birth</label>
          <input
            type="date"
            id="dob"
            name='dob'
            required
            minlength="4" maxlength="10"
            className='h-14 w-[90%] rounded shadow border border-[#BBC7CE] p-3'
          />
        </div>

        <div className='flex flex-col'>
          <label className="font-bold text-[#545C52]">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            required
            className='h-14 w-[90%] rounded shadow border border-[#BBC7CE] p-3'
          />
        </div>

        <div className='flex flex-col'>
          <label className="font-bold text-[#545C52]">Appointment date</label>
          <input
            type="date"
            id="appoitmentDate"
            name='appoitmentDate'
            required
            className='h-14 w-[90%] rounded shadow border border-[#BBC7CE] p-3'
          />
        </div>

        <h1 className='flex text-xl font-bold text-[#545C52]'>Choose speciality</h1>

        <div className='flex flex-wrap gap-5'>

          <div className='flex items-center mb-4 gap-2'>
            <input type="radio" id="cardiology" name='speciality' onClick={() => { setChooseSpeciality('cardio'); }} className='h-7 w-7' />
            <label>Cardiology</label>
          </div>

          <div className='flex items-center mb-4 gap-2'>
            <input type="radio" id="neurology" name='speciality' onClick={() => { setChooseSpeciality('neuro') }} className='h-7 w-7' />
            <label>Neurology</label>
          </div>

          <div className='flex items-center mb-4 gap-2'>
            <input type="radio" id="gastroenterology" name='speciality' onClick={() => { setChooseSpeciality('gastro') }} className='h-7 w-7' />
            <label>Gastroenterology</label>
          </div>

          <div className='flex items-center mb-4 gap-2'>
            <input type="radio" id="pulmonolgy" name='speciality' onClick={() => { setChooseSpeciality('pulmo') }} className='h-7 w-7' />
            <label>Pulmonolgy</label>
          </div>
        </div>

        {chooseSpeciality === 'cardio' &&
          <div className='flex flex-col my-2 gap-2'>
            <label className="font-bold text-[#545C52]">Select a doctor</label>
            <select id="doctors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 mb-6" value={doctorId} onChange={doctorIdHandler}>
              {!loading ? 'loading' : doctor.filter(doc => doc.id === 1 || doc.id === 2).map(doc => <option value={doc.id}>{doc.firstName} {doc.lastName}</option>)}
            </select>
          </div>
        }

        {chooseSpeciality === 'neuro' &&
          <div className='flex flex-col my-2 gap-2'>
            <label className="font-bold text-[#545C52]">Select a doctor</label>
            <select id="doctors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 mb-6">
              {!loading ? 'loading' : doctor.filter(doc => doc.id === 3 || doc.id === 4).map(doc => <option value="US">{doc.firstName} {doc.lastName}</option>)}
            </select>
          </div>
        }

        {chooseSpeciality === 'gastro' &&
          <div className='flex flex-col my-2 gap-2'>
            <label className="font-bold text-[#545C52]">Select a doctor</label>
            <select id="doctors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 mb-6">
              {!loading ? 'loading' : doctor.filter(doc => doc.id === 5 || doc.id === 6).map(doc => <option value="US">{doc.firstName} {doc.lastName}</option>)}
            </select>
          </div>
        }

        {chooseSpeciality === 'pulmo' &&
          <div className='flex flex-col my-2 gap-2'>
            <label className="font-bold text-[#545C52]">Select a doctor</label>
            <select id="doctors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 mb-6">
              {!loading ? 'loading' : doctor.filter(doc => doc.id === 7 || doc.id === 8).map(doc => <option value="US">{doc.firstName} {doc.lastName}</option>)}
            </select>
          </div>
        }


        <div className='text-white'>
          <button type='submit' className='w-[90%] h-14 items-center cursor-pointer flex border p-2 rounded justify-evenly border-slate-200 bg-[#98E2C6] transition ease-in-out delay-30 hover:text-[#98E2C6] hover:bg-white hover:-translate-y-0.5 hover:scale-5 duration-300 ' onClick={() => { setSubmitted(true) }}>
            <p className='font-bold '>Confirm Appointment</p>
          </button>
        </div>
      </form>
    </>
  )
}

export default Appointment