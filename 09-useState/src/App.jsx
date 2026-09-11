import React from 'react'
import { useState } from 'react'

/*const App = () => {
  const [a, setA] = useState(30);  // a is read only ,setA is write only here we are using useState to tell react to change the variable instead of using dom which directly changes the value on the website 
  const [username, setusername] = useState('meenal');
  const [users, setusers] = useState([10,20,30]);
 
  function changeA(){
    setA(40);
    setusername('aman');
    setusers([30,40,50]);
  }
  return (
    <div>
      <h1> Value of a is {a} <br/>{users} Value of user is {username}</h1>
      <button onClick={changeA}> Click</button>
    </div>
  )
} */


const App = () => {
  let [num, setnum] = useState(0);
  function incNum(){
    setnum(num+1);
  }
  function decNum(){
    setnum(num-1);
  }
  function inc5(){
    setnum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incNum}>increase</button>
      <button onClick={decNum}>decrease</button>
      <br/>
      <button onClick={inc5}>Jump by 5</button>

    </div>
  )
}

export default App
