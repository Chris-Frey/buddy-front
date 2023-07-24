import React from 'react'
import { Input, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import styles from "../styles/LogIn.css"
const LogIn = () => {
  return (
    <>
    <div className='container-card'>
      <Spacer y={2.5} />
      <Input css={{textAlign:'$center'}}width="250px" labelPlaceholder="Email" initialValue="" />
      <Spacer y={2.5} />
      <Input.Password width="250px" labelPlaceholder="Password" initialValue="" />
      <Spacer y={1.5} />
      <div className='buttons'>
        <Grid>
          <Button shadow color="warning" auto>
            Sign In
          </Button>
        </Grid>
        <Spacer y={1.5} />
        <Grid>
          <Button shadow color="warning" auto>
            Sign Up
          </Button>
        </Grid>
      </div>
      <div className='link'>
        <Spacer />
        <Link color="error" href="#">
          FORGOT PASSWORD
        </Link>
      </div>
    </div>
    

  </>
  )
}

export default LogIn