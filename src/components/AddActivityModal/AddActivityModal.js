import React from "react";
import { useState } from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


const AddActivityModal = ({createActivity, currentUser}) => {
// start_time is sent into the database as an ISO8601 format date.  Needs to be read in javascript with a Date.parse method.
  const [newActivity, setNewActivity] = useState({
    category:"",
    activity_name:"",
    activity_photo:"",
    start_time:"",
    duration: 2.0,
    location:"",
    description:"",
    creator_id: currentUser?.id
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewActivity({...newActivity, [e.target.name]: e.target.value})
  }
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
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
      <div>
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
    </div>
    </>
  );
}

export default AddActivityModal
