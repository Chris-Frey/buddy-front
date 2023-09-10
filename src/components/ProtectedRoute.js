import React from 'react'
import {Router, Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({ component: Comp, login, path, ...rest }) => {
  return (
    <Route path={path}
    {...rest}
    render={(props) =>{
      return login ? <Comp {...props} /> : <Redirect to="/login"/>
    }}
    />
  )
}

export default ProtectedRoute