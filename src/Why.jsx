import React from 'react'

const Why = () => {
  return (
    <div className='h-[500px] flex flex-col justify-around items-center w-full'>
        <div className='h-[100px] flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold '>
                Why Choose Mama Cass?
            </h1>
            <h1>Rooted in Tradition. Ready for Tomorrow.</h1>
        </div>
        <div className='h-[300px] w-full flex justify-around items-center'>
            <div className='h-[100px] w-[400px]  flex gap-5'>
                <div className='h-[150px] w-[150px] bg-pink-100 rounded-full'></div>
                <div className='h-[150px] w-[150px] flex items-center justify-center'><h1 className='text-center'>Traditional African <br />
                favorites and international <br />
                 classics, since 1983 </h1></div>
            </div>
             <div className='h-[100px] w-[400px]  flex gap-5'>
                <div className='h-[150px] w-[150px] bg-pink-100 rounded-full'></div>
                <div className='h-[150px] w-[150px] flex items-center justify-center'><h1 className='text-center'>
                     Friendly caregivers <br /> who serve with heart
                </h1></div>
            </div>
             <div className='h-[100px] w-[400px]  flex gap-5'>
                <div className='h-[150px] w-[150px] bg-pink-100 rounded-full'></div>
                <div className='h-[150px] w-[150px] flex items-center justify-center'><h1 className='text-center'>
                     Easy online ordering <br />
                      & delivery across <br /> major cities 
                </h1></div>
            </div>
        </div>
        <div className='h-[300px] w-full flex justify-center items-center'>
           <div className='h-[100px] w-[400px]  flex gap-5'>
                <div className='h-[150px] w-[150px] bg-pink-100 rounded-full'></div>
                <div className='h-[150px] w-[150px] flex items-center justify-center'><h1 className='text-center'>
                     Perfect for family <br />
                      meals, solo dining,<br />
                       and events
                </h1></div>
            </div>
            <div className='h-[100px] w-[400px]  flex gap-5'>
                <div className='h-[150px] w-[150px] bg-pink-100 rounded-full'></div>
                <div className='h-[150px] w-[150px] flex items-center justify-center'><h1 className='text-center'>
                     Custom orders for <br /> businesses and <br /> organization
                </h1></div>
            </div>
        </div>
    </div>
  )
}

export default Why