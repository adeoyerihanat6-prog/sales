import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Meal = () => {
  return (
    <div className='h-[500px] w-full flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold text-center'>We Do Not Just Serve <br />
         Meals, We Serve Comfort.</h1>
<br />
         <h1>Whether you’re dining in or picking up lunch, Mama Cass brings <br />
          you the taste of home — simple, comforting, and familiar.</h1>
<br />

 <Link to ="/Order">
 <button className="relative overflow-hidden px-6 py-3 rounded-4xl bg-red-600 text-white font-semibold group
      transition-colors duration-300 hover:bg-red-900 h-[70px] w-[280px] cursor-pointer">
        
        
        <span className="absolute inset-1 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
          Order Now
        </span> 

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
          Order Now
        </span>
      </button>
 </Link>
    </div>
  )
}

export default Meal