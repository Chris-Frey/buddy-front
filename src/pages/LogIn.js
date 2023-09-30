import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../styles/LogIn.css"

const LogIn = ({login}) => {
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
        // stores the form entries in a variable
    const formData = new FormData(formRef.current)
        // creates an object from entries
    const data = Object.fromEntries(formData)
        // stores user info in a format for JWT
    const userInfo = {
      "user":{ email: data.email, password: data.password}
    }
    login(userInfo)
  }

  return (
  <>
  <body className='loginBody'>

  <div className="titleLogo" >
    <img src="/logo.png" alt='Promptu Logo'/>
  </div>
  <h1>Promptu</h1>
    <form
      className='loginForm'
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <input
        type='email'
        name='email'
        placeholder='Email'
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
      />
      <button className='loginButton' type='submit' onClick={handleSubmit}>Log In</button>
      <NavLink to="/signup">
        <text className='signup'>Sign Up</text>
      </NavLink>
    </form>
    </body>
  </>
  )
}

export default LogIn