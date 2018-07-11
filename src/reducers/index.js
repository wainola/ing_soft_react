import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import PagoReducer from './PagoReducer'
import StudentReducer from './AlumnosReducer'
import PaymentsReducer from './PagoReducer'

export default combineReducers({
  auth: AuthReducer,
  pago: PagoReducer,
  alumno: StudentReducer,
  payments: PaymentsReducer
})