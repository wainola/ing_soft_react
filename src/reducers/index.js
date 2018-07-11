import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import PagoReducer from './PagoReducer'
import StudentReducer from './AlumnosReducer'

export default combineReducers({
  auth: AuthReducer,
  pago: PagoReducer,
  alumno: StudentReducer
})