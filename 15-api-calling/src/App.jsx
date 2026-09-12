import axios from 'axios'
import { useState } from 'react';


const App = () => {
 /* async function getData(){
   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
   
  console.log(response);
  
  //await - means wait until the url is fetched
  } */

 /* const getData = ()=>{
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);  //it will show output as pending yani resolve ni kiya it is still not fetched
    
  }   */

   /* const getData = async ()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      //console.log(response.json());  //now again it will show pending because response toh async ho gya but data async nhi hua 
      const data = await response.json();
      console.log(data);
      
      
    } */


      //axios much better for calling apis - many advantages 
    /*  const getData = async ()=>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data);
        

      } */


      const [data, setdata] = useState([]);

      const getData = async ()=>{
        const response =await axios.get('https://picsum.photos/v2/list');
        //console.log(response);
        setdata(response.data);   //since response.data is an array of objects i will pass the response.data inside setData, now after this i can use this below making <div> below button

        
        
      }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3> Hello, {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App

//two mare imp concepts not covered in video - infinite scrolling and paging