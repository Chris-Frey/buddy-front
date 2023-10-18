import { React, useState } from "react";
import BrowseActivityModal from "./BrowseActivity/BrowseActivityModal.js";
import { NavLink } from "react-router-dom";
import AddActivityModal from "./AddActivityModal.js";
import Logo from "./Header/Logo.js"
import styles from "../styles/Header.css"


const Header = ({currentUser, logout, createActivity}) => {

  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }
  const handleLogOut = () => {
    logout()
  }

  return (
      <>
      <div className='headerBody'>

        <ul>
          <img src="/logo.png"/>
          <li >
          {openModal && <AddActivityModal handleModal={handleModal} createActivity={createActivity} currentUser={currentUser}/>}
          <button className='addActivityButton' onClick={handleModal}>CREATE ACTIVITY</button>
        </li>
          <li > <NavLink to="/" className="links">HOME</NavLink></li>
          <li> <NavLink to="/aboutus" className="links">ABOUT</NavLink></li>
          <li> <NavLink to={`/buddyprofile/${currentUser?.id}` }className="links" >YOU</NavLink></li>
          {/* <li> <BrowseActivityModal /></li> */}
          <li> <NavLink onClick={handleLogOut}className="links">LOG OUT</NavLink></li>
        </ul>

      </div>
      </>
  )
}

    export default Header