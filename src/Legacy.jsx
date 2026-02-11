import React from 'react'

const Legacy = () => {
  return (
    <div className='h-[600px] w-full flex flex-col justify-around items-center'>
       <div className='h-[100px] flex justify-center items-center'>
        <h1 className='text-4xl text-red-900'>A Legacy That Feeds Generations</h1>
       </div>
       <div className='h-[500px] flex justify-around items-center'>
         <div className='bg-amber-50 h-[300px] w-[300px] rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal'>
            <div className='h-[100px] w-[300px] flex justify-around items-center'>
              <div className='h-[100px] w-[200px]'></div>
              <div className='h-[100px] w-[100px flex justify-center items-center'>
              <i className="fa-solid fa-bowl-food text-red-600 text-6xl mr-5"></i>
              </div>
            </div>
            <br /><br /><br /><br />
            <div>
              <h1 className='text-4xl font-bold text-red-900 ml-2.5'>40+ Years</h1>
              <h1 className='ml-2.5 text-red-900'>of Nigerian cooking excellence</h1>
            </div>
            
        </div>
         <div className='bg-amber-50 h-[300px] w-[300px] rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal'>
            <div className='h-[100px] w-[300px] flex justify-around items-center'>
              <div className='h-[100px] w-[200px]'></div>
              <div className='h-[100px] w-[100px flex justify-center items-center'>
              <i className="fa-solid fa-house text-red-600 text-6xl mr-5"></i>
              </div>
            </div>
            <br /><br /><br /><br />
            <div>
              <h1 className='text-4xl font-bold text-red-900 ml-2.5'>15+ </h1>
              <h1 className='ml-2.5 text-red-900'>Locations (and still growing)</h1>
            </div>   
        </div>
         <div className='bg-amber-50 h-[300px] w-[300px] rounded-4xl border-pink-200 border-2 shadow-2xl scroll-reveal'>
            <div className='h-[100px] w-[300px] flex justify-around items-center'>
              <div className='h-[100px] w-[200px]'></div>
              <div className='h-[100px] w-[100px flex justify-center items-center'>
              <i className="fa-solid fa-award text-red-600 text-6xl mr-5"></i>
              </div>
            </div>
            <br /><br /><br /><br />
            <div>
              <h1 className='text-4xl font-bold text-red-900 ml-2.5'>2500+ </h1>
              <h1 className='ml-2.5 text-red-900'>Hospitality Professionals trained as <br />caregivers</h1>
            </div>  
        </div>
       </div>
    </div>
  )
}

export default Legacy