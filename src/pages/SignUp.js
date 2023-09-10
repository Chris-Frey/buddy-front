import React, {useRef} from "react";
import { Input, useInput, Spacer, Button, Text } from "@nextui-org/react";
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignUp.css"

const SignUp = ({signup}) => {
  const formRef = useRef ()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    // stores the form entries in a variable
    const formData = new FormData(formRef.current)
    // creates an object from entries
    const data = Object.fromEntries(formData)
    // stores user info in a format for JWT
    const userInfo = {
      "user":{ email: data.email, password: data.password, name: data.name, username: data.username, gender_identity: data.gender_identity, bio: data.bio}
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
    <div className="title_logo">
    <img src="/buddy.png"/>
    <h1 id="buddy">BUDDY</h1>
    </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="container">
        <Spacer y={1} />
            <Input
            {...bindings}
            clearable
            width="300px"
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
        <Spacer y={1} />
          <Input
            clearable
            color="warning"
            helperText="Please enter your name"
            width="300px"
            type="text"
            label="Name"
            name="name"
            placeholder="Enter your name"
            />
        <Spacer y={1} />
          <Input
            clearable
            color="warning"
            width="300px"
            helperText="Excellent username"
            name="username"
            type="text"
            label="Username"
            placeholder="Enter your username"
            />
        <Spacer y={1} />
          <Input.Password
            clearable
            color="warning"
            helperText="Insecure password"
            width="300px"
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            />
        <Spacer y={1} />
          <Input.Password
            clearable
            color="warning"
            helperText="Insecure password"
            name="password_confirmation"
            width="300px"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            />
        <Spacer y={1} />
          <Input
            clearable
            color="warning"
            initialValue=""
            width="300px"
            helperText="Excellent username"
            name="gender_identity"
            type="text"
            label="Gender Identity"
            placeholder="Enter gender"
            />

  <div className="buttons">
       <Spacer y={1} />

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
        <Spacer y={1} />
        <NavLink to="/login">
          <Button
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
      </div>
      </div>
      </form>
    </>
  );
};

export default SignUp;