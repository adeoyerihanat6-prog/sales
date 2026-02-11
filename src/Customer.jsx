import React from 'react'

const Customer = () => {
  return (
    <div className='h-[500px] w-full mb-[600px]'>
        <div className='h-[600px] w-full  items-center flex'>
<div className='flex flex-col h-[200px] w-[50%] justify-around items-center'>
<h1 className='text-3xl text-red-900 font-bold'>Customer Stories</h1>

<h1>Don’t just take our word for it, see what others <br />
 have to say about their experience with us.</h1>
</div>
    </div>

        <div className='h-[400px] w-full flex  justify-center items-center relative'>
          <div className='h-[400px] w-[900px] bg-red-500 relative rounded-3xl'></div>
          <div className='h-[500px] w-[1200px] bg-red-900 absolute bottom-9 rounded-3xl'></div>
          <div className='h-[500px] w-[500px]  absolute bottom-60 right-40 rounded-3xl'>
            <img src="woman.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Customer