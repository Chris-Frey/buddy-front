import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import { NavLink } from "react-router-dom";


const BrowseActivityModal = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  
  return (
    <div>
      <Button auto color="#FFCD4E" shadow onClick={handler}>
        BROWSE ACTIVITIES
      </Button>
      <Modal
        css={{bg:"#FFCD4E"}}
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        >

        <Modal.Header >
          <Text id="modal-title" color={"black"} weight={"bold"} size={30}>
            BROWSE ACTIVITIES
          </Text>
        </Modal.Header>

        <Modal.Body>
        <NavLink to="/weight_lifting">
          <Text className="modal-title" color={"black"} weight={"bold"} size={20} onClick={closeHandler}>
            WEIGHT LIFTING
          </Text>
          </NavLink>

          <NavLink to="/running">
          <Text className="modal-title" color={"black"} weight={"bold"} size={20} onClick={closeHandler}>
            RUNNING
          </Text>
          </NavLink>

          <NavLink to="/yoga">
          <Text className="modal-title" color={"black"} weight={"bold"} size={20} onClick={closeHandler}>
            YOGA
          </Text>
          </NavLink>

          <NavLink to="/basketball">
          <Text className="modal-title" color={"black"} weight={"bold"} size={20} onClick={closeHandler}>
            BASKETBALL
          </Text>
          </NavLink>

          <NavLink to="/soccer">
          <Text className="modal-title" color={"black"} weight={"bold"} size={20} onClick={closeHandler}>
            SOCCER
          </Text>
          </NavLink>

          <NavLink to="/hiking">
          <Text className="modal-title" color={"black"} weight={"bold"} size={20} onClick={closeHandler}>
            HIKING
          </Text>
          </NavLink>

          <NavLink to="/cycling">
          <Text className="modal-title" color={"black"} weight={"bold"} size={20} onClick={closeHandler}>
            CYCLING
          </Text>
          </NavLink>

          <NavLink to="/dancing">
          <Text className="modal-title" color={"black"} weight={"bold"} size={20} onClick={closeHandler}>
            DANCING
          </Text>
          </NavLink>
        </Modal.Body>
        <Modal.Footer justify="space-around">
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default BrowseActivityModal