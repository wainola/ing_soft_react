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
      console.log(2, action.payload)
      let {alumno, password} = action.payload
      console.log('alumno y password', alumno, password)
      if(alumno !== 'alumno' && password !== 'password'){
        console.log(1)
        localStorage.setItem('user', JSON.stringify({username: 'ejecutivo', password: 'password', role: 'EXECUTIVE'}))
        return { login: false }
      }
      if(alumno === 'alumno' && password === 'password'){
        console.log(2)
        localStorage.setItem('user', JSON.stringify({username: alumno, password: password, role: 'STUDENT'}))
        return { ...initialState, login: true, role: action.payload.role }
      }
      return { login: false }
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