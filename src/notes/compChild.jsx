import React from 'react'


const CompChild = (props) => {
  const data2 = " harry"
    return ( 
        <div>{props.name}
        <button onClick={()=>props.alert(data2)}>stateLiftingUp</button>
        </div>
     );
}
 
export default CompChild;