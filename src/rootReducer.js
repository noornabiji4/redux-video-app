import {combineReducers} from 'redux'

import toggle from './Toggle/reducer'
import counter from './Counter/reducer'
import moviestate from './Movies/reducer'
const rootReducer = combineReducers({
    toggle,
    counter,
    moviestate
})

export default rootReducer 