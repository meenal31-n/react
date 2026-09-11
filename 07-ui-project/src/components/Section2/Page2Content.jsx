import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page2Content = () => {
  return (
    <div className='h-full w-full flex justify-between p-6'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page2Content