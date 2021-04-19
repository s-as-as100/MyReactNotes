import React, { Component } from 'react'
import WithTooltip from './withTooltip';

class Movies extends Component {
    render() {
        return (
            <div>
                Movie
                {this.props.showTooltip && <div>Show Tooltip</div>}
            </div>
        )
    }
}
export default WithTooltip(Movies)