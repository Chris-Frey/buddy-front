import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../styles/Error.css";

const Error = () => {
  return (
    <>
    <container className='error-body'>
    <h1>Not all who wander are lost.</h1>
    <h1>But you are.</h1>
    <h1 color='yellow'> <NavLink to="/login">Click here to find your way.</NavLink></h1>
    <div className='img-yea'>
    <img width='400px' src='https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=678&q=80'/>
    </div>
    </container>
    </> 
  )
}

export default Error