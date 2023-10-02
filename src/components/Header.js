import React from "react";
import BrowseActivityModal from "./BrowseActivity/BrowseActivityModal.js";
// import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import Logo from "./Header/Logo.js"
import styles from "../styles/Header.css"


const Header = ({currentUser, logout}) => {
  // const navigate = useNavigate()
  const handleLogOut = () => {
    logout()
  }
  const [variant, setVariant] = React.useState("static");
 const styled = {
  color: 'black',
 }

  return (
      <>
      <div className='headerBody'>

        <ul>
          <img src="/logo.png"/>
          <li> <NavLink to="/" >HOME</NavLink></li>
          <li> <NavLink to="/aboutus" >ABOUT</NavLink></li>
          <li> <NavLink to={`/buddyprofile/${currentUser?.id}` } >PROFILE</NavLink></li>
          <li> <BrowseActivityModal /></li>
          <li> <NavLink onClick={handleLogOut}>LOG OUT</NavLink></li>
        </ul>

      </div>
      </>
  )
}

    export default Header