import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

//1. useeffect side by side process ko chalane ka kaam krta hai not main but side processes, when react ki main rendering process will get finished then it will run the process side by side by useeffect.
/*const App = () => {

  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(100);

  useEffect(function(){
    console.log('use effect is running...');
    
  },[num])  //surf ek bar chalega - jb jb num ki state change hogi tb hi print hoga , no eefect on num2
  //[] - called dependency
  

  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button 
      onMouseEnter={()=>{
        setnum(num+1);
      }}
      onMouseLeave={()=>{
        setnum2(num2+10);
      }}
      > Hover </button>
    </div>
  )
}

export default App */






//2.
const App = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);

  function aChanging(){
     console.log('A ki value change ho gyi');
     
  }
  function bChanging(){
     console.log('B ki value change ho gyi');
    
  }

  useEffect(function(){
    aChanging();
  
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{
        seta(a+1);
      }}> ChangeA</button>

      <button onClick={()=>{
        setb(b-1);
      }}> ChangeB</button>

    </div>
  )
}

export default App