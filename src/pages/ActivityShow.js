import React, { useState } from 'react'
import PictureCard from "../components/PictureCard";
import { Card, Text } from "@nextui-org/react";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import { useParams, Link, NavLink } from "react-router-dom"
import styles from '../styles/ActivityShow.css'
import shadows from '@mui/material/styles/shadows';


const ActivityShow = ({activities, deleteActivity, currentUser, createUserActivity}) => {


  const { id } = useParams()
  let currentActivity = activities?.find((activity) => activity.id === +id)

  const handleDelete = () => {
    deleteActivity(currentActivity?.id)
  }

  const [userActivityState, setUserActivityState] = useState({
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
      <div>
        <img currentActivity={currentActivity}/>
        <div/>

          <Text>{currentActivity?.category}</Text>

        <Text>ACTIVITY NAME</Text>

        <Text>
        {currentActivity?.activity_name}</Text>

        <Text>Time</Text>

        <Text>{currentActivity?.start_time}</Text>

        <Text>Duration</Text>

        <Text> {currentActivity?.duration}</Text>

        <Text>Location</Text>

        <Text> {currentActivity?.location}</Text>

        <Text>Info</Text>

        <Text>{currentActivity?.description}</Text>

        <Text>CREATOR ID</Text>

        <Text>{currentUser?.id}</Text>

        <Text>Attendees</Text>

        {buddyUp?
          <Text>{currentUser.name}</Text>
        :null}

  </div>
    <div className='show_links'>
      <NavLink to={`/`}>
        <button  onClick={handleDelete}>DELETE</button>
      </NavLink>

      <NavLink to={`/`}>
        <button>CANCEL</button>
      </NavLink>

      <NavLink to={`/activityedit/${currentActivity.id}`}>
        <button>EDIT</button>
      </NavLink>
        <button onClick={submitHandler}>Buddy Up</button>
    </div>

        <AddActivityModal />
    </>
  )
}

export default ActivityShow

