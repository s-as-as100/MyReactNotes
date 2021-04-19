import React, {useState, useEffect} from 'react'



const HookState = () => {

    const [count,setCount] = useState(10)
    const [data,setData] =  useState(100)

    useEffect(()=>{
        console.log("useEffcet called")
       
    },[data])
    useEffect(()=>{
        alert("total count is " + count)
       
    },[count,data])
    // [] it doesnot update any change state 
    // if [count] then called only for count
    return ( 
        <div>
    <h1>Count::{count}</h1>
    <h1>Data:: {data}</h1>
    <button onClick={()=>setCount(count+1)}  >update count</button>
    <button onClick={()=>setData(data+1)}  >update data</button>
        </div>
     );
}
 
export default HookState;
