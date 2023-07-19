import { Dropdown } from "@nextui-org/react";

const ActivityDropDown = () => {
  return (
    <>
    <Dropdown>
      <Dropdown.Button color="warning" flat>CATEGORY</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">WEIGHT LIFTING</Dropdown.Item>
        <Dropdown.Item key="copy">RUNNING</Dropdown.Item>
        <Dropdown.Item key="edit">BASKETBALL</Dropdown.Item>
        <Dropdown.Item key="edit">YOGA</Dropdown.Item>
        <Dropdown.Item key="edit">SOCCER</Dropdown.Item>
        <Dropdown.Item key="edit">HIKING</Dropdown.Item>
        <Dropdown.Item key="edit">CYCLING</Dropdown.Item>
        <Dropdown.Item KEY="dancing">DANCING</Dropdown.Item>
        <Dropdown.Item key="delete" color="warning">
          Delete file
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}
export default ActivityDropDown