import React from 'react';

const Navbar = () => {
    return (
    <div className=" md:flex justify-between max-w-[1200px] mx-auto">

      <div className='flex justify-center'>
         <a className="btn btn-ghost text-xl font-bold ">CS — Ticket System</a>
      </div>
      
      <div className='md:flex justify-around items-center'>
         <div className='flex justify-around'>
           <ul className="menu menu-horizontal px-1">
             <li><a>Home</a></li>
             <li><a>FAQ</a></li>
             <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
           </ul>
         </div>
         <div className=" flex justify-center ">
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">+ New Ticket</a>
         </div>
      </div>

    </div>
    );
};

export default Navbar;