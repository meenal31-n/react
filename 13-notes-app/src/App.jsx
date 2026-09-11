import { useState } from 'react'
import {X} from 'lucide-react';

//1.) make the structure- tailwind css and html
//2.) form handling
//3.) two-way binding


const App = () => {

  //two-way binding
  const [title, settitle] = useState('');
  const [details, setdetails] = useState('');
  const [task, settask] = useState([]);

 
 //form handling
  const submitHandler = (e)=>{
    e.preventDefault();

    const CopyTask = [...task];  //task ki copy bana li - so that purane notes intact rahe 

    //so these two lines mean- it will first create a copy of the task array then it will push into the new array the title and details then it will settask(copyTask) means it will replace the task with copytask
    CopyTask.push({title,details});
    settask(CopyTask);
    
    settitle('');
    setdetails('');
  }


  //last step for deleting
  const deleteNote = (idx)=>{
    const CopyTask =  [...task];
    CopyTask.splice(idx,1);  //todna idx only 1 element
    settask(CopyTask);

  }


  return (
    <div className='h-full lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
         submitHandler(e)
          }} 
            className='flex flex-col gap-4   items-start p-10 lg:w-1/2'>

          <h1 className='text-3xl font-bold'> Add Notes</h1>

{/* PEHLA INPUT FOR HEADING */}
          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className ='px-5 py-2 w-full border-2 rounded outline-none font-medium'
            value={title}
            onChange={(e)=>{
              settitle(e.target.value);
            }}
          />


{/* DETAILED WALA INPUT */}
          <textarea
            className='px-5 py-2 h-32 w-full border-2 rounded outline-none font-medium flex items-start flex-row' 
            type="text"
            placeholder='Write Details' 
            name="" 
            id="" 
            value={details}
            onChange={(e)=>{
              setdetails(e.target.value);
            }}
          /> 

          <button 
          className='bg-white active:scale-95 w-full text-black rounded px-5 py-2 font-medium'>
             Add Note
          </button>

      </form>


      <div className='lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-4xl font-bold'> Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
            {task.map(function(elem,idx){

              return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-2xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]" >
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx);
                }} className='w-full bg-red-500 py-1 text-xs rounded font-bold text-white cursor-pointer active:scale-95'>
                  Delete
                </button>
                
                
              </div>;
            })}
        </div>
      </div>
    </div>
  )
}

export default App