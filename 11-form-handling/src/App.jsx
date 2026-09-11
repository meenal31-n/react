import React from 'react'


//problem statement - when form is submitted the page should not reload as <form> element has a default behavior so we want to prevent that 
const App = () => {
  const submitHandler = (elem)=>{
    elem.preventDefault();
    console.log("form submited");
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem)
      }}>
        <input type="text" placeholder="Enter your name"/>
        <button> Submit</button>

      </form>
    </div>
  )
}

export default App