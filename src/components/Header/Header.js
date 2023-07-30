import React from "react";
import { Navbar, Text, css } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import Logo from "./Logo.js";
import BrowseActivityModal from "../BrowseActivity/BrowseActivityModal.js";
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";

const Header = ({currentUser, logout}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/")
  }
  const [variant, setVariant] = React.useState("static");
  const colors = ["primary", "secondary", "success", "warning", "error"]
  
  return (
      <>
      <Layout>
        <Navbar isBordered variant={variant} maxWidth={"fluid"}
          css={{
            backgroundColor: '$yellow600'
          }}
        >
          <Navbar.Brand>
          <Logo />
            <Text b color="black" hideIn="xs">
              BUDDY
            </Text>
          </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <NavLink to="/" >HOME</NavLink>
          <NavLink to="/aboutus" >ABOUT US</NavLink>
          <NavLink to={`/buddyprofile/${currentUser?.id}` }>BUDDY PROFILE</NavLink>

        </Navbar.Content>

      <Navbar.Content>
        <Navbar.Link color="inherit" href="/LogIn" onClick={handleClick}>
          LOG OUT
        </Navbar.Link>
        <Navbar.Item>
        <BrowseActivityModal />
        </Navbar.Item>
      </Navbar.Content>
      </Navbar>
      </Layout>
      </>
      )
    }
    
    export default Header