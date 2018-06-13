import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({ isAuthenticated, componet: Component, location, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props => ( !isAuthenticated ? <Component {...props} /> : <Redirect to='/dashboard' /> )} />
  )
}

function mapStateToProps({auth}){
  return { isAuthenticated: auth.isAuthenticated }
}

export default connect(mapStateToProps)(AuthRoute)
