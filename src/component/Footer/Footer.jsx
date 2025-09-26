import React from 'react';
import userTiter from "../../assets/fi_5969020.png"
import userInsta from "../../assets/fi_145807.png"
import userFacebook from "../../assets/fi_5968764.png"
import userLeter  from "../../assets/Vector.png"

const Footer = () => {
    return (
            <div className=' bg-black'>

      <div className='max-w-[1200px] mx-auto space-y-4  md:flex justify-around p-[80px] '>

        <div className=' gap-2 md:w-1/4 '>
         <h2 className=' text-white text-2xl mb-6'>CS — Ticket System</h2>
         <p className='text-[#A1A1AA] space-'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
       <div className=' gap-2 '>
         <h2 className=' text-white text-2xl mb-6'>Company</h2>
          <div className='text-[#A1A1AA] space-y-4'>
            <p>About Us</p>
           <p>Our Mission</p>
           <p>Contact Saled</p>
          </div>
       </div>
       <div className=' gap-2 space-y-4'>
         <h2 className=' text-white text-2xl mb-6'>Services</h2>
          <div className='text-[#A1A1AA] space-y-4'>
            <p>Products & Services</p>
           <p>Customer Stories</p>
           <p>Download Apps</p>
          </div>
       </div>
       <div className=' gap-2 '>
         <h2 className='  text-white text-2xl mb-6'>Information</h2>
         <div className='text-[#A1A1AA] space-y-4'>
           <p>Privacy Policy</p>
           <p>Terms & Conditions</p>
           <p>Join Us</p>
         </div>
       </div>
       <div className=' '>
         <h2 className=' text-white text-2xl mb-6'>Social Links</h2>
         <div className='text-[#A1A1AA] space-y-4'>
           <div className='flex gap-1'>
            <img src={userTiter} alt="" />
            <p>@CS — Ticket System</p>
           </div>
           <div className='flex gap-1'>
            <img src={userInsta} alt="" />
            <p>@CS — Ticket System</p>
           </div>
           <div className='flex gap-1'>
            <img src={userFacebook} alt="" />
            <p>@CS — Ticket System</p>
           </div>
           <div className='flex gap-1'>
            <img src={userLeter} alt="" />
            <p>support@cst.com</p>
           </div>
         </div>
      </div>

      </div>

      <div className=' text-white flex justify-center pb-3'>© 2025 CS — Ticket System. All rights reserved.</div>

    </div>
    );
};

export default Footer;