import React from 'react'



//uses of SCU 1. stop specific rendering 2.
class ShouldComponent extends  React.Component {
    constructor(){
        super()
        this.state = {
         count :0
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.warn("ComponentDidUpdate")
    }
   

    shouldComponentUpdate() {
     console.warn("shouldComponentUpdate", this.state.count)
 if(this.state.count>5 && this.state.count<10)
  {
      return true
  }

    }
    
    render() { 
        return (
            <div>
                <h1>ShouldComponent{this.state.count}</h1>
                <button onClick ={()=>{(this.setState({count: this.state.count+1}))}}>Update Me</button>
            </div>
          );
    }
}
 
export default ShouldComponent;