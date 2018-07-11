import {
  DO_LOGIN,
  OK_LOGIN,
  FAIL_LOGIN,
  LOGOUT,
  REFRESH_SESSION
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
      localStorage.setItem('user', JSON.stringify(user, password))
      console.log(2, action.payload)
      let {user, password} = action.payload
      if(user !== 'alumno' && password !== 'password'){
        return { login: false }
      }
      return { ...initialState, login: true, role: action.payload.role }
    case FAIL_LOGIN:
      console.log(3, action.payload)
      return { login: false }
    case LOGOUT:
      localStorage.removeItem('user')
      return { login: false }
    case REFRESH_SESSION:
      return { ...state }
    default:
      return state
  }
}