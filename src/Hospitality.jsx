import React from 'react'
import { Link } from 'react-router-dom'

const Hospitality = () => {
  return (
    <div className=" h-[500px] w-full flex justify-center items-center mt-32">
      <div className=" bg-[url('/chef.png')] bg-cover bg-center w-[95%] h-[530px] rounded-3xl flex flex-col justify-center items-center relative z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

          <h1 className="text-white text-4xl font-bold">More Than a Job, It’s Hospitality</h1>
          <br />
          <h1 className="text-white text-center">Behind every plate is a person who cares.  Our team from chefs to servers are <br />
           trained not just in food, but in hospitality. They’re the soul of Mama Cass, <br />
            and they bring warmth to every meal we serve.

</h1> <br />

<Link to ="/Order">
<button className="relative overflow-hidden px-6 py-3 rounded-4xl bg-red-600 text-white font-semibold group
transition-colors duration-300 hover:bg-red-900 h-[70px] w-[200px] cursor-pointer">
        
        
<span className="absolute inset-1 flex items-center justify-center transition-transform duration-700
group-hover:-translate-y-full">
Join our Team
</span>

       
<span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
transform translate-y-full group-hover:translate-y-0">
Join our Team
</span>
      </button>
</Link>
     
      </div>
      
       
      
    </div>
  )
}

export default Hospitality