import React from 'react'
import AboutBtn from './AboutBtn'

const History = () => {
  return (
    <div className='h-[600px] w-full flex justify-around items-center '>
        <div className="image-hover-wrap  scroll-reveal">
  
  <img src="food.png" alt="Sample Image" >
</img>
</div>

<div className='flex flex-col '>
<h1 className='text-red-900 text-4xl font-sans font-bold'>From Our Pot to Your Plate, <br /> Since 1983</h1>
<br />
<h1>
  For over 40 years, Mama Cass hasn’t just served food, we’ve fed memories. <br />
   We began in 1983 with one mission: to bring the taste of home to the public. <br />
    Not fast food. Not fancy food. Just good food, the kind that makes you <br />
    pause between bites and smile.
</h1>
<br />
<AboutBtn/>
</div>
    </div>
  )
}

export default History