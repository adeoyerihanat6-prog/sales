import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link to="/Order">
    <div>
      
      <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-red-600 text-white font-semibold group
      transition-colors duration-300 hover:bg-red-900 h-[50px] w-[140px] cursor-pointer">
        
        
        <span className="absolute inset-1 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
          Order Now
        </span>

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
          Order Now
        </span>
      </button>
      
    </div>
  </Link>
  )
}

export default Button
 