import React, {Fragment, useState, useEffect} from 'react'
import useDocumentTitleCustom from './useDocumentTitleCustom';


 function Counter(props) {
     const [count, setState] = useState(0);   // setState = setCount
     const[name,setName] = useState('');

useDocumentTitleCustom(`${name} has clicked ${count} times!`);   // use custom hooks 
//     useEffect(()=>{              //{ this function is called every time  component is render}
//     // no dependency
//        document.title = `${name}  has clicked ${count} times!`

// return () =>{
//     // inside u can write cleanup code ( componentWillUnmount)
// }

//     }, [count])   // function is called only when the value of count variable changes  // name nt update
// [ ] is dependency 

     // class component lifecycle 
     // componentDidMount - its called first time comp is mounted 
     // componentDidUpdate  - its called whenever comp state or props updated
     // combination of both === useEffect 
     //  componentWillUnmount  == clear our timer


    return (
       <Fragment>
           <input type="text" onChange=  {e=> setName(e.target.value)}  />
              <div>
                {name} has clicked {count} times!
              </div>
               <button onClick= {()=>setState(count+1)}>Increase</button>
       </Fragment>
    )
}

export default Counter;
