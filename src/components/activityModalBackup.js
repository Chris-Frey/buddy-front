import { React, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "../styles/AddActivityModal.css"


const AddActivityModal = ({createActivity, currentUser, handleModal}) => {
// start_time is sent into the database as an ISO8601 format date.  Needs to be read in javascript with a Date.parse method.
  // const [newActivity, setNewActivity] = useState({
  //   category:"",
  //   activity_name:"",
  //   activity_photo:"",
  //   start_time:"",
  //   duration:"",
  //   location:"",
  //   description:"",
  //   creator_id: currentUser?.id
  // })
  const [newActivity, setNewActivity] = useState({
    category:"Sports",
    activity_name:"Hiking",
    activity_photo:"asdfasdfasdfa",
    start_time: today.getTime() + 28800000,
    duration:"90",
    location:"Balboa Park",
    description:"Bring snacks and water!",
    creator_id: 2
  })

  const today = new Date()

  function createNewObject() {
    submitHandler()
    return new Object();
  }

  // Set an interval to create a new object every 30 minutes.
  const interval = setInterval(createNewObject, 30 * 60 * 1000);

  // Start the timer.
  interval.start();

  const handleChange = (e) => {
    setNewActivity({...newActivity, [e.target.name]: e.target.value})
  }

  const submitHandler = () => {
    console.log(newActivity)
    createActivity(newActivity);
    handleChange()
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
              placeholder="e.g. Soccer"/>
               {/* onChange={handleChange}/> */}
            <input
              label="Event Name"
              value={newActivity.activity_name}
              type="text"
              name="activity_name"
              placeholder="e.g. 3v3"
              onChange={handleChange}/>
            <input
              label="Address"
              value={newActivity.location}
              type="text"
              name="location"
              placeholder="e.g. 400 B St, San Diego, CA"
              onChange={handleChange}/>
            <input
              label="Activity Duration"
              value={newActivity.duration}
              type="number"
              name="duration"
              placeholder="e.g. 90"
              onChange={handleChange}/>
            <input
              label="Activity Details"
              value={newActivity.description}
              type="text"
              name="description"
              placeholder="e.g. bring your own water and shin guards!"
              onChange={handleChange}/>
            <input
              label="start_time"
              value={newActivity.start_time}
              type="datetime-local"
              name="start_time"
              placeholder="e.g. 90"
              onChange={handleChange}/>
            <input
            label="photo"
            value={newActivity.activity_photo}
              type="text"
              name="activity_photo"
              placeholder="e.g. https://www..."
              onChange={handleChange}/>
          </div>
          <div className="modalFooter">
          <button onClick={handleModal}>Close</button>
          {/* <button type="submit" onClick={submitHandler}>Submit</button> */}
          <button  onClick={interval.start()}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddActivityModal
