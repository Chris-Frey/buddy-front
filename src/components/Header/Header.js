import React from "react";
import { Navbar, Text } from "@nextui-org/react";
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
  
  return (
      <>
      <Layout>
      <Navbar isBordered variant={variant}>
      <Navbar.Brand>
      <Logo />
      <Text b color="inherit" hideIn="xs">
      Buddy
      </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <NavLink to="/" >home</NavLink>
        <NavLink to="/aboutus" >about us</NavLink>
        <NavLink to={`/buddyprofile/${currentUser?.id}` }>BUDDY PROFILE</NavLink>

        </Navbar.Content>

      <Navbar.Content>
        <Navbar.Link color="inherit" href="/LogIn" onPress={handleClick}>
        Log Out
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