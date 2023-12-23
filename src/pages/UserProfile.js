import { React, useEffect, useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/BuddyProfile.css";
import { useParams, Link } from 'react-router-dom';
import ProfilePhotoCard from '../components/ProfilePhotoCard';

const BuddyProfile = ({currentUser, userActivity, activities, grantAccess}) => {

  const { id } = useParams()
  const today = new Date()
  const filteredActivities = userActivity.filter(activity => {
    return +activity.user_id === +currentUser?.id
  })

  const activityArray = []
  const myEvents = filteredActivities.map(event => {
    return activityArray.push(event?.activity_id)
  })
// shows a list of activities that you signed up for, and the start time has not expired yet.
  const myActivities = activities.map(activity => {
    let startTimeinMillliseconds = Date.parse(activity.start_time)

    if(activityArray.includes(activity.id) &&
    startTimeinMillliseconds > today.getTime()) {
      return <ul className='activity-list'>
        <Link to={`/activityshow/${activity?.id}`} >{activity?.activity_name}</Link></ul>
    }
  })

  return (
    <>
    <div className='myProfileBody'>
        {/* <FontAwesomeIcon className='peace' icon="fa-solid fa-peace" size="2xl" style={{color: "#ea5353",}} /> */}
        <ProfilePhotoCard/>

      <div className='userCard'>
        <ul>
          <li>NAME</li>
          <li className='categoryValue'>{currentUser?.name}</li>
          <li className='categoryReturn'>currentusername</li>
          <li className='categoryValue'>{`${currentUser?.name}`}</li>

          <li className='categoryReturn'>USER NAME</li>
          <li className='categoryValue'>{currentUser?.username}</li>

          <li className='categoryReturn'>GENDER IDENTITY</li>
          <li className='categoryValue'>{currentUser?.gender_identity}</li>

          <li className='categoryReturn'>EVENTS YOU'RE ATTENDING</li>
          <li className='categoryValue'>{myActivities}</li>

          <li className='categoryReturn'>FRIENDS</li>
          {/* <li className='categoryValue'>{myActivities}</li> */}
        </ul>
      </div>
    </div>

    </>
  );
}
export default BuddyProfile
