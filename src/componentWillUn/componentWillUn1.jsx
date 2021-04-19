import React from 'react'
class RemoveDOM extends React.Component {
    state = {  }

    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        alert(" remove nd called componentwillupdate")
    }
    render() { 
        return (  
            <div>

            </div>
        );
    }
}
 
export default RemoveDOM;