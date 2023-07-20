import React from 'react'
import { Card1 } from "../components/PictureCard";
import { Card5 } from "../components/ShowCard2";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import { useParams } from "react-router-dom"


const ActivityShow = ({ activities }) => {
    const { id } = useParams()
    console.log(id)

  return (
    <>
      <div>Your Activity</div>
        <Card1 />
        <Card5 activities={activities}/>
        <AddActivityModal />
    </>
  )
}

export default ActivityShow