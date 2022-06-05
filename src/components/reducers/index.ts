import {combineReducers} from 'redux'
import counter from '../../stores/counter'

export default combineReducers({
  counterStore: counter,
})
