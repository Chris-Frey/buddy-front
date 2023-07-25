import {React, useState} from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";



const AddActivityModal = ({}) => {

  const [newActivity, setNewActivity] = useState({
    category:"",
    activity:"",
    start_time:"",
    duration:"",
    location:"",
    description:""
  })

  // const navigate = useNavigate()
  const handleChange = (e) => {
    setNewActivity({...newActivity, [e.target.name]: e.target.value})
  }

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
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
            value={newActivity.activity}
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
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="TIME"
            contentLeft={<Text fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="LOCATION"
            contentLeft={<Text fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="INFO"
            contentLeft={<Text fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="DURATION"
            contentLeft={<Text fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer justify="space-around">
          <Button auto flat color="#FFCD4E" onPress={closeHandler}>
            CLOSE
          </Button>
          <Button auto color="#FFCD4E" onPress={closeHandler}>
            CREATE ACTIVITY
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddActivityModal