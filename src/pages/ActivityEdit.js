import React from 'react'
import { useParams } from "react-router-dom"
import PictureCard from "../components/PictureCard";
import EditCard from "../components/EditCard";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'



const ActivityEdit = (props) => {
    const { id } = useParams()
    let currentActivity = props.activities.find((activity) => activity.id === +id)


  return (
    <>
      <div>Your Activity</div>
      <div className='activityEditBody'>
        <PictureCard />
        <EditCard currentActivity={currentActivity}/>
        <AddActivityModal />
      </div>
    </>
  )
}

export default ActivityEdit