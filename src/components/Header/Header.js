import React from "react";
import { Navbar, Text, css } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import BrowseActivityModal from "../BrowseActivity/BrowseActivityModal.js";
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom"
import Logo from "./Logo.js"


const Header = ({currentUser, logout}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/")
  }
  const [variant, setVariant] = React.useState("static");
  const colors = ["primary", "secondary", "success", "warning", "error"]
 const styled = {
  color: 'black',
 }
  
  return (
      <>
      <Layout>
        <Navbar isBordered variant={variant} maxWidth={"fluid"}
          css={{
            backgroundColor: '$yellow600'
          }}
        >
          <Navbar.Brand>
            <Logo/>
            <img width={100}  src="/buddy.png"/>
            
            <Text b color="black" weight={"bold"} size={30} hideIn="xs">
              BUDDY
            </Text>
          </Navbar.Brand>

          <Navbar.Content>
            <NavLink style={styled} to="/" >HOME</NavLink>
            <NavLink style={styled} to="/aboutus" >ABOUT US</NavLink>
            <NavLink style={styled} to={`/buddyprofile/${currentUser?.id}` } >BUDDY PROFILE</NavLink>
          </Navbar.Content>

          <Navbar.Content>
          <Navbar.Link href="/login" onClick={handleClick}>
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