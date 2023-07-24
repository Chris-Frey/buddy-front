import { React } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Link } from 'react-router-dom'

const DetailsCard = ({currentActivity}) => {

  return(
   
  <>
  <Card css={{ w: 500, h: "70vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={24} weight="bold" transform="uppercase" color="white">{currentActivity.category}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">ACTIVITY NAME</Text>

        <Text size={13} h3 color="white">
        {currentActivity.activity}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Time</Text>

        <Text size={13} h3 color="white">{currentActivity.start_time}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Duration</Text>

        <Text size={13} h3 color="white"> {currentActivity.duration}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Location</Text>

        <Text size={13} h3 color="white"> {currentActivity.location}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Attendees</Text>

        <Text size={13} h3 color="white">3</Text>

        <Text size={15} weight="bold" transform="uppercase" color="yellow">Info</Text>

        <Text size={13} h3 color="white">{currentActivity.description}</Text>
        
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
                Delete
              </Text>
            </Button>
            <Link to="/activityedit">
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
                Edit
              </Text>
            </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </>
  )
    };
export default DetailsCard
