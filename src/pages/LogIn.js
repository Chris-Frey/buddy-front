import React, { useRef, useState } from 'react'
import { Input, Spacer, Button, Grid } from "@nextui-org/react";
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "../styles/LogIn.css"

const LogIn = ({login}) => {
  const formRef = useRef()
  const navigate = useNavigate()

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
    navigate("/")
  }

  const [userLogin, setUserLogin] = useState({
    category:"",
    activity_name:"",
  })

  const handleChange = (e) => {
    setUserLogin({...userLogin, [e.target.name]: e.target.value})
  }

  return (
    <>
    <div className="title_logo">
    <img src="/logo512.png" alt='Whim Logo'/>
    </div>

    <form
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        type='email'
        name='email'
        placeholder='Email'
      />
      <input onChange={handleChange} type='password' name='password' placeholder='Password'/>

      <button type='submit' onClick={handleSubmit}>Log In</button>

    <NavLink to="/signup">
      <button>Sign Up</button>
    </NavLink>
    </form>

{/* nextUI form */}
    <form ref={formRef} onSubmit={handleSubmit}>
        <Input  labelPlaceholder="Email" type='email' name='email'/>
        <Input  labelPlaceholder="Password" type='password' name='password'/>
        <NavLink to="/" >
          <Button
          type='submit'>
            Log In
          </Button>
        </NavLink>
    </form>
  </>
  )
}

export default LogIn