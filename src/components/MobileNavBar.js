import { React, useState } from 'react'
import styles from '../styles/MobileNavBar.css'
import { NavLink } from 'react-router-dom'
import AddMobileActivityModal from './AddMobileActivityModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MobileNavBar = ({currentUser, logout, createActivity}) => {


  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }

  // const handleLogOut = () => {
  //   logout()
  // }

  return (
    <>
    <div className='mobileBody'>

      {openModal && <AddMobileActivityModal handleModal={handleModal} createActivity={createActivity} currentUser={currentUser}/>}

      <nav className='navBar'>
      <li>
        <NavLink to={`/buddyprofile/${currentUser?.id}`} className='myLink'>
          <FontAwesomeIcon icon="fa-solid fa-user" size="2xl" style={{color: "#e7e5da",}} />
        </NavLink>
        </li>
      <li>
      <FontAwesomeIcon icon="fa-solid fa-square-plus" size="2xl" style={{color: "#ffffff",}} onClick={handleModal}/>
      </li>

        {/* <li>
          <NavLink to={`/friends/${currentUser?.id}`} className='myLink'>
            Friends
          </NavLink>
        </li> */}

        {/* <li >
          <NavLink to={`/`} className='myLink' >
            Browse
          </NavLink>
        </li> */}

        {/* <li className='myLink' onClick={handleLogOut}>logout</li> */}
        {/* <div className='actionButton'>
        </div> */}
         <li >
          <NavLink to={`/`} className='myLink' >
            <FontAwesomeIcon icon="fa-solid fa-house" size="2xl" style={{color: "#ffffff",}} />
          </NavLink>
        </li>
      </nav>
    </div>
    </>
  )
}
