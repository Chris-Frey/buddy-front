import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react"
import ActivityDropDown from "../ActivityDropDown";



const AddActivityModal = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
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
          <ActivityDropDown/>

          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="EVENT"
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