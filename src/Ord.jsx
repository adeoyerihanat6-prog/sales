import React from 'react'
import Seller from './Seller'
import Foo from './Foo'
const Ord = () => {
  return (
       <div className='flex flex-col justify-around items-center w-full h-[500px] '>

      <div className='steak w-[90%] h-[450px]  flex justify-center items-center  z-0 overflow-hidden rounded-4xl flex-col  font-bold'>
        <h1 className='text-5xl font-stretch-75% text-white'>Order Now</h1> <br />
        <h1 className='text-white'>Your favorite Nigerian meals, now just a few clicks away.</h1>
        <h1 className='text-white'>Browse, customize, and enjoy — hot, fresh, and home-style</h1>
<br />
        <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-white text-red-600 font-semibold group
      transition-colors duration-700 hover:bg-red-900 text-white h-[60px] w-[320px] cursor-pointer">
        
        
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full text-red-600">
          Order Now
        </span>

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
          Order Now
        </span>
      </button>
      </div>
        
    </div>
  )
}

export default Ord