import React, { useRef } from 'react'
import ActivityCard from '../components/ActivityCard'
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

  <p className='welcomeMessage'>Welcome to Promptu, the social app that actually let's you be social.  In Promptu, you can post an activity you want to do, fill out the specifics, and people can sign up to come with you.  You're only allowed (for now)to plan 8 hours ahead because you don't always know in advance when you'll have time to do something.  <b>At the moment, the app is in a "showoff" state, so logging in is not necessary.  This will change as the app gets closer to launch.</b></p>
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
      {/* <button className='loginButton' type='submit' onClick={handleSubmit}> */}
      {/* <button link_to='/' className='loginButton'>
        Log In
      </button> */}
      <NavLink to={`/`}>
          <button className='button'>Come on in!</button>
        </NavLink>
      <NavLink to="/signup" className='signup'>
        Sign Up
      </NavLink>
    </form>

    </div>
  </>
  )
}

export default LogIn