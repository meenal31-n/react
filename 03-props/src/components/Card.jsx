import React from 'react'

const Card = (props) => {

  //console.log(props);  //it will return object having {user: 'meenal'}
  return (
    <div className ="card">
        <img src={props.img}/>
        <h1> {props.user}, {props.age}</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button> View Profile</button>
     </div>
  )
}

export default Card