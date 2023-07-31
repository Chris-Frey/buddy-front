import React from 'react'
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import ActivityCard from '../components/ActivityCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom"
import styles from "../styles/ActivityFilter.css"
const ActivityFilter = (props) => {

  const { category } = useParams()

    // activityFilter filters the activities objects and only shows the ones with category matching the name typed into the address bar
  const activityFilter = props.activities?.filter(value => {
    return value.category === category
   })
   .map((value,index) => {
    return <div><ActivityCard activities={value} key={index}/></div>
  })

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
  return (
    <>

  <h3 className='filter_page_titles'>ACTIVITIES HAPPENING <br/>SOON</h3>
    <Carousel 
      partialVisible
      infinite
      responsive={responsive}
      >
      {activityFilter}
    </Carousel>
        
    <AddActivityModal/>
    </>

  )
}

export default ActivityFilter
