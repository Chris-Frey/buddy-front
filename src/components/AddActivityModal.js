import { React, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "../styles/AddActivityModal.css"


const AddActivityModal = ({createActivity, currentUser, handleModal}) => {
// start_time is sent into the database as an ISO8601 format date.  Needs to be read in javascript with a Date.parse method.
  const [newActivity, setNewActivity] = useState({
    category:"Hiking",
    activity_name:"Mt. Leguna Hike",
    activity_photo:"https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    start_time:"",
    duration:"120",
    location:"Mt. Leguna Trailhead",
    description:"Bring lots of water!",
    creator_id: 2
    // creator_id: currentUser?.id
  })

  const handleChange = (e) => {
    setNewActivity({...newActivity, [e.target.name]: e.target.value})
  }

  const submitHandler = () => {
    console.log(newActivity)
    createActivity(newActivity);
    handleModal()
  }

  return (
    <>

<div className="modalBackground" >
        <div className="modalCard">
          <div className="modalTitle">
            Add Activity Details
          </div>
          <div className="modalBody">
            <input
              label="Category"
              value={newActivity.category}
              type="text"
              name="category"
              placeholder="e.g. Soccer"
              onChange={handleChange}/>
            <input
              label="Event Name"
              value={newActivity.activity_name}
              type="text"
              name="activity_name"
              placeholder="e.g. 3v3"
              onChange={handleChange}
              />
            <input
              label="Address"
              value={newActivity.location}
              type="text"
              name="location"
              placeholder="e.g. 400 B St, San Diego, CA"
              onChange={handleChange}
              />
            <input
              label="Activity Duration"
              value={newActivity.duration}
              type="number"
              name="duration"
              placeholder="e.g. 90"
              onChange={handleChange}
              />
            <input
              label="Activity Details"
              value={newActivity.description}
              type="text"
              name="description"
              placeholder="e.g. bring your own water and shin guards!"
              onChange={handleChange}
              />
            <input
              label="start_time"
              value=""
              type="datetime-local"
              name="start_time"
              placeholder="e.g. 90"
              onChange={handleChange}
              />
            {/* <input
            label="photo"
            value="https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              type="text"
              name="activity_photo"
              placeholder="activity photo link"
              onChange={handleChange}
              /> */}
          </div>
          <div className="modalFooter">
          <button onClick={handleModal}>Close</button>
          <button type="submit" onClick={submitHandler}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddActivityModal
