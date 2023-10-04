import React from 'react'
import styles from '../styles/MobileNavBar.css'
import { NavLink } from 'react-router-dom'

export const MobileNavBar = ({currentUser, logout}) => {
  const handleLogOut = () => {
    logout()
  }

  return (
    <>
    <div className='mobileBody'>
      <nav className='navBar'>
        <li>
          <NavLink to={`/buddyprofile/${currentUser?.id}`} className='myLink'>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to={`/friends/${currentUser?.id}`} className='myLink'>
            Friends
          </NavLink>
        </li>
        <li >
          <NavLink to={`/`} className='myLink' >
            Home
          </NavLink>
        </li>
        <li >
          <NavLink to={`/`} className='myLink' >
            Browse
          </NavLink>
        </li>

        <li className='myLink' onClick={handleLogOut}>logout</li>
        <div className='actionButton'>
          <li>+</li>
        </div>
      </nav>
    </div>
    </>
  )
}
