import React, {use,} from 'react';

import Tikit from '../Tikit/Tikit';


const CustomerTikits = ({tikitsPromise}) => {
  
    const tikitsData = use(tikitsPromise);



    
    return (

        // banner




        // tikit list

       <div className='bg-[#e6ecf1]'>
           <div className='border-1 max-w-[1200px] mx-auto '>
            <h2 className='font-bold text-3xl'>Customer Tikit</h2>
               <div className='space-y-2  md:flex gap-3'>
                    <div className=' md:w-3/4 space-y-2 md:grid grid-cols-2 gap-3'>

                 {/* tikit */}
                {
                    tikitsData.map(tikit=><Tikit 
                        tikit={tikit}
                        
                        ></Tikit>)
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