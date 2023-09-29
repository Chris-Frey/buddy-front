import React from "react";
import { Navbar, Text, css } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import BrowseActivityModal from "../BrowseActivity/BrowseActivityModal.js";
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import Logo from "./Logo.js"


const Header = ({currentUser, logout}) => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    logout()
  }
  const [variant, setVariant] = React.useState("static");
 const styled = {
  color: 'black',
 }

  return (
      <>
      <Layout>
        <Navbar isBordered variant={variant} maxWidth={"fluid"}
          css={{
            backgroundColor: '#5f7080'
          }}
        >
          <Navbar.Brand>
            <img src="/logo.png"/>
          </Navbar.Brand>

          <Navbar.Content>
            <NavLink style={styled} to="/" >HOME</NavLink>
            <NavLink style={styled} to="/aboutus" >ABOUT</NavLink>
            <NavLink style={styled} to={`/buddyprofile/${currentUser?.id}` } >PROFILE</NavLink>
          </Navbar.Content>

          <Navbar.Content>
          <Navbar.Item>
            <BrowseActivityModal />
            </Navbar.Item>
            <Navbar.Item onClick={handleLogOut}>LOG OUT</Navbar.Item>
          </Navbar.Content>
        </Navbar>
      </Layout>
      </>
  )
}

    export default Header