import React from 'react'

const Button = ({label, icon}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-1 border bg-coral-red rounded-full border-coral-red text-white font-medium'>
        {label}
        <img src={icon} alt="arrow-right-icon" className='ml-2 rounded-full w-5 h-5' />
    </button>
  )
}

export default Button