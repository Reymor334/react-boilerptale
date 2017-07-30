import React from 'react'
import {connect} from 'react-redux'

import './root.scss'

class Root extends React.Component {
    render() {
        console.log(this.props.state);
        return (
            <div
                className="app">
                <h1>Hello, World!</h1>
            </div>
        )
    }
}

export default connect(state => ({state: state}))(Root)
