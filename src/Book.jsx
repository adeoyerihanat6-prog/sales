import React from 'react'
import { Link } from 'react-router-dom'
const Book = () => {
  return (
    <div className='h-[1800px] w-full'>
      <div className='flex justify-around items-center h-[900px] w-full'>
          <div className='bg-pink-100 rounded-3xl h-[720px] w-[600px] flex flex-col '>
            <div className='h-[400px] '>
              <img src="Asun Rice.jpg" alt="" className='rounded-3xl' />
            </div>
            <div className='flex p-3.5'>
              <h1 className='text-2xl font-bold text-red-950'>Dine-In Experience</h1>
            </div>
            <div className='flex p-3.5'>
              <h1>Relax and savor real Nigerian meals in a warm, home-like <br />
               setting. From work lunch breaks to weekend hangouts, our <br />
               spaces feel like your favorite aunty’s kitchen, but with better <br />
                air conditioning.</h1>
            </div>
            <div>
              <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-white text-red-600 font-semibold group transition-colors duration-300 hover:bg-red-900 hover:text-white h-[60px] w-[150px] cursor-pointer ml-5 scroll-reveal">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-full">
                Book a Table
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 transform translate-y-full group-hover:translate-y-0">
                 Book a Table
                </span>
              </button>
            </div>
          </div>
          <div className='bg-pink-100 rounded-3xl h-[720px] w-[600px] flex flex-col '>
            <div className='h-[400px] '>
              <img src="ned.png" alt="" className='rounded-3xl' />
            </div>
            <div className='flex p-3.5'>
              <h1 className='text-2xl font-bold text-red-950'>Delivery & Takeout</h1>
            </div>
            <div className='flex p-3.5'>
              <h1>Busy day? Rainy weather? We’ve got you. Your Mama Cass <br />
               favorites are just a few clicks away, delivered fresh to your <br />
                door.</h1>
            </div>
            <div>
              <Link to = "/Order">
              <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-white text-red-600 font-semibold group transition-colors duration-300 hover:bg-red-900 hover:text-white h-[60px] w-[150px] cursor-pointer ml-5 scroll-reveal">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-full">
                Order Now
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 transform translate-y-full group-hover:translate-y-0">
                 Order Now
                </span>
              </button>
              </Link>
            </div>
          </div>
      </div>

      <div className='flex justify-around items-center h-[900px] w-full'>
          <div className='bg-pink-100 rounded-3xl h-[720px] w-[600px] flex flex-col '>
            <div className='h-[400px] '>
              <img src="hand.png" alt="" className='rounded-3xl' />
            </div>
            <div className='flex p-3.5'>
              <h1 className='text-2xl font-bold text-red-950'>Corporate Meal Plans</h1>
            </div>
            <div className='flex p-3.5'>
              <h1>Skip the daily meal stress. We offer curated Nigerian <br />
              meals for individuals, families, and companies. Nourishing, <br />
              delicious, and right on time, every time.</h1>
            </div>
            <div>
              <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-white text-red-600 font-semibold group transition-colors duration-300 hover:bg-red-900 hover:text-white h-[60px] w-[170px] cursor-pointer ml-5 scroll-reveal">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-full">
                Join the Program
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 transform translate-y-full group-hover:translate-y-0">
                 Join the Program
                </span>
              </button>
            </div>
          </div>
          <div className='bg-pink-100 rounded-3xl h-[720px] w-[600px] flex flex-col '>
            <div className='h-[400px] '>
              <img src="event.png" alt="" className='rounded-3xl' />
            </div>
            <div className='flex p-3.5'>
              <h1 className='text-2xl font-bold text-red-950'>Event Catering</h1>
            </div>
            <div className='flex p-3.5'>
              <h1>
                Planning a wedding, party, meeting, or milestone <br />
                 celebration? We’ll bring the taste of home to your event – <br />
                  hot, fresh, and beautifully served.
              </h1>
            </div>
            <div>
              <button className="relative overflow-hidden px-6 py-3 rounded-3xl bg-white text-red-600 font-semibold group transition-colors duration-300 hover:bg-red-900 hover:text-white h-[60px] w-[150px] cursor-pointer ml-5 scroll-reveal">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-full">
                Book Now
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 transform translate-y-full group-hover:translate-y-0">
                 Book Now
                </span>
              </button>
            </div>
          </div>
      </div>
  </div>
  )
}

export default Book