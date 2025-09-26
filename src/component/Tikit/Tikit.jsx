import React  from 'react';
import userImg from "../../assets/ri_calendar_line.png"
import userImgs from "../../assets/Ellipse 22.png"


const Tikit = ({tikit, tikitCount}) => {
    
    return (
                 <div onClick={() => tikitCount(tikit)} className='border-1 p-[16px]  rounded-[4px] shadow-[3px]  bg-white '>
                     <div className=''>
                         <div className='flex justify-between mb-2'>
                             <h2 className='font-medium text-xl'>{tikit.title}</h2>
                             <button className='p-[3px] flex justify-around bg-green-200 rounded-3xl font-medium text-lg'> 
                                <img className='rounded-b-full p-[5px]' src={userImgs} alt="" />{tikit.status}</button>
                         </div>
                     
                          <p className='text-[#627382] my-3'>{tikit.description}</p>
                         <div className=''>
                             <div className='flex justify-between gap-[25px] mb-2 '>
                                 <div className='flex gap-1.5 '>
                                     <h5 className='text-[#627382]'>{tikit.id}</h5>
                                     <h2 className='text-m font-medium'>{tikit.priority}</h2>
                                 </div>
                                 <div className='flex  text-[#627382] gap-1.5 '>
                                    <h5>{tikit.customer}</h5>
                                    <div className='flex justify-between'>
                                         <img className='h-[20px] w-[20px]' src={userImg} alt="" />
                                         <h5>{tikit.createdAt}</h5>
                                    </div>
                                 </div>
                             </div>
                        </div>
                     </div>
                 </div>
    );
};

export default Tikit;