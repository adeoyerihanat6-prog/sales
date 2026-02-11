import React from 'react'
import { Link } from 'react-router-dom'
const Last = () => {
  return (
    <div>
        <div className='h-[700px] w-full bg-red-900  flex justify-around items-center'>
        <div className=' w-[30%] h-[400px] flex flex-col  text-white'>
            <img src="Logo.svg" alt="" className='h-[100px] w-[200px]'/> <br />
            <h1>Head Office – Ikeja</h1><br />
            <h1>4A, Oyeleke Street, Oregun / Alausa,Ikeja, Lagos</h1><br />
            <h1>+2347041000770</h1><br />
            <h1>+2348074490009</h1><br />
          <a href="https://api.whatsapp.com/send/?phone=2347041000770&text&type=phone_number&app_absent=0">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg relative overflow-hidden group h-[40px] w-[120px] cursor-pointer">
                 <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700
        group-hover:-translate-y-full">
          Whatsapp
        </span>
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 
        transform translate-y-full group-hover:translate-y-0">
          Whatsapp
        </span>
            </button>
          </a> <br />
            <h1>info@mamacassng.com</h1><br />
        </div>
        <div className=' h-[400px] flex flex-col  items-center text-white'>
            <h1 className='font-bold text-2xl'>Quick Links</h1><br />
            <Link to="/Career">
            <p>Career</p>
            </Link><br />
            <Link to ="/Home">
            <p>Home</p>
            </Link>
            <br />
           <Link to ="/About">
            <p>About Us</p>
           </Link>
           <br />
           <Link to ="/Service">
            <p>Services</p>
           </Link>
           <br />
            <Link to ="/Order">
             <p>Order Now</p>
            </Link>
           <br />
            <a href="">Location</a><br />
        </div>
        <div className=' h-[400px] flex flex-col items-center text-white'>
            <h1 className='font-bold text-2xl' >CONNECT</h1><br />
            <div className='flex justify-around gap-4'>
                <div>
            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram text-2xl"></i></a><br />
            </div>
            <div>Instagram</div>
            </div>
            <br />
            <div className='flex justify-around gap-4'>
            <div>
           <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook text-white text-2xl "></i></a><br />
            </div>
             <div>Facebook</div>
            </div> <br />
            <div className='flex justify-around gap-4'>
                <div>
           <a href="https://twitter.com/"><i className="fa-brands fa-x-twitter text-2xl"></i></a><br />
           </div>
           <div>(Formerly Twitter)</div>
            </div><br />
            <div className='flex justify-around gap-4'>
<div>
           <a href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok text-2xl"></i></a><br />
</div>
<div>Tiktok</div>
            </div><br />
            </div>
            <div className='h-[400px] flex flex-col items-center text-white'>
            <h1 className='font-bold text-2xl'>OPENING HOURS</h1> <br />
            <h1>Monday - Friday: 9am - 10 <br /> pm</h1> <br />
            <h1>Saturday: 10 AM – 11 Pm <br /> Sunday: 10 AM – 8 PM</h1>
        </div>

        </div>

        
    </div>

   
   
  )
}

export default Last