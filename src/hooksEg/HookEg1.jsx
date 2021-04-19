// import React, {useState, useMemo}  from 'react'
  

// const UseMemo = () => {
//   const[count, setCount] = useState(0)
//   const[item,setItem] = useState(10)
  

//   function multiMemo() {
//       console.warn("multicount called")
//       return count*5;
// this function is also called for setItem problem is solve by
// using UseMemo Hooks 
//   }
// console.warn("problem solved using memo hooks")
// ***** using github
import React, { useState } from 'react'
function App() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)

  const newApple=React.useMemo(
    function appleTime() {
      console.warn("Hello")
      return 100 * count;
    }
  ,[item])
  return (
    <div className="App">
      <h1>Hooks in React {count}</h1>
      {newApple}
      <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>

    </div>
  );
}

export default App;




// const Hooks = () => {

//     const[name, setName] = useState("React");
   

//     useEffect(()=> {
//         document.title = `you clicked {name}`
//     })

//     return ( <div>
//         <p>{name}</p>
//         <button onClick = {() => setName("React hooks ")}> click Me</button>
//     </div> );
// }
 
// export default Hooks;


// what is ref in rectjs
// it used to directly manipulate the Dom
// its rarely used 
// example : form validation 
// // forcefully get changed color
// import './App.css';
// import React,{useRef} from 'react'
// function App() {
//   let inputRef=useRef(null);
//   function controlInput()
//   {
//   //  inputRef.current.value="abc"
//   // inputRef.current.style.display="none"
//   inputRef.current.focus()
//   }
//   return (
//     <div className="App">
//       <h1>useRef in React </h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={controlInput}>Handle Input</button>
//     </div>
//   );

// }

// export default App;








// controlled component is control  or handle the inputtext field by using state
// import './App.css';
// import React,{useState} from 'react'
// function App() {
//   const [val,setVal]=useState("")

//    return (
//     <div className="App">
//       <h1>Controlled Component </h1>
//       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
//    <h1>{val}</h1>
//     </div>
//   );

// }
// export default  App;
// uncontrolled com is control or handle by DOM .getElement(#id)


// types of rendering
//1. server side rendering
// php page or asp serside page 
//serside phae html inside 
//html render from server side 
////2 client side-rendering 
// reactjs , angualar, 
// html is generated from jS 
//

//SSR is a popular technique for rendering a 
// normally client-side app on the server
// and then sending fully rendered 
// page to client 

//benefits  1.SEO 




//SSR in React.js
// hydrate instead of render
// use ReactDOMServer renderToString
// Simple Express Server
// configuring WebAPck nd BABEL








