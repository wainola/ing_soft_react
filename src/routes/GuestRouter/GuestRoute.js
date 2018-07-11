import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({ isAuthenticated, componet: Component, location, ...rest }) => {
  console.log('GuestRoute', isAuthenticated)
  return (
    <Route 
      {...rest}
      render={props => ( !isAuthenticated ? <Component {...props} /> : <Redirect to='/' /> )} />
  )
}

function mapStateToProps({auth}){
  return { isAuthenticated: auth.login }
}

export default connect(mapStateToProps)(AuthRoute)
