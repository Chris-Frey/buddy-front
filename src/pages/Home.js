import React from 'react'
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import ActivityCard from '../components/ActivityCard'

const Home = ({activities}) => {
  // console.log(activities[0].);
  return (
    <>
    <div>Home</div>
    <h3>ACTIVITIES IN THE NEXT 30 MIN</h3>
    {activities.map((activity, index) => {
      return (
        <ActivityCard />
      )
    })}
    <h3>ACTIVITIES IN THE NEXT HOUR</h3>
    <h3>ACTIVITIES IN THE NEXT 2 HOURS</h3>
    <h3>ACTIVITIES IN THE NEXT 4 HOURS</h3>
    <h3>ACTIVITIES IN THE NEXT 8 HOURS</h3>
    <AddActivityModal/>
    </>
  )
}

export default Home