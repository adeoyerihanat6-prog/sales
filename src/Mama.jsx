import React from 'react'
import Button from './Button'

const Mama = () => {
  return (
    <div className='h-[1400px] w-full flex flex-col justify-around items-center'>
        <div>
        <h1 className='text-4xl text-red-900 font-bold scroll-reveal text-center' >Find a Mama Cass Near You</h1>
        <br />
        <h1 className='text-center'>From street corners to city centers, feeding families, fueling workdays, and celebrating everyday wins.</h1>
        </div>

         <div className="image-hover scroll-reveal ">

  <img src="rest.jpeg" alt="Sample Image">
</img>
</div>

<div className='w-[1100] h-[100px] flex justify-between items-center gap-[510px]'>
    <div className='flex justify-between flex-col '>
        <h1>Victoria Island Branch</h1>
        <h1>Address: 271 Ajose Adeogun Street, Victoria Island, Lagos</h1>
    </div>
    <div>
        <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-red-600 text-white font-semibold group
      transition-colors duration-700 hover:bg-red-900 h-[50px] w-[140px] cursor-pointer">
        
        
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
          Visit 
        </span>

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
          Visit 
        </span>
      </button>
    </div>
</div>

<div className='w-[1100] h-[100px] flex justify-around items-center gap-6'>
<div className='rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal h-[150px] w-[500px] flex  justify-center items-center'>
  <div className='flex w-[250px] h-[150px] flex-col justify-center items-center'>
    <h1><span className='text-red-900 font-bold'>Abuja Branch</span> <br />
    Address: KM 12, Abuja–Keffi <br /> 
    Expressway, Maraba
    </h1>
  </div>
  <div className='flex justify-center items-center h-[150px] w-[250px]'>
     <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-red-600 text-white font-semibold group
      transition-colors duration-700 hover:bg-red-900 h-[50px] w-[140px] cursor-pointer">
        
        
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
          Visit 
        </span>

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
          Visit 
        </span>
      </button>
  </div>
</div>
<div className='rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal h-[150px] w-[500px] flex  justify-center items-center'>
  <div className='flex w-[300px] h-[150px] flex-col justify-center items-center'>
    <h1><span className='text-red-900 font-bold'>Ikeja Branch</span> <br />
    Address: 5, Allen Avenue, Ikeja, Lagos
    </h1>
  </div>
  <div className='flex justify-center items-center h-[150px] w-[200px]'>
     <button className='h-[50px] w-[150px] bg-red-400 rounded-3xl text-white'>
      Coming Soon
      </button>
  </div>
</div>
</div>

<div className='w-[1100] h-[100px] flex justify-around items-center gap-6'>
  <div className='rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal h-[150px] w-[500px] flex  justify-center items-center'>
  <div className='flex w-[300px] h-[150px] flex-col justify-center items-center'>
    <h1><span className='text-red-900 font-bold'>Oko-Oba Branch</span> <br />
   Address: 1–5 Dayo Adeniyi Street, New <br /> Oko-Oba Road, Lagos
    </h1>
  </div>
  <div className='flex justify-center items-center h-[150px] w-[200px]'>
     <button className='h-[50px] w-[150px] bg-red-400 rounded-3xl text-white'>
      Coming Soon
      </button>
  </div>
</div>

<div className='scroll-reveal h-[150px] w-[500px]'></div>

</div>
    </div>
  )
}

export default Mama