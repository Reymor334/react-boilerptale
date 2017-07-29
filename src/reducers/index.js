import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import appRed from './appReducer'

export default combineReducers({
    app: appRed,
    routing: routerReducer
})