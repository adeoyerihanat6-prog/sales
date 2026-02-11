import React from 'react'
import { Link } from 'react-router-dom'
const Nos = () => {
  return (
    <div className='h-[600px] w-full justify-center items-center flex flex-col'>
       <div className='flex justify-around text-center h-[200px] w-full '>
        <img src="green.png" alt="" className='h-[250px] w-[250px] '/>
        <di className='flex flex-col'>
            <div>
        <h1 className=' text-5xl font-bold text-center'>Every Meal Brings Good <br /> Home Nostalgia</h1>
            </div><br />
            <div>
                <h1>Since 1983, Mama Cass has been about more than food it’s about <br /> bold Nigerian flavors, tradition, and soulful nourishment.
</h1>
            </div>
        </di>
         <img src="onion.png" alt=""  className='h-[300px] w-[300px] '/>
       </div>
        <br /><br />
       <div className='flex justify-center text-center h-[200px] w-[50%] '>
        <img src="pepper.png" alt="" className='h-[200px]'/>
        <div className='flex justify-center items-center w-full flex-col'>
            <div className='mr-20'>
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
        </div>
         <img src="rice.png" alt=""  className='h-[200px] '/>
       </div>
    </div>
  )
}

export default Nos