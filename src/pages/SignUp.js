import React, {useRef} from "react";
import { Input, useInput, Grid, Dropdown, Button, Text } from "@nextui-org/react";
// import { Form, Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const SignUp = ({signup}) => {
  const formRef = useRef ()
  const navigate = useNavigate

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formRef.current)
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user":{ email: data.email, password: data.password, name: data.name, username: data.username, gender_identity: data.gender_identity}
    }
    signup(userInfo)
    navigate("/")
    e.target.reset()
  }

  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  
  return (
    <>
    <Grid.Container gap={4}>
      <form ref={formRef} onSubmit={handleSubmit}>
      <Grid>
        <Input
          {...bindings}
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color}
          color={helper.color}
          helperColor={helper.color}
          helperText={helper.text}
          type="email"
          name="email"
          label="Email"
          placeholder="With regex validation"
          />
      </Grid>
      <Grid>
        <Input
          clearable
          helperText="Please enter your name"
          type="text"
          label="Name"
          name="name"
          placeholder="Enter your name"
          />
      </Grid>
      <Grid>
        <Input
          clearable
          color="success"
          initialValue="John Snow"
          helperText="Excellent username"
          name="username"
          type="text"
          label="Username"
          placeholder="Enter your username"
          />
      </Grid>
      <Grid>
        <Input.Password
          clearable
          color="warning"
          initialValue="123"
          helperText="Insecure password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password with eye"
          />
      </Grid>
      <Grid>
        <Input.Password
          clearable
          color="warning"
          initialValue="123"
          helperText="Insecure password"
          name="password_confirmation"
          type="password"
          label="Confirm Password"
          placeholder="Enter your password with eye"
          />
      </Grid>
      <Grid>
        <Input
          clearable
          color="success"
          initialValue=""
          helperText="Excellent username"
          name="gender_identity"
          type="text"
          label="Gender"
          placeholder=""
          />
      </Grid>
      <Grid>
        {/* <Link to="/signup"> */}
        
      <Button
              onPress={handleSubmit}
              flat
              auto
              rounded
              css={{ color: "black", bg: "#94f9f026" }}
              >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
                >
                Sign Up
              </Text>
            </Button>
            {/* </Link> */}
      </Grid>
      <Grid>
      {/* <Link to="/login"> */}
        <Button
                onPress={handleSubmit}
                flat
                auto
                rounded
                css={{ color: "black", bg: "#94f9f026" }}
                >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  >
                  LogIn
                </Text>
              </Button>
            {/* </Link> */}
      </Grid>
    </form>
      
    </Grid.Container>
  </>
  );
};

export default SignUp;