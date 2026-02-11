import React from 'react'
import Button from './Button'


const Food = () => {
  return (
    <div className='flex justify-around items-center w-full h-[500px] '>
       
      <div className='food w-[90%] h-[450px]  flex justify-around items-center relative z-0 overflow-hidden rounded-2xl'>
       
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

         <div className='in'>
            <h1 className='text-4xl text-white font-bold scroll-reveal'>The Home for <br /> Food lovers</h1>
            <br />
              <p className='text-white font-bold scroll-left'>From Ofada to Jollof, pasta to pounded yam enjoy <br />
             authentic African and international meals served <br />
              with heart, in spaces that feel like home.</p>
              <br /><br />
             <div className=''>
         <Button/>
         </div> 
         </div>
          
         <div className='70%'>
         
         </div>

      </div>
    </div>
  )
}

export default Food