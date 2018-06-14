import {
  DO_LOGIN,
  OK_LOGIN,
  FAIL_LOGIN
} from './types'

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

export const Login = body => dispatch => {
  dispatch(doLogin(body))
  dispatch(okLogin(body))
  dispatch(failLogin(body))
}