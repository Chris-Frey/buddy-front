import React from "react";
import { Input, useInput, Grid, Dropdown, Button, Text } from "@nextui-org/react";
import { Link } from 'react-router-dom'

const SignUp = () => {
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
          label="Email"
          placeholder="With regex validation"
        />
      </Grid>
      <Grid>
        <Input
          clearable
          helperText="Please enter your name"
          label="Name"
          placeholder="Enter your name"
        />
      </Grid>
      <Grid>
        <Input
          clearable
          color=""
          helperText="Required"
          label="Age"
          placeholder="Enter your Age"
        />
      </Grid>
      <Grid>
        <Input
          clearable
          color="success"
          initialValue="John Snow"
          helperText="Excellent username"
          type="test"
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
          type="password"
          label="Password"
          placeholder="Enter your password with eye"
        />
      </Grid>
      <Grid>
        <Dropdown>
          <Dropdown.Button color="warning" flat>
            Gender Identity
          </Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="male">Male</Dropdown.Item>
            <Dropdown.Item key="female">Female</Dropdown.Item>
            <Dropdown.Item key="non-binary">Non-Binary</Dropdown.Item>
            <Dropdown.Item key="other">Other</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
      </Grid>
      <Grid>
        <Link to="/signup">
        
      <Button
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
            </Link>
      </Grid>
      <Grid>
      <Link to="/login">
        <Button
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
            </Link>
      </Grid>
      
    </Grid.Container>
  </>
  );
};

export default SignUp;