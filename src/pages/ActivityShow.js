import React from 'react'
import PictureCard from "../components/PictureCard";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import { useParams, Link } from "react-router-dom"


const ActivityShow = ({activities, deleteActivity}) => {
    const { id } = useParams()
    let currentActivity = activities?.find((activity) => activity.id === +id)
  
    const handleDelete = () => {
      deleteActivity(currentActivity?.id)
    }


  return (
    <>
      <div>Your Activity</div>

      <div className='activityShowBody'>
        <PictureCard currentActivity={currentActivity}/>
        <Card css={{ w: 500, h: "70vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
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

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Attendees</Text>

        <Text size={13} h3 color="white">3</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Info</Text>

        <Text size={13} h3 color="white">{currentActivity?.description}</Text>
        
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
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Buddy Up
              </Text>
            </Button>
            <Link to="/">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
              onPress={handleDelete}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Delete
              </Text>
            </Button>
            </Link>
            <Link to={`/activityedit/${currentActivity?.id}`}>
            <Button
              flat
              auto
              rounded
              css={{ color: "warning", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Edit
              </Text>
            </Button>
            </Link>
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