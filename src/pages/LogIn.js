import React from 'react'
import { Input, Spacer, Button, Grid } from "@nextui-org/react";
import { Link } from 'react-router-dom'
// import styles from "../styles/LogIn.css"
import { useNavigate } from 'react-router-dom';

const LogIn = ({login}) => {
  const formRef = useRef ()
  const navigate = useNavigate

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formRef.current)
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user":{ email: data.email, password: data.password}
    }
    login(userInfo)
    navigate("/")
    e.target.reset()
  }


  return (
    <>
    <form ref={formRef} onSubmit={handleSubmit}>
    <div className='container-card'>
      <Spacer y={2.5} />
      <Input css={{textAlign:'$center'}}width="250px" labelPlaceholder="Email" type='email' name='email' initialValue="" />
      <Spacer y={2.5} />
      <Input.Password width="250px" labelPlaceholder="Password" type='password' name='password' initialValue="" />
      <Spacer y={1.5} />
      <div className='buttons'>
        <Grid>
        <Link to="/Home">
          <Button shadow color="warning" auto>
            Sign In
          </Button>
          </Link>
        </Grid>
        <Spacer y={1.5} />
        <Grid>
        <Link to="/buddyprofile">
          <Button shadow color="warning" auto>
            Sign Up
          </Button>
          </Link>
        </Grid>
      </div>
      <div className='link'>
        <Spacer />
        <Link color="error" href="#">
          FORGOT PASSWORD
        </Link>
      </div>
    </div>
    </form>
    

  </>
  )
}

export default LogIn