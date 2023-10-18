import React from 'react'
// import { Container, Image } from '@nextui-org/react';
import styles from "../styles/BuddyProfile.css";
import { Card, Col, Text } from "@nextui-org/react";
import { useParams, Link } from 'react-router-dom';
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'

const ProfileShow = ({currentUser, userActivity, activities}) => {

  const { id } = useParams()

  const filteredActivities = userActivity.filter(activity => {
    return +activity.user_id === +currentUser?.id
  })

  const activityArray = []
  const myEvents = filteredActivities.map(event => {
    return activityArray.push(event?.activity_id)
  })

  const myActivities = activities.map(activity => {
    if(activityArray.includes(activity.id)) {
      return <ul className='activity-list'>
        <Link to={`/activityshow/${activity?.id}`} >{activity?.activity_name}</Link></ul>
    }
  })

  return (
    <>
    <div className='profileBody'>
    <h1 className='your_profile'>
      You
    </h1>
    <div className='pic_info_buddy'>
      <img
          className="profileimg1"
          src="src/assets/kaylee.jpg"
          alt="Default Image"
          />
    <div className='pic_fields'>


        <Card className="profile-card" css={{ w: 400, h: "50vh", bg: "Black", pl: "30px"}}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5}}>
          <Col>
            <Text size={15} weight="bold" transform="uppercase"color="#FFCD4E" >NAME</Text>

            <Text size={13} h3 color="White" >
            {currentUser?.name}</Text>

            <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E" > USER NAME</Text>

            <Text size={13} h3 color="White">
            {currentUser?.username}</Text>

            <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">Gender Identity</Text>

            <Text size={13} h3 color="White"> {currentUser?.gender_identity}</Text>

            <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">My Events</Text>

            <Text size={13} h3 color="White" >{myActivities}</Text>
          </Col>
        </Card.Header>
      </Card>
       </div>
      </div>

      {/* <div className='modal'>
      <AddActivityModal />
      </div> */}
          </div>
    </>

  );
}
export default ProfileShow
