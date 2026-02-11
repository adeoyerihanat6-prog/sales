import React from 'react'
import { Link } from 'react-router-dom'
const Question = () => {
  return (
    <div className='h-[770px] w-full flex bg-pink-100 justify-between p-40 items-center'>
<div className='text-4xl font-bold'>Got a question or <br />
 feedback? We’re just a <br />
  message away.</div>
<div >
    <form className='h-[500px] w-[500px] bg-white '>
     <input type="text" name='name' className='border-2 rounded-2xl p-6 mt-5 ml-2 h-[50px] w-[450px] border-gray-400' placeholder='Name'/>
     <input type="text" name='phone' className='border-2 rounded-2xl p-6 mt-5 ml-2 h-[50px] w-[450px] border-gray-400' placeholder='Phone'/>
     <input type="text" name='email' className='border-2 rounded-2xl p-6 mt-5 ml-2 h-[50px] w-[450px] border-gray-400' placeholder='Email'/>
     <textarea name="" id="" className='border-2 rounded-2xl p-6 mt-5 ml-2 h-[150px] w-[450px] border-gray-400' placeholder='Your Message'></textarea>
<br /> <br />
<div className='h-[70px] flex justify-around items-center'>
<Link to ="/Order">
<button className="relative overflow-hidden px-6 py-3 rounded-4xl bg-red-600 text-white font-semibold group
      transition-colors duration-300 hover:bg-red-900 h-[70px] w-[400px] cursor-pointer">
        
        
        <span className="absolute inset-1 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
        Send Your Message
        </span>

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
        Send Your Message
        </span>
      </button>
</Link>
</div>
    </form>

    
</div>


    </div>
  )
}

export default Question