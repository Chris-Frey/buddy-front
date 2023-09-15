import React, { useRef, useState } from 'react'
import { Input, Spacer, Button, Grid } from "@nextui-org/react";
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "../styles/LogIn.css"

const LogIn = ({login, currentUser}) => {
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user":{ email: data.email, password: data.password}
    }
    login(userInfo)
  }

  return (
    <>
    <div className="title_logo">
    <img src="/buddy.png"/>
    <h1 id="buddy">BUDDY</h1>
    </div>
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className='container-card'>
        <Spacer y={2.5} />
        <Input css={{textAlign:'$center'}}width="250px" labelPlaceholder="Email" type='email' name='email' initialValue="" color="warning"/>
        <Spacer y={2.5} />
        <Input.Password width="250px" labelPlaceholder="Password" type='password' name='password' initialValue="" color="warning"/>

        <Spacer y={1.5} />
        <div className='buttons'>
          <Grid>
          <NavLink >
            <Button
            auto
            css={{ color: "black", bg: "#FFCD4E" }}
            type='submit'>
              Log In
            </Button>
            </NavLink>
          </Grid>
          <Spacer y={1.5} />

        </div>
      </div>
    </form>
    <Grid>
        <NavLink to="/signup">
          <Button
          auto
          css={{ color: "black", bg: "#FFCD4E" }}>
            Sign Up
          </Button>
          </NavLink>
        </Grid>
  </>
  )
}

export default LogIn