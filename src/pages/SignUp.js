import React, {useRef} from "react";
import { useInput } from "@nextui-org/react";
import { NavLink } from 'react-router-dom'
import styles from "../styles/SignUp.css"

const SignUp = ({signup}) => {
  const formRef = useRef ()

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
  }

  const { value } = useInput("");

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
    <div className="signupBody">
      <div className="title_logo">
      <img src="/logo.png"/>

      </div>
      <h1 id="buddy">Promptu</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="signupForm">
      <input
        type='email'
        name='email'
        placeholder='Email'
      />
      <input
        type='text'
        name='first_name'
        placeholder='First Name'
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
      />
      <input
        type='password'
        name='confirm_password'
        placeholder='Confirm Password'
      />
      <div className="buttons">
        <NavLink to={`/`}>
            <button className='button'>Confirm Signup</button>
        </NavLink>
        <NavLink to="/login" className='signup'>
          Already Signed up?
        </NavLink>
      </div>
      </form>
    </div>
    </>
  );
};

export default SignUp;