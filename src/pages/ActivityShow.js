import React, { useState } from 'react'
import PictureCard from "../components/PictureCard";
import { Card, Text } from "@nextui-org/react";
import { useParams, Link, NavLink } from "react-router-dom"
import styles from '../styles/ActivityShow.css'


const ActivityShow = ({activities, deleteActivity, currentUser, createUserActivity}) => {


  const { id } = useParams()
  let currentActivity = activities?.find((activity) => activity.id === +id)

  const handleDelete = () => {
    deleteActivity(currentActivity?.id)
  }

  const [userActivityState] = useState({
    user_id: currentUser?.id,
    activity_id: currentActivity?.id
  })

  const [buddyUp, setBuddyUp] = useState(false)

  const submitHandler = () => {
      setBuddyUp(!buddyUp)
    createUserActivity(userActivityState)
  }


  return (
    <>
    <div className='activityShowBody'>

        {/* <img currentActivity={currentActivity}/> */}

        {/* <p>{currentActivity?.category}</p> */}

        <h2>ACTIVITY NAME</h2>
        <p>
        {currentActivity?.activity_name}</p>

        <h2>Time</h2>
        <p>{currentActivity?.start_time}</p>

        <h2>Duration</h2>
        <p> {currentActivity?.duration}</p>

        <h2>Location</h2>
        <p> {currentActivity?.location}</p>

        <h2>Info</h2>
        <p>{currentActivity?.description}</p>

        <h2>Activity Owner</h2>
        <p>{currentUser?.name}</p>

        <h2>Attendees</h2>
        {buddyUp?
          <p>{currentUser.name}</p>
        :null}

      </div>
      <div className='show_links'>
        <NavLink to={`/`}>
          <button className='button' onClick={handleDelete}>DELETE</button>
        </NavLink>

        <NavLink to={`/`}>
          <button className='button'>CANCEL</button>
        </NavLink>

        <NavLink to={`/activityedit/${currentActivity.id}`}>
          <button className='button'>EDIT</button>
        </NavLink>
          {/* <button className='button' onClick={submitHandler}>Buddy Up</button> */}
      </div>
    </>
  )
}

export default ActivityShow

