import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
const BrowseActivityModal = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  
  return (
    <div>
      <Button auto color="#FFCD4E" shadow onPress={handler}>
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
            BROWSE ACTIVITIES
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-title" size={14}>
            <a href="#">WEIGHT LIFTING</a>
          </Text>
          <Text id="modal-title" size={14}>
            <a href="#">RUNNING</a>
          </Text>
          <Text id="modal-title" size={14}>
            <a href="#">YOGA</a>
          </Text>
          <Text id="modal-title" size={14}>
            <a href="#">BASKETBALL</a>
          </Text>
          <Text id="modal-title" size={14}>
            <a href="#">SOCCER</a>
          </Text>
          <Text id="modal-title" size={14}>
            <a href="#">HIKING</a>
          </Text>
          <Text id="modal-title" size={14}>
            <a href="#">CYCLING</a>
          </Text>
          <Text id="modal-title" size={14}>
            <a href="#">DANCING</a>
          </Text>
        </Modal.Body>
        <Modal.Footer justify="space-around">
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default BrowseActivityModal