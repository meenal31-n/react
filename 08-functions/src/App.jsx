import React from 'react'

const App = () => {
  // const btnClicked = ()=>{
  //   console.log('button is clicked');
  // }

  const mouseEnter = ()=>{
    console.log('mouse entered');
    
  }
  const inputchanging = ()=>{
        console.log('user is typing');

      }

  const pageScrolling = (elem)=>{
    //console.log('page scrolling at speed: ',elem);
    if(elem>0){
      console.log('seedha scrolling');
    }
    else{
      console.log('ulta scrolling');
    }
  }

  return (
    // <div>
    //   {/* <input onChange={
    //     function(elem){
    //       console.log(elem.target.value)
    //     }
    //   } type='text' placeholder='enter name' /> */}


    //   <div onMouseMove={(elem)=>{
    //     // console.log(elem.clientX);
    //     console.log(elem.clientY)

    //   }} className='box'
    //   >
    //   </div>
    // </div> 


    <div onWheel={(elem)=>{
      //console.log(elem.deltaY);  //scrolling ke speed
      pageScrolling(elem.deltaY);
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App