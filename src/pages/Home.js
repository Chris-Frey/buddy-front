import React from 'react'
import ActivityCard from '../components/ActivityCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../styles/Home.css'

const Home = (props) => {

  //parameters for carousel
  const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40
    },

    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 500, min: 325 },
      items: 1,
      partialVisibilityGutter: 100
    }
  };
  // creates new time object to be used to get current time
  const today = new Date()

  //filters activities by time (milliseconds from Epoch of 1970)
  const activityFilter30Min = props.activities?.filter(value => {
    let startTimeinMillliseconds = Date.parse(value.start_time)
    return startTimeinMillliseconds > today.getTime() && startTimeinMillliseconds < today.getTime() + 1800000
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

  const activityFilter1hour = props.activities?.filter(value => {
    let startTimeinMillliseconds = Date.parse(value.start_time)
    return startTimeinMillliseconds > today.getTime() + 1800001 && startTimeinMillliseconds < today.getTime() + 3600000
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

  const activityFilter2hour = props.activities?.filter(value => {
    let startTimeinMillliseconds = Date.parse(value.start_time)
    return startTimeinMillliseconds > today.getTime() + 3600001 && startTimeinMillliseconds < today.getTime() + 7200000
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

  const activityFilter4hour = props.activities?.filter(value => {
    let startTimeinMillliseconds = Date.parse(value.start_time)
    return startTimeinMillliseconds > today.getTime() + 7200001 && startTimeinMillliseconds < today.getTime() + 14400000
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

  const activityFilter8hour = props.activities?.filter(value => {
    let startTimeinMillliseconds = Date.parse(value.start_time)
    return startTimeinMillliseconds > today.getTime() + 14400001 && startTimeinMillliseconds < today.getTime() + 28800000
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })


  return (
    <>
    <div className='homeBody'>
    <div className='home_background'>
      <h3 className='title'>ACTIVITIES HAPPENING IN THE NEXT<br/><span className='time-frame'>30 MIN</span></h3>
      <Carousel className='carousel'
        partialVisible
        infinite
        responsive={responsive}
        >
        {activityFilter30Min}
      </Carousel>

      <h3 className='title'>ACTIVITIES HAPPENING IN THE NEXT<br/><span className='time-frame'>1 HOUR</span></h3>
      <Carousel className='carousel'
        partialVisible
        infinite
        responsive={responsive}
        >
        {activityFilter1hour}
      </Carousel>

      <h3 className='title'>ACTIVITIES HAPPENING IN THE NEXT<br/><span className='time-frame'>2 HOURS</span></h3>
      <Carousel className='carousel'
        partialVisible
        infinite
        responsive={responsive}
        >
        {activityFilter2hour}

      </Carousel>

      <h3 className='title'>ACTIVITIES HAPPENING IN THE NEXT<br/><span className='time-frame'>4 HOURS</span></h3>
      <Carousel className='carousel'
        partialVisible
        infinite
        responsive={responsive}
        >
        {activityFilter4hour}
      </Carousel>

      <h3 className='title'>ACTIVITIES HAPPENING IN THE NEXT<br/><span className='time-frame'>8 HOURS</span></h3>
      <Carousel className='carousel'
        partialVisible
        infinite
        responsive={responsive}
        >
        {activityFilter8hour}
      </Carousel>
    </div>
    </div>
    </>
  )
}
export default Home
