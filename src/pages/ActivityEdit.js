import { React, useState} from 'react'
import { useParams } from "react-router-dom"
import { Card, Col, Row, Button, Text, Input } from "@nextui-org/react";
import PictureCard from "../components/PictureCard";
import { Link, NavLink } from 'react-router-dom'
import AddActivityModal from '../components/AddActivityModal'
import styles from "../styles/ActivityEdit.css";

const ActivityEdit = ({activities, updateActivity}) => {
    const { id } = useParams()

    let currentActivity = activities?.find((activity) => activity.id === +id)

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

    const submitHandler = () => {
      updateActivity(changeActivity, currentActivity?.id);
    }

  return (
    <>
      <div>Your Activity</div>
      <div className='activityEditBody'>
        <div className='edit-pic'>
        <PictureCard currentActivity={currentActivity}/>
        </div>
        <div className='card-body'>
        <Card css={{ w: 400, h: "80vh", color: 'white' }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          </Card.Header>
          <Card.Body css={{ p: 5, color: "#94f9f0" ,bg: "white" }}>
            <Input
              onChange={handleChange}
              name='category'
              value={changeActivity?.category}
              label="CATEGORY"
              clearable
              bordered
              fullWidth
              color="black"
              size="lg"
              placeholder={currentActivity?.category}
              contentLeft={<Text fill="white" />}
            />
            <Input
            text="white"
              onChange={handleChange}
              name='activity_name'
              value={changeActivity?.activity_name}
              label="ACTIVITY"
              clearable
              bordered
              fullWidth
              color="black"
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
              color="black"
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
              color="black"
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
              color="black"
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
              color="black"
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
              color="black"
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
                  <NavLink to={`/activityshow/${currentActivity?.id}`}>
                  <button>CANCEL</button>
                  </NavLink>

                  <NavLink to={`/activityshow/${currentActivity?.id}`}>
                  <button onClick={submitHandler}>SAVE</button>
                  </NavLink>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        </div>
      </div>
    </>
  )
}

export default ActivityEdit

