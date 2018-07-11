import {
  DO_LOGIN,
  OK_LOGIN,
  FAIL_LOGIN,
  GET_PAYMENTS,
  SEND_PAYMENTS
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

export const sendPayments = payload => ({
  type: SEND_PAYMENTS,
  payload
})

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