import React from 'react'
// import { Container, Image } from '@nextui-org/react';
import styles from "../styles/BuddyProfile.css";
import { Card, Col, Text } from "@nextui-org/react";
import { useParams, Link } from 'react-router-dom';
import AddActivityModal from '../components/AddActivityModal'

const BuddyProfile = ({currentUser, userActivity, activities}) => {

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
    <div className='myProfileBody'>
      <h1 className='your_profile'>
        You
      </h1>

      <div className='userCard'>
        <ul>
          <li >NAME</li>
          <li className='categoryValue'>{currentUser?.name}</li>
          <li>USER NAME</li>
          <li className='categoryValue'>{currentUser?.username}</li>
          <li>GENDER IDENTITY</li>
          <li className='categoryValue'>{currentUser?.gender_identity}</li>
          <li>EVENTS YOU'RE ATTENDING</li>
          <li className='categoryValue'>{myActivities}</li>
          <li>FRIENDS</li>
          {/* <li className='categoryValue'>{myActivities}</li> */}
        </ul>
      </div>
    </div>

    </>
  );
}
export default BuddyProfile
