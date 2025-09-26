import React from 'react';
import victor1 from '../../assets/vector1.png'

const Banner = () => {
    return (

<div className='bg-[#e6ecf1]'>
                <div className='max-w-[1200px] mx-auto  md:flex justify-between items-center gap-3 py-[40px]'>

      <div className='border-2 w-1/2 h-[250px] flex justify-center items-center rounded-lg  mx-auto w-full my-4'
      style={{
        backgroundImage: ` url(${victor1}),linear-gradient(to right, #632EE3cc, #9F62F2cc)`,

      }}
      >
        <div className='text-white'>
          <h5 className='font-semibold text-2xl'>In-Progress</h5>
          <h2 className='flex justify-center items-center text-5xl font-bold'>0</h2>
        </div>
      </div>
      <div className='border-2 w-1/2 h-[250px] flex justify-center items-center rounded-lg  mx-auto w-full'
      style={{
        backgroundImage: ` url(${victor1}),linear-gradient(to right, #54CF68cc, #00827Acc)`,

      }}
      >
        <div className='text-white'>
          <h5 className='font-semibold text-2xl'>Resolve</h5>
          <h2 className='flex justify-center items-center text-5xl font-bold'>0</h2>
        </div>
      </div>

    </div>
</div>

    );
};

export default Banner;