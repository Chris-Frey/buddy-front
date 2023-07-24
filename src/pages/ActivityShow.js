import React from 'react'
import PictureCard from "../components/PictureCard";
import DetailsCard from "../components/DetailsCard";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import { useParams } from "react-router-dom"


const ActivityShow = (props) => {
    const { id } = useParams()
    let currentActivity = props.activities.find((activity) => activity.id === +id)


  return (
    <>
      <div>Your Activity</div>
      <div className='activityShowBody'>
        <PictureCard />
        <DetailsCard currentActivity={currentActivity}/>
        <AddActivityModal />
      </div>
    </>
  )
}

export default ActivityShow