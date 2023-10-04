import React from "react";
import { useState } from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddActivityModal.css"


const AddActivityModal = ({createActivity, currentUser, handleModal}) => {
// start_time is sent into the database as an ISO8601 format date.  Needs to be read in javascript with a Date.parse method.
  const [newActivity, setNewActivity] = useState({
    category:"",
    activity_name:"",
    activity_photo:"",
    start_time:"",
    duration:"",
    location:"",
    description:"",
    creator_id: currentUser?.id
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewActivity({...newActivity, [e.target.name]: e.target.value})
  }
  const [visible, setVisible] = React.useState(false);
  const closeHandler = () => {
    setVisible(false);
  };

  const submitHandler = () => {
    console.log(newActivity)
    createActivity(newActivity);
    closeHandler()
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
          <button type="submit" onClick={submitHandler}>Submit</button>
          </div>


        </div>
      </div>







    {/* old modal below */}
      {/* <div>
        <Button className="button" auto color={"black"} css={{bg:"#FFCD4E", margin:"0"}}onClick={handler}>
          Add Activity
        </Button>
      <div/>

      <Modal
        css={{bg:"#FFCD4E"}}
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        >
        <Modal.Header>
          <Text id="modal-title" weight={"bold"} size={25}>
            CREATE AN ACTIVITY
          </Text>
        </Modal.Header>
        <Modal.Body>

          <Input
            onChange={handleChange}
            name='category'
            value={newActivity.category}
            label="CATEGORY"
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            placeholder="WHICH CATEGORY IS YOUR ACTIVITY IN?"
            contentLeft={<Text fill="currentColor" />}
            />
          <Input
            onChange={handleChange}
            name='activity_name'
            value={newActivity.activity_name}
            label="ACTIVITY"
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            placeholder="GIVE IT A NAME"
            contentLeft={<Text fill="currentColor" />}
            />
          <Input
            onChange={handleChange}
            name='start_time'
            value={newActivity.start_time}
            label="TIME"
            type="datetime-local"
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            placeholder="WHEN DO YOU WANT TO START?"
            contentLeft={<Text fill="currentColor" />}
            />
          <Input
            onChange={handleChange}
            name='location'
            value={newActivity.location}
            label="LOCATION"
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            placeholder="ADDRESS OF ACTIVITY"
            contentLeft={<Text fill="currentColor" />}
            />
          <Input
            onChange={handleChange}
            name='description'
            value={newActivity.description}
            label="INFO"
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            placeholder="A SHORT DESCRIPTION"
            contentLeft={<Text fill="currentColor" />}
            />
          <Input
            onChange={handleChange}
            name='duration'
            value={newActivity.duration}
            label="DURATION"
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            type="float"
            placeholder="HOW LONG IS YOUR EVENT?"
            contentLeft={<Text fill="currentColor" />}
            />
          <Input
            onChange={handleChange}
            name='activity_photo'
            value={newActivity?.activity_photo}
            label="PHOTO URL"
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            placeholder="INSERT A LINK"
            contentLeft={<Text fill="currentColor" />}
            />
        </Modal.Body>

        <Modal.Footer justify="space-around">
           <button onClick={closeHandler}>
            CLOSE
          </button>

          <button onClick={submitHandler}>
            CREATE ACTIVITY
          </button>
        </Modal.Footer>
      </Modal>
    </div> */}
    </>
  );
}

export default AddActivityModal
