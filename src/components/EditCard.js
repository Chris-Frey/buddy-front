import { React } from "react";
import { Card, Col, Row, Button, Text, Input, Dropdown } from "@nextui-org/react";
import { Link } from 'react-router-dom'

const EditCard = ({}) => {

  return(
   
  <>
  <Card css={{ w: 500, h: "70vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
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
      </Dropdown.Menu>
    </Dropdown>
        
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0, color: "#94f9f0" ,bg: "white" }}>
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Save
              </Text>
            </Button>
            <Link to="/activityedit">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
               Cancel
              </Text>
            </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </>
  )
    };
export default EditCard
