import React, {useRef} from "react";
import { Input, useInput, Grid, Button, Text } from "@nextui-org/react";
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const SignUp = ({signup}) => {
  const formRef = useRef ()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user":{ email: data.email, password: data.password, name: data.name, username: data.username, gender_identity: data.gender_identity, bio: data.bio}
    }
    signup(userInfo)
    navigate("/")
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
    <Grid.Container gap={2}>
      <form ref={formRef} onSubmit={handleSubmit}>
      <Grid>
        <Input
          {...bindings}
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color}
          color="warning"
          
          helperColor={helper.color}
          helperText={helper.text}
          type="email"
          name="email"
          label="Email"
          placeholder="Enter email"
          />
      </Grid>
      <Grid>
        <Input
          clearable
          color="warning"
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
          color="warning"
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
          helperText="Insecure password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          />
      </Grid>
      <Grid>
        <Input.Password
          clearable
          color="warning"
          helperText="Insecure password"
          name="password_confirmation"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          />
      </Grid>
      <Grid>
        <Input
          clearable
          color="warning"
          initialValue=""
          helperText="Excellent username"
          name="gender_identity"
          type="text"
          label="Gender Identity"
          placeholder="Enter gender"
          />
      </Grid>
      {/* <Grid>
        <Input
          clearable
          color="warning"
          helperText="bio"
          name="bio"
          type="text"
          label="Bio"
          placeholder="Enter bio"
          />
      </Grid> */}

      <Grid>

      <Button
            onClick={handleSubmit}
            flat
            auto
            rounded
            css={{ color: "black", bg: "#FFCD4E" }}
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
      </Grid>
      <Grid>
      <NavLink to="/login">
        <Button
                // onClick={handleSubmit}
                flat
                auto
                rounded
                css={{ color: "black", bg: "#FFCD4E" }}
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
            </NavLink>
      </Grid>
    </form>
      
    </Grid.Container>
  </>
  );
};

export default SignUp;