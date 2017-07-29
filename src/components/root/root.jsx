import React from 'react'
import {connect} from 'react-redux'

class Root extends React.Component {
    render() {
        console.log(this.props.state);
        return (
            <div>
                Hello, React Hot Loader!
            </div>
        )
    }
}

export default connect(state => ({state: state}))(Root)
