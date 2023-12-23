import { React, useState} from 'react'
import { useParams } from "react-router-dom"
import { Link, NavLink } from 'react-router-dom'
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
      <h1>Edit Your Activity</h1>
        <div className='categories'>
            <input
              onChange={handleChange}
              name='category'
              value={changeActivity?.category}
              label="CATEGORY"
              clearable
              placeholder={currentActivity?.category}
            />
            <input
              onChange={handleChange}
              name='activity_name'
              value={changeActivity?.activity_name}
              label="ACTIVITY"
              clearable
              placeholder={currentActivity?.activity_name}
            />
            <input
              onChange={handleChange}
              name='start_time'
              value={changeActivity?.start_time}
              label="TIME"
              clearable
              placeholder={currentActivity?.start_time}
            />
            <input
              onChange={handleChange}
              name='location'
              value={changeActivity?.location}
              label="LOCATION"
              clearable
              placeholder={currentActivity?.location}
            />
            <input
              onChange={handleChange}
              name='description'
              value={changeActivity?.description}
              label="INFO"
              clearable
              placeholder={currentActivity?.description}
            />
            <input
              onChange={handleChange}
              name='duration'
              value={changeActivity?.duration}
              label="DURATION"
              clearable
              type="float"
              placeholder={currentActivity?.duration}
            />
            <input
              onChange={handleChange}
              name='activity_photo'
              value={changeActivity?.activity_photo}
              label="PHOTO URL"
              clearable
              placeholder={currentActivity?.activity_photo}
            />
        </div>




    </>
  )
}

export default ActivityEdit

