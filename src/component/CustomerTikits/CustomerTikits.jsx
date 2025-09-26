import React, {use} from 'react';
import userImg from "../../assets/ri_calendar_line.png"
import userImgs from "../../assets/Ellipse 22.png"

const CustomerTikits = ({tikitsPromise}) => {

    const tikitsData = use(tikitsPromise);
    console.log(tikitsData)
    return (
       <div className='bg-[#e6ecf1]'>
           <div className='border-1 max-w-[1200px] mx-auto '>
            <h2 className='font-bold text-3xl'>Customer Tikit</h2>
               <div className='space-y-2  md:flex gap-3'>
                    <div className=' md:w-3/4 space-y-2 md:grid grid-cols-2 gap-3'>

                 {/* tikit */}
                {
                    tikitsData.map(tikit=>
                        
                 <div className='border-1 p-[16px]  rounded-[4px] shadow-[3px]  bg-white '>
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
                    )
                }
               </div>
                    
                <div className=' md:w-1/4 mt-0'>
                <div className='mb-4'>
                    <h2 className='font-semibold text-2xl'>Task Status</h2>
                    <input placeholder='Select a ticket to add to Task Status' type="text" />
                </div>
                <div>
                    <h2 className='font-semibold text-2xl'>Resolved Task</h2>
                    <input placeholder='No resolved tasks yet.' type="text" />
                </div>
              </div>
               </div>



           </div>
       </div>
    );
};

export default CustomerTikits;