import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/BuddyProfile.css";
import { useParams, Link, NavLink } from 'react-router-dom';
import AddActivityModal from '../components/AddActivityModal'
import ProfilePhotoCard from '../components/ProfilePhotoCard';

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
        {/* <FontAwesomeIcon className='peace' icon="fa-solid fa-peace" size="2xl" style={{color: "#ea5353",}} /> */}
        <ProfilePhotoCard/>

      <div className='userCard'>
        <ul>
          <li>NAME</li>
          <li className='categoryValue'>{currentUser?.name}</li>
          <li>USER NAME</li>
          <li className='categoryValue'>{currentUser?.username}</li>
          <li>GENDER IDENTITY</li>
          <li className='categoryValue'>{currentUser?.gender_identity}</li>
          <li>EVENTS YOU'RE ATTENDING</li>
          <li className='categoryValue'>{myActivities}</li>
          <li>FRIENDS</li>
        </ul>
      </div>
      <div>
        <NavLink to={`/buddyprofile/edit/${id}`}>
          <button className='profile-button'>Edit Profile</button>
        </NavLink>
      </div>
    </div>

    </>
  );
}
export default BuddyProfile
