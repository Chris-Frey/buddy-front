import { React, useState} from 'react'
import { useParams } from "react-router-dom"
import { Card, Col, Row, Button, Text, Input } from "@nextui-org/react";
import PictureCard from "../components/PictureCard";
import { Link } from 'react-router-dom'
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'

const ActivityEdit = ({activities, updateActivity}) => {
    const { id } = useParams()
    let currentActivity = activities.find((activity) => activity.id === +id)

    const [changeActivity, setChangeActivity] = useState({
      category: currentActivity?.category,
      activity: currentActivity?.activity,
      start_time: currentActivity?.start_time,
      duration: currentActivity?.duration,
      location: currentActivity?.location,
      description: currentActivity?.description,
      activity_photo: currentActivity?.activity_photo,
      creator_id: currentActivity?.creator_id
    })
    const handleChange = (e) => {
      setChangeActivity({...changeActivity, [e.target.name]: e.target.value})
    }
  console.log(activities);
    const submitHandler = () => {
      updateActivity(changeActivity, currentActivity?.id);
      console.log(changeActivity);
    }

  return (
    <>
      <div>Your Activity</div>
      <div className='activityEditBody'>
        <PictureCard currentActivity={currentActivity}/>

        <Card css={{ w: 500, h: "75vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>

    </Card.Header>
    <Card.Body css={{ p: 0, color: "#94f9f0" ,bg: "white" }}>
       <Input
        onChange={handleChange} 
        name='category'
        value={changeActivity?.category}
        label="CATEGORY"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder={currentActivity?.category}
        contentLeft={<Text fill="currentColor" />}
      />
      <Input
        onChange={handleChange} 
        name='activity_name'
        value={changeActivity?.activity_name}
        label="ACTIVITY"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder={currentActivity?.activity_name}
        contentLeft={<Text fill="currentColor" />}
      />
      <Input
        onChange={handleChange} 
        name='start_time'
        value={changeActivity?.start_time}
        label="TIME"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder={currentActivity?.start_time}
        contentLeft={<Text fill="currentColor" />}
      />
      <Input
        onChange={handleChange} 
        name='location'
        value={changeActivity?.location}
        label="LOCATION"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder={currentActivity?.location}
        contentLeft={<Text fill="currentColor" />}
      />
      <Input
        onChange={handleChange} 
        name='description'
        value={changeActivity?.description}
        label="INFO"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder={currentActivity?.description}
        contentLeft={<Text fill="currentColor" />}
      />
      <Input
        onChange={handleChange} 
        name='duration'
        value={changeActivity?.duration}
        label="DURATION"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        type="float"
        placeholder={currentActivity?.duration}
        contentLeft={<Text fill="currentColor" />}
      />
      <Input
        onChange={handleChange} 
        name='activity_photo'
        value={changeActivity?.activity_photo}
        label="PHOTO URL"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder={currentActivity?.activity_photo}
        contentLeft={<Text fill="currentColor" />}
      />
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
          <Row justify="flex-end">
            <Link to={`/activityshow/${currentActivity?.id}`}>
            <Button
             onPress={submitHandler}
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
                Save
              </Text>
            </Button>
            </Link>
            
            <Link to={`/activityshow/${currentActivity?.id}`}>
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
               Cancel
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

export default ActivityEdit