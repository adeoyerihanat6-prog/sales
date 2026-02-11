import React from 'react'
import { Link } from 'react-router-dom'
const Fav = () => {
  return (
    <div className='h-[700px] w-full flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold text-center">Your Favorites, Hot, Fresh, <br />
         and Just a Click Away</h1><br />
         <h1>Questions? Orders? Feedback? Let’s talk. Whether it’s a quick <br />
          hello or a detailed request, we’re here to help — with care.</h1>
          <br />
          <Link to ="/Order">
<button className="relative overflow-hidden px-6 py-3 rounded-4xl bg-red-600 text-white font-semibold group
      transition-colors duration-300 hover:bg-red-900 h-[70px] w-[230px] cursor-pointer">
        
        
        <span className="absolute inset-1 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
         Contact Us
        </span>

       
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
         Contact Us
        </span>
      </button>
</Link>

<div className='h-[200px] justify-around items-center flex w-full'>
 <div className='flex justify-around gap-4'>
                <div className='flex justify-around gap-4'>
                <div>
            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram text-2xl"></i></a><br />
            </div>
            <div>07041000770</div>
            </div>
            </div>

            <div className='flex justify-around gap-4'>
                <div className='flex justify-around gap-4'>
                <div>
            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram text-2xl"></i></a><br />
            </div>
            <div>08074490009</div>
            </div>
            </div>

            <div className='flex justify-around gap-4'>
                <div className='flex justify-around gap-4'>
                <div>
            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram text-2xl"></i></a><br />
            </div>
            <div>
                info@mamacassng.com</div>
            </div>
            </div>
</div>
    </div>
  )
}

export default Fav