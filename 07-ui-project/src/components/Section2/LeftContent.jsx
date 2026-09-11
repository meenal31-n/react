import React from 'react'
import {Zap} from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/2  p-8'>
      <h1 className='text-5xl font-bold'> E-com market is expected to exceed $300B 2027</h1>
      <div className='flex items-center mt-25 gap-5'>
        <Zap size={50}/>
        <p className='text-lg font-medium'>
        In india MSME contribution to eTailing sales is expected to grow between 60-70% annually to reach USD50Bn by FY 2027
      </p>
      </div>
      <div className='flex justify-between mt-20 gap-15 h-60'>
        <div className='rounded-4xl w-1/2 bg-blue-500 p-12 text-white'>
          <h1 className='font-extrabold text-5xl '>26.7%</h1>
          <p className='mt-7 font-medium'> Expected annual growth of eCom market size</p>
        </div>
        <div className='rounded-4xl w-1/2 bg-lime-300 p-12 text-white'>
           <h1 className='font-extrabold text-5xl '>25%</h1>
          <p className='mt-7 font-medium'> E-com share of the organized retail in 2020</p>
        </div>
      </div>
      
    </div>
  )
}

export default LeftContent