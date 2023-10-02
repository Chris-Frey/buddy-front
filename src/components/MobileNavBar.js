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
        <NavLink to={`/buddyprofile/${currentUser?.id}`}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to={`/friends/${currentUser?.id}`}>
          Friends
        </NavLink>
      </li>
      <li className='myLink'>
        <NavLink to={`/`}>
          Home
        </NavLink>
      </li>
      <li>Browse</li>
      <li className='mobile-nav-element' onClick={handleLogOut}>logout</li>
      <li className='actionButton'>+</li>
    </nav>
    </div>
    </>
  )
}
