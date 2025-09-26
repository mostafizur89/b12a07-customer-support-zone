import React, {use} from 'react';

import Tikit from '../Tikit/Tikit';


const CustomerTikits = ({tikitsPromise, handleClickTikit}) => {
  
    const tikitsData = use(tikitsPromise);
     
    return (
        // tikit list

       <div className='bg-[#e6ecf1]'>
           <div className=' max-w-[1200px] mx-auto '>
            <h2 className='font-bold text-3xl'>Customer Tikit</h2>
               <div className='space-y-2  md:flex gap-3'>
                    <div className=' md:w-3/4 space-y-2 md:grid grid-cols-2 gap-3'>

                 {/* tikit */}
                {
                    tikitsData.map(tikit=><Tikit 
                        key={tikit.id}
                        tikit={tikit}
                        handleClickTikit={handleClickTikit}
                        ></Tikit>)
                }

               </div>
                    
                <div className=' md:w-1/4 mt-0'>
                <div className='mb-4'>
                    <h2 className='font-semibold text-2xl'>Task Status</h2>
                    <ul className=''>
                      <li>Select a ticket to add to Task Status</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-semibold text-2xl'>Resolved Task</h2>
                    <ul>
                        <li>No resolved tasks yet.</li>
                    </ul>
                </div>
              </div>
               </div>
           </div>
       </div>
    );
};

export default CustomerTikits;