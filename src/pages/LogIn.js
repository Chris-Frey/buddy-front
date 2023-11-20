import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../styles/LogIn.css"
import AddActivityModal from '../components/AddActivityModal'

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
  <div className='loginBody'>
    <img className='title-logo' src={"/logo.png"} alt='Promptu Logo'/>

    <h1>Promptu</h1>

    <p className='welcomeMessage'>Welcome to Promptu, the social app that actually helps you be social.  In Promptu, you can find activities with people happening in as little as 30 minutes, or as far as 8 hours in the future.  Sign up for an activity you like, or make one yourself so people can go do it with you!<br/>
    </p>

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
      <button className='loginButton' type='submit' onClick={handleSubmit}>
        Log In
      </button>

      <NavLink to="/signup" className='signup'>
        Sign Up
      </NavLink>
    </form>

    </div>
  </>
  )
}

export default LogIn