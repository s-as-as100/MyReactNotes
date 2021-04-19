import React from 'react'
import CompChild from './compChild'


const CompParent = () => {

    function parentAlert(data) {
        alert(data)
    }
    const data =" potter"
    return (  
        <div>
            
            <CompChild alert={parentAlert} name={data}/>
        </div>
    );
}
 
export default CompParent;
