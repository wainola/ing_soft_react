import {
  DO_LOGIN,
  OK_LOGIN,
  FAIL_LOGIN,
  GET_PAYMENTS,
  SEND_PAYMENTS,
  CREATE_STUDENT,
  GET_STUDENTS,
  CREATE_GRADE,
  GET_GRADES,
  CREATE_CONTRACT,
  GET_CONTRATS,
  LOGOUT,
  GET_MY_PAYMENTS,
  REFRESH_SESSION,
  SET_ALUMNO
} from './types'
import axios from 'axios'

const ROOT_URL = 'http://localhost:9000'

export const doLogin = payload => ({
  type: DO_LOGIN,
  payload
})
export const okLogin = payload => ({
  type: OK_LOGIN,
  payload
})
export const failLogin = payload => ({
  type: FAIL_LOGIN,
  payload
})

export const login = body => dispatch => {
  console.log('login action', body)
  dispatch(doLogin(body))
  dispatch(okLogin(body))
  // dispatch(failLogin(body))
}

export const logout = payload => ({
  type: LOGOUT
})

export const sendPayments = payload => ({
  type: SEND_PAYMENTS,
  payload
})

export const createStudent = payload => ({
  type: CREATE_STUDENT,
  payload
})

export const getMyPayments = payload => ({
  type: GET_MY_PAYMENTS,
  payload
})

export const refreshSession = payload => ({
  type: REFRESH_SESSION,
  payload
})

export const setAlumno = payload => ({
  type: SET_ALUMNO,
  payload
})

export const getAlumnos = () => ({
  type: GET_STUDENTS
})

// async actions
export const getPayments = () => dispatch => {
  axios.get(`${ROOT_URL}/api/payments`)
  .then(res => {
    console.log('res', res)
    return dispatch(sendPayments(res))
  })
  .catch(err => {
    console.log('err', err)
  })
}
