import React from 'react'
import Cart from './Cart'
import { View } from './View'

const Seller = () => {
  return (
    <div className='h-[1300px] w-full flex flex-col justify-around items-center'>
        <div className='h-[100px] w-full flex justify-center items-center'>
            <h1 className='text-4xl text-red-900 font-bold'>Best Seller Combo</h1>
        </div>
        <div className='h-[500px] w-full flex justify-around items-center'>
          <div className='h-[400px] w-[400px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center '>
            <div className='h-[200px] w-full items-center justify-center flex'>
            <img src="Asun Rice.jpg" alt="" className='h-[200px] w-[350px]' />
            </div> 
            <br />
            <div>
              <h1 className='font-bold text-red-900'>NOBLE RICE – extra</h1>
            </div>
            <br />
            <div className='h-[70px] w-[350px] bg-white rounded-3xl flex justify-around items-center '> 
             <div className='w-[90px]'>
               <h1 className='text-red-700'>₦1,250.00</h1>
             </div>
             <div className='w-[150px]'>
              <Cart/>
             </div>
            </div>
          </div>
          <div className='h-[400px] w-[400px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center '>
            <div className='h-[200px] w-full items-center justify-center flex'>
            <img src="Asun Rice.jpg" alt="" className='h-[200px] w-[350px]' />
            </div> 
            <br />
            <div>
              <h1 className='font-bold text-red-900'>NOBLE RICE</h1>
            </div>
            <br />
            <div className='h-[70px] w-[350px] bg-white rounded-3xl flex justify-around items-center '> 
             <div className='w-[90px]'>
               <h1 className='text-red-700'>₦2,500.00</h1>
             </div>
             <div className='w-[150px]'>
              <Cart/>
             </div>
            </div>
          </div>

          <div className='h-[400px] w-[400px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center '>
            <div className='h-[200px] w-full items-center justify-center flex'>
            <img src="water.jpg" alt="" className='h-[200px] w-[350px]' />
            </div> 
            <br />
            <div>
              <h1 className='font-bold text-red-900'>WATER MEDIUM SIZE EVA</h1>
            </div>
            <br />
            <div className='h-[70px] w-[350px] bg-white rounded-3xl flex justify-around items-center '> 
             <div className='w-[90px]'>
               <h1 className='text-red-700'>₦500.00</h1>
             </div>
             <div className='w-[150px]'>
              <Cart/>
             </div>
            </div>
          </div>
        </div>
          

         <div className='h-[500px] w-full flex justify-around items-center'>
          <div className='h-[400px] w-[400px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center '>
           <div className='h-[200px] w-full items-center justify-center flex'>
            <img src="spag.jpg" alt="" className='h-[200px] w-[350px]' />
            </div>
            <br />
            <div>
              <h1 className='font-bold text-red-900'>SUYA SPAGHETTI</h1>
            </div>
            <br />
             <div className='h-[70px] w-[350px] bg-white rounded-3xl flex justify-around items-center '> 
             <div className='w-[90px]'>
               <h1 className='text-red-700'>₦3,500.00</h1>
             </div>
             <div className='w-[150px]'>
              <Cart/>
             </div>
            </div>
          </div>

          <div className='h-[400px] w-[400px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center '>
           <div className='h-[200px] w-full items-center justify-center flex'>
            <img src="moi moi.jpg" alt="" className='h-[200px] w-[350px]' />
            </div>
            <br />
            <div>
              <h1 className='font-bold text-red-900'>MOI MOI</h1>
            </div>
            <br />
             <div className='h-[70px] w-[350px] bg-white rounded-3xl flex justify-around items-center '> 
             <div className='w-[90px]'>
               <h1 className='text-red-700'>₦1,000.00</h1>
             </div>
             <div className='w-[150px]'>
              <Cart/>
             </div>
            </div>
          </div>
         
         <div className='h-[400px] w-[400px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center '>
           <div className='h-[200px] w-full items-center justify-center flex'>
            <img src="Asun Rice.jpg" alt="" className='h-[200px] w-[350px]' />
            </div>
            <br />
            <div>
              <h1 className='font-bold text-red-900'>ASUN RICE</h1>
            </div>
            <br />
             <div className='h-[70px] w-[350px] bg-white rounded-3xl flex justify-around items-center '> 
             <div className='w-[90px]'>
               <h1 className='text-red-700'>₦4,000.00</h1>
             </div>
             <div className='w-[150px]'>
              <Cart/>
             </div>
            </div>
          </div>
        </div>

        <div className='h-[100px] w-full flex justify-center items-center'>          
        <View/>
        </div>
    </div>
  )
}

export default Seller