import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import allTheActions from '../actions'

class Count extends Component {
    render() {
        console.log(this)
        const countAction =  this.props.countAction
        return <div>
            <div>{this.props.count}</div>
            <button onClick={() => countAction.add(1)}>ADD 1</button>
            <button onClick={() => countAction.add(10)}>ADD 10</button>
            <button onClick={() => countAction.remove(1)}>REMOVE 1</button>
            <button onClick={() => countAction.remove(10)}>REMOVE 10</button>
            <button onClick={() => countAction.reset()}>RESET</button>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        count: state.counterReducer.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        countAction: bindActionCreators(allTheActions.countActions, dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count)