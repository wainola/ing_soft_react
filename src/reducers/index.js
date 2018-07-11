import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import PagoReducer from './PagoReducer'

export default combineReducers({
  auth: AuthReducer,
  pago: PagoReducer
})