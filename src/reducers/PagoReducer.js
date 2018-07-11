import {
  SEND_PAYMENTS,
  GET_MY_PAYMENTS
} from '../actions/types'
import uuid from 'uuid'

export default function(state={}, action){
  switch(action.type){
    case SEND_PAYMENTS:
      console.log('sendPayments', action.payload)
      state.myPayments.push({
        id_pago: uuid.v1(),
        monto_pagado: action.payload,
        rut_alumno: '22.222.222-2',
        cod_contrato: uuid.v1()
      })
      return { ...state, data: action.payload }
    case GET_MY_PAYMENTS:
      const myPayments = [
        {
          id_pago: uuid.v1(),
          monto_pagado: 20000,
          rut_alumno: '22.222.222-2',
          cod_contrato: uuid.v1()
        },
        {
          id_pago: uuid.v1(),
          monto_pagado: 33000,
          rut_alumno: '22.222.222-2',
          cod_contrato: uuid.v1()
        },
        {
          id_pago: uuid.v1(),
          monto_pagado: 19000,
          rut_alumno: '22.222.222-2',
          cod_contrato: uuid.v1()
        }
      ]
      return { ...state, myPayments}
    default:
      return state
  }
}