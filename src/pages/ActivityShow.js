import React from 'react'
import PictureCard from "../components/PictureCard";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import { useParams, Link, NavLink } from "react-router-dom"
import styles from '../styles/ActivityShow.css'


const ActivityShow = ({activities, deleteActivity}) => {
    const { id } = useParams()
    let currentActivity = activities?.find((activity) => activity.id === +id)
  
    const handleDelete = () => {
      deleteActivity(currentActivity?.id)
    }


  return (
    <>
      <div className='activityShowBody'>
        <PictureCard currentActivity={currentActivity}/>
        <Card css={{ w: 500, h: "70vh" }}>
    <Card.Header className='activity-card' css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={24} weight="bold" transform="uppercase" color="white">{currentActivity?.category}</Text>

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

        <Text size={13} h3 color="white">{currentActivity?.creator_id}</Text>
        
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0, color: "#94f9f0" ,bg: "#030303" }}>
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            
            <NavLink to={`/`}>
              <button onClick={handleDelete}>DELETE</button>
            </NavLink>

            <NavLink to={`/`}>
              <button>CANCEL</button>
            </NavLink>

            <NavLink to={`/activityedit/${currentActivity.id}`}>
              <button>EDIT</button>
            </NavLink>
            
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
        <AddActivityModal />
      </div>
    </>
  )
}

export default ActivityShow