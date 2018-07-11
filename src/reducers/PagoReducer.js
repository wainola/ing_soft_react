import {
  SEND_PAYMENTS
} from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case SEND_PAYMENTS:
      return { ...state, data: action.payload.data }
    default:
      return state
  }
}