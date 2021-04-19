import React from 'react'


class LifecycleMethod extends React.Component {

    constructor() {
         super()
         console.warn("constructor")

    this.state = {  
         count: 0
    }
}
   // if state nd props update there is no effect on CMD
   // best use of cmd is call API
//    componentDidMount() {
//        console.warn("componentDidMOunt")
//    }

// can i stop componentdidUpdate : yes using of shouldComponentUpdate(stop inovke)
// if sCu return false
   componentDidUpdate(prevProps,prevState,snapShot) {
       // no need to update inside beacause it create infinite loop
       // u can update state but with condition only
       console.warn("ComponentDidUpdate" , prevState.count, this.state.count,snapShot)
       // snapShot is always show undefined because
       // if u r getSnapBeforeUpdate()  its initial first then show value

       if(this.state.count<10){
        this.setState({count: this.state.count+1}) // show error it reach upto infintiee
       }

       // u can call api CDM but using in conditional way
     
       // solve this [problem using conditin]
    //    if(prevState.count === this.state.count) {
    //        alert(" data is same ")
    //    }
   }

    render() { 

        // not call setState(neverused )
        console.log("render")
        return (  
            <div>
              <h1>{this.state.count}</h1>
             <button onClick ={()=> {this.setState({count:1})}} >click me lifeCycle</button>
            </div>
        );
    }
}

 
export default  LifecycleMethod;