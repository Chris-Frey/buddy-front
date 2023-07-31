import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <h1>Not all who wander are lost.</h1>
    <h1>But you are.</h1>
    <h1 color='yellow'> <NavLink to="/login">LOG IN HERE</NavLink></h1>
    <img width='400px' src='https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=678&q=80'/>
    </>
  )
}

export default Error