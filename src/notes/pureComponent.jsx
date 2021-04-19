import React from 'react'


const PureComponent = () => {
    return (  
        <div>
            <h1>Hello </h1>
        </div>
    );
}
 
export default PureComponent;


// what is pure component?
// it used for stop to re-render the component
// it check myprevstate is same as current state it stop for rendering the components