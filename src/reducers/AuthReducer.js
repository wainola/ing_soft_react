import {
  DO_LOGIN,
  OK_LOGIN,
  FAIL_LOGIN
} from '../actions/types'

const initialState = {
  login: false
}

export default function(state=initialState, action){
  switch(action.type){
    case DO_LOGIN:
      console.log(1, action.payload)
      return { login: 'attempting to login' }
    case OK_LOGIN:
      console.log(2, action.payload)
      let {user, password} = action.payload
      if(user !== 'alumno' && password !== 'password'){
        return { login: false }
      }
      return { ...initialState, login: true }
    case FAIL_LOGIN:
      console.log(3, action.payload)
      return { login: false }
    default:
      return state
  }
}