import React, { useState } from 'react'
import PictureCard from "../components/PictureCard";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import { useParams, Link, NavLink } from "react-router-dom"
import styles from '../styles/ActivityShow.css'


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
      <div className='cards'>
        <PictureCard currentActivity={currentActivity}/>
        <div className='activityShowBody'>
        <Card css={{ w: 400, h: "70vh" }}>
          <Card.Header className='activity-card' css={{ color: 'white', bg: 'black' }}>
          <Text size={24} weight="bold" transform="uppercase" color="white">{currentActivity?.category}</Text>
    </Card.Header>
    
    <Card.Body css={{ p: 0, color: "#94f9f0" ,bg: "#030303" }}>
    <Col>
  

        <Text size={15} weight="bold" transform="uppercase" color="yellow">ACTIVITY NAME</Text>

        <Text size={13} h3 color="white">
        {currentActivity?.activity_name}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Time</Text>

        <Text size={13} h3 color="white">{currentActivity?.start_time}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Duration</Text>

        <Text size={13} h3 color="white"> {currentActivity?.duration}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Location</Text>

        <Text size={13} h3 color="white"> {currentActivity?.location}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Info</Text>

        <Text size={13} h3 color="white">{currentActivity?.description}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">CREATOR ID</Text>

        <Text size={13} h3 color="white">{currentUser?.id}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Attendees</Text>

        {buddyUp?
          <Text size={13} h3 color="white">{currentUser.name}</Text>
        :null}
        
      </Col>
    </Card.Body>
  </Card>
  </div>
  
            <NavLink to={`/`}>
              <button onClick={handleDelete}>DELETE</button>
            </NavLink>

            <NavLink to={`/`}>
              <button>CANCEL</button>
            </NavLink>

            <NavLink to={`/activityedit/${currentActivity.id}`}>
              <button>EDIT</button>
            </NavLink>

              <button onClick={submitHandler} >Buddy Up</button>

            </div>
        <AddActivityModal />

    </>
  )
}

export default ActivityShow

