import React from 'react'

const Button = ({children, classname}) => {
  return (
    <div className={`flex border p-2 rounded justify-evenly border-slate-200 bg-[#98E2C6] transition ease-in-out delay-30 hover:text-[#98E2C6] hover:bg-white hover:-translate-y-0.5 hover:scale-5 duration-300 ${classname}`}>{children}</div>
  )
}

export default Button