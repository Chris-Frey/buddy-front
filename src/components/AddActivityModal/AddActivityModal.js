import React from "react";
import { useState } from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";




const AddActivityModal = ({createActivity}) => {
  const [newActivity, setNewActivity] = useState({
    category:"",
    activity:"",
    start_time:"",
    duration:"",
    location:"",
    description:""
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
            name='activity'
            value={newActivity.activity}
            label="EVENT"
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
            placeholder="HOW LONG IS YOUR EVENT?"
            contentLeft={<Text fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer justify="space-around">
          <Button auto flat color="#FFCD4E" onPress={closeHandler}>
            CLOSE
          </Button>
          <Button auto color="#FFCD4E" onPress={submitHandler}>
            CREATE ACTIVITY
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddActivityModal