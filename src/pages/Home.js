import React from 'react'
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import ActivityCard from '../components/ActivityCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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



// maps through activity objects and displays them
  // const activityDisplay = props.activities?.map((value,index) => {
  //   return <div><ActivityCard activities={value} key={index}/></div>
  // })
  //filters activities by time
  const activityFilter800 = props.activities?.filter(value => {
    return +value.start_time < 800
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

  const activityFilter900 = props.activities?.filter(value => {
    return +value.start_time >= 800 && +value.start_time < 900
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

  const activityFilter1100 = props.activities?.filter(value => {
    return +value.start_time >= 900 && +value.start_time < 1100
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

  const activityFilter1500 = props.activities?.filter(value => {
    return +value.start_time >= 1100 && +value.start_time < 1500
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

  const activityFilter2300 = props.activities?.filter(value => {
    return +value.start_time >= 1500 && +value.start_time < 2300
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })


  return (
    <>
    <h3>ACTIVITIES HAPPENING IN THE NEXT<br/>30 MIN</h3>
    <Carousel 
      partialVisible
      infinite
      responsive={responsive}
      >
        {activityFilter800}
    </Carousel>

    <h3>ACTIVITIES HAPPENING IN THE NEXT<br/>HOUR</h3>
    <Carousel 
      partialVisible
      infinite
      responsive={responsive}
      >
    {activityFilter900}
    </Carousel>

    <h3>ACTIVITIES HAPPENING IN THE NEXT<br/>2 HOURS</h3>
    <Carousel 
      partialVisible
      infinite
      responsive={responsive}
      >
    {activityFilter1100}
    </Carousel>

    <h3>ACTIVITIES HAPPENING IN THE NEXT<br/>4 HOURS</h3>
    <Carousel 
      partialVisible
      infinite
      responsive={responsive}
      >
    {activityFilter1500}
    </Carousel>

    <h3>ACTIVITIES HAPPENING IN THE NEXT<br/>8 HOURS</h3>
    <Carousel 
      partialVisible
      infinite
      responsive={responsive}
      >
    {activityFilter2300}
    </Carousel>

    <AddActivityModal currentUser={props.currentUser} activities={props.activities} createActivity={props.createActivity}/>
    </>
  )
}
export default Home
