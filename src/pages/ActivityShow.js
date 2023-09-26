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
      <div className='activity_pic'>
        <PictureCard currentActivity={currentActivity}/>
        <div/>
        <div className='card_and_links'>
        <div className='activityShowBody'>
        <Card css={{ w: 400, h: "70vh" }}>
          <Card.Header  className='activity-card' css={{ pl: 150, color: 'white', bg: 'black'}}>
          <Text size={24} weight="bold" transform="uppercase" color="white">{currentActivity?.category}</Text>
    </Card.Header>

    <Card.Body css={{ pl: 50, color: "#94f9f0" ,bg: "#030303" }}>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">ACTIVITY NAME</Text>

        <Text size={13} h3 color="white">
        {currentActivity?.activity_name}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">Time</Text>

        <Text size={13} h3 color="white">{currentActivity?.start_time}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">Duration</Text>

        <Text size={13} h3 color="white"> {currentActivity?.duration}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">Location</Text>

        <Text size={13} h3 color="white"> {currentActivity?.location}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">Info</Text>

        <Text size={13} h3 color="white">{currentActivity?.description}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">CREATOR ID</Text>

        <Text size={13} h3 color="white">{currentUser?.id}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">Attendees</Text>

        {buddyUp?
          <Text size={13} h3 color="white">{currentUser.name}</Text>
        :null}
    </Card.Body>
  </Card>
  </div>
          <div className='show_links'>
            <NavLink to={`/`}>
              <button className='show_button' size={50} onClick={handleDelete}>DELETE</button>
            </NavLink>

            <NavLink to={`/`}>
              <button className='show_button' size={50}>CANCEL</button>
            </NavLink>

            <NavLink to={`/activityedit/${currentActivity.id}`}>
              <button className='show_button' size={50}>EDIT</button>
            </NavLink>

              <button onClick={submitHandler} className='show_button' size={50} >Buddy Up</button>

            </div>
            </div>
        <AddActivityModal />
          </div>
    </>
  )
}

export default ActivityShow

