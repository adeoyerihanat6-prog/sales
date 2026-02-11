import React from 'react'
import { Link } from 'react-router-dom'

const Go = () => {
  return (
    <div className='h-[450px] w-full flex justify-around items-center'>
        <div className='bg-black h-[300px] w-[95%] flex justify-between items-center rounded-3xl p-10'>
            <div className='flex flex-col'>
            <h1 className="text-white text-4xl font-bold">On the go?</h1>
            <h1 className="text-white text-4xl font-bold">Order from your phone!</h1>
            </div>
            <Link to ="/Order">
        <button className="relative overflow-hidden px-6 py-3 rounded-4xl bg-red-600 text-white font-semibold group
        transition-colors duration-300 hover:bg-red-900 h-[70px] w-[200px] cursor-pointer">
        
        
        <span className="absolute inset-1 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
         Order Via WhatsApp
        </span>

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
         Order Via WhatsApp
        </span>
      </button>
</Link>
        </div>
    </div>
  )
}

export default Go