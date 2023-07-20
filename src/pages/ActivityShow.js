import React from 'react'
import { Card1 } from "../components/PictureCard";
import { Card5 } from "../components/ShowCard2";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'


const ActivityShow = () => {


  return (
    <>
      <div>Your Activity</div>
        <Card1 />
        <Card5 />
        <AddActivityModal />
    </>
  )
}

export default ActivityShow