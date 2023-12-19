import React, { useState } from 'react'
import { useParams, NavLink } from "react-router-dom"
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
        <p>{currentActivity?.creator_id}</p>

        <h2>Attendees</h2>
        {buddyUp?
          <p>{currentUser.name}</p>
        :null}
      {currentUser.id === currentActivity?.creator_id  && (
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
        </div>
      )}
      {currentUser.id !== currentActivity?.creator_id && (
        <button className='button' onClick={submitHandler}>ATTEND ACTIVITY!</button>
      )}

    </div>

    </>
  )
}

export default ActivityShow

