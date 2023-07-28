import React from "react";
import { useState } from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";



const AddActivityModal = ({createActivity, currentUser}) => {

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
    console.log(newActivity);
    createActivity(newActivity);
    closeHandler()
  }

  return (
    <div>

      <Button auto color="#FFCD4E"  shadow onPress={handler}>
        +
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
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
            color="primary"
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
            color="primary"
            size="lg"
            placeholder="GIVE IT A NAME"
            contentLeft={<Text fill="currentColor" />}
          />
          <Input
            onChange={handleChange} 
            name='start_time'
            value={newActivity.start_time}
            label="TIME"
            clearable
            bordered
            fullWidth
            color="primary"
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
            color="primary"
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
            color="primary"
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
            color="primary"
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
            color="primary"
            size="lg"
            placeholder="INSERT A LINK"
            contentLeft={<Text fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer justify="space-around">
          <Button auto flat color="#FFCD4E" onClick={closeHandler}>
            CLOSE
          </Button>
          <Button auto color="#FFCD4E" onClick={submitHandler}>
            CREATE ACTIVITY
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddActivityModal
