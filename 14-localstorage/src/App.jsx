import React from 'react'


//local storage is called browser ki memory
//we are working on frontend not backend - toh zyada nhi thoda storage ko store krne liye local storage is used
const App = () => {
  
  //setItem - we set with key, value pair
  //getItem - only key
 /*localStorage.setItem('user','Meenal');
  const user = localStorage.getItem('user');
  console.log(user); */

 // localStorage.removeItem('user');

 //to save or retrieve object
 /* const user = {
    username: 'Meenal',
    age: 18,
    city:'Bhopal'
  }
  
  //localStorage.setItem('user',user);   //now if you see the applications, inside localstorage you will notice that it shows object Object 
  //because in local storage it is set in the form of string - so we use JSON.stringify

  localStorage.setItem('user',JSON.stringify(user));
*/

  const user = JSON.parse(localStorage.getItem('user'));  
  console.log(typeof user);   //string
  

  return (
    <div>App</div>
  )
}

export default App