import React, { useState } from 'react'
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

        {/* <h1>ACTIVITY NAME</h1> */}
      <h1>{currentActivity?.activity_name}</h1>

      <div className='activityData'>
        <div className='eventComponent'>
          <h2>Time</h2>
          <p>{currentActivity?.start_time}</p>
        </div>

        <div className='eventComponent'>
          <h2>Duration</h2>
          <p> {currentActivity?.duration}</p>
        </div>

        <div className='eventComponent'>
          <h2>Location</h2>
          <p> {currentActivity?.location}</p>
        </div>

          <div className='eventComponent'>
          <h2>Info</h2>
          <p>{currentActivity?.description}</p>
        </div>

        <div className='eventComponent'>
          <h2>Activity Owner</h2>
          <p>{currentActivity?.creator_id}</p>
        </div>
      </div>

        {/* <h2>Attendees</h2> */}
        {buddyUp?
          <p>{currentUser.name}</p>
        :null}

      {currentUser.id === currentActivity?.creator_id  && (
        <div className='show_links'>

          <NavLink to={`/activityedit/${currentActivity.id}`}>
            <button className='button'>Edit</button>
          </NavLink>

          <NavLink to={`/`}>
            <button className='button'>Cancel</button>
          </NavLink>
          <div className='deleteLink'>
          <NavLink to={`/`}>Delete</NavLink>
          </div>
        </div>
      )}
      {currentUser.id !== currentActivity?.creator_id && (
        <button className='button' onClick={submitHandler}>Let's Go!</button>
      )}

    </div>

    </>
  )
}

export default ActivityShow

