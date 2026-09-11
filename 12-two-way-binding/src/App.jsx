import React from 'react'
import { useState } from 'react';



//two-way binding means react ko bol re ho krne ko instead of you doing it or accessing it
const App = () => {
  const [title, settitle] = useState('');

  const submitHandler = (elem)=>{
    elem.preventDefault();
    console.log("form submited by",title);
    settitle('');
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem)
      }}>
        <input 
        type="text" 
        placeholder="Enter your name"
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
        }}
        
        />
        <button> Submit</button>

      </form>
    </div>
  )
}

export default App