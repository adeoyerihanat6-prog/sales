import React from 'react'

export const View = () => {
  return (
    <div>
        <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-red-600 text-white font-semibold group
      transition-colors duration-700 hover:bg-red-900 h-[60px] w-[180px] cursor-pointer">
        
        
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
          View Full Menu
        </span>

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
         View Full Menu
        </span>
      </button>
    </div>
  )
}
