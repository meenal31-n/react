import React, { useState } from 'react'

/*const App = () => {
  const [num, setnum] = useState(10);
  const btnclicked =()=>{
    
    setnum(20); //asynchronous process
    console.log(num);
  }
  return (
    <div>
      <h1> {num}</h1>
      <button onClick={btnclicked}> click</button>
    </div>
  )
}
*/


//object
/*const App = () => {
  const [num, setnum] = useState({user:'Sarthak',age:20});
  const btnClicked = ()=>{
    const newNum= {...num};  //reference to num - destructure 
    newNum.user = 'Aman';
    newNum.age = 89;
    setnum(newNum);


  }
  return (
    <div>
      <h1> {num.user}, {num.age}</h1>
      <button onClick={btnClicked}> click</button>
    </div>
  )
}

export default App */


//array
/*const App = () => {
  const [num, setnum] = useState({user:'rishi', age:17});
  const btnClicked = ()=>{
    // const newNum = [...num];
    // newNum.push(50);
    // setnum(newNum)
    setnum(prev=>({...prev,age:50}));
  }
  return (
    <div>
      <h1> {num.user},{num.age}</h1>
      <button onClick={btnClicked}> click</button>
    </div>
  )
}

export default App */ 



//batch update
const App = () => {
  const [num, setnum] = useState(10);
  const btnClicked = ()=>{
    // setnum(num+1);
    // setnum(num+1);
    // setnum(num+1);  //written 3 times but only works 1 time so we use arrow function

    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
//now it works 

  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}> click</button>
    </div>
  )
}

export default App