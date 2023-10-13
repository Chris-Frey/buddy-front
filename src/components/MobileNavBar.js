import { React, useState } from 'react'
import styles from '../styles/MobileNavBar.css'
import { NavLink } from 'react-router-dom'
import AddMobileActivityModal from './AddMobileActivityModal'

export const MobileNavBar = ({currentUser, logout, createActivity}) => {



  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleLogOut = () => {
    logout()
  }

  return (
    <>
    <div className='mobileBody'>

      {openModal && <AddMobileActivityModal handleModal={handleModal} createActivity={createActivity} currentUser={currentUser}/>}

      <button className='mobileActivityButton' onClick={handleModal}>Create Activity</button>

      <nav className='navBar'>

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

        <li className='myLink' onClick={handleLogOut}>logout</li>
        {/* <div className='actionButton'>
        </div> */}
         <li >
          <NavLink to={`/`} className='myLink' >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/buddyprofile/${currentUser?.id}`} className='myLink'>
            You
          </NavLink>
        </li>
      </nav>
    </div>
    </>
  )
}
