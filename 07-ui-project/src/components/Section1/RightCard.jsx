import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-80 p-6 rounded-4xl shrink-0'>
      <img className='w-full h-full object-cover rounded-4xl' src={props.img}/>
      <RightCardContent id={props.id} tag={props.tag}/>

    </div>
  )
}

export default RightCard