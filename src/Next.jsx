import React from 'react'

const Next = () => {
  return (
    <div className='flex justify-around items-center h-[500px] w-full'>
        <div className='bg-amber-50 h-[300px] w-[300px] rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal'>
            <div className='h-[100px] w-[300px] flex justify-around items-center'>
              <div className='h-[100px] w-[200px]'></div>
              <div className='h-[100px] w-[100px flex justify-center items-center'>
              <i className="fa-solid fa-cart-arrow-down text-red-600 text-6xl mr-5"></i>
              </div>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-white text-red-600 font-semibold group transition-colors duration-300 hover:bg-red-900 hover:text-white h-[60px] w-[150px] cursor-pointer ml-5 scroll-reveal">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-full">
                  Order Online
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 transform translate-y-full group-hover:translate-y-0">
                  Order Online
                </span>
              </button>
            </div>
            
        </div>
        <div className='bg-amber-50 h-[300px] w-[300px] rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal'>
            <div className='h-[100px] w-[300px] flex justify-around items-center'>
              <div className='h-[100px] w-[200px]'></div>
              <div className='h-[100px] w-[100px flex justify-center items-center'>
              <i className="fa-solid fa-location-dot text-red-600 text-6xl mr-5"></i>
              </div>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-white text-red-600 font-semibold group transition-colors duration-300 hover:bg-red-900 hover:text-white h-[60px] w-[150px] cursor-pointer ml-5 scroll-reveal">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-full">
                Find an outlet
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 transform translate-y-full group-hover:translate-y-0">
                 Find an outlet
                </span>
              </button>
            </div>
        </div>
        <div className='bg-amber-50 h-[300px] w-[300px] rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal'>
            <div className='h-[100px] w-[300px] flex justify-around items-center'>
              <div className='h-[100px] w-[200px]'></div>
              <div className='h-[100px] w-[100px flex justify-center items-center'>
              <i className="fa-solid fa-bowl-food text-red-600 text-6xl mr-5"></i>
              </div>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-white text-red-600 font-semibold group transition-colors duration-700 hover:bg-red-900 hover:text-white h-[60px] w-[150px] cursor-pointer ml-5 scroll-reveal">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-full">
                  View Menu
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 transform translate-y-full group-hover:translate-y-0">
                  View Menu
                </span>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Next