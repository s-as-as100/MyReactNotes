import React from 'react'
import RemoveDOM from './componentWillUn1';

class ComponentWillUn extends  React.Component {
    constructor(){
        super()
        this.state ={
              show: true
        }
    }
    
    render() { 
        return ( 
            <div>
                {
                    this.state.show ? <RemoveDOM/> : <h1>Remove Child Component</h1>
                }

                <button onClick={()=>this.setState({show:!this.state.show})}  >click me</button>
            </div>
         );
    }
}
 
export default ComponentWillUn;