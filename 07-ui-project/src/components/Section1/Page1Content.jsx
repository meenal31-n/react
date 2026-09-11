import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex justify-between items-center px-18 h-[90vh] gap-10'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content